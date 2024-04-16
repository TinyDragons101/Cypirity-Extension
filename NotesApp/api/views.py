import os, json
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Prediction
from .serializers import NoteSerializer
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.output_parsers import ResponseSchema, StructuredOutputParser
from langchain_google_genai import ChatGoogleGenerativeAI
import urllib

# Create your views here.

os.environ["GOOGLE_API_KEY"] = 'AIzaSyDJEvOWOEDGYvVmm-hSGH5KucSXdHq9Ltw'
llm = ChatGoogleGenerativeAI(model="gemini-pro")

def formatted_conversation(conversation: str):
    response_schema = ResponseSchema(
        name ="formatted_conversation",
        description="Trả về cuộc hội thoại sau khi thêm tên người nhắn"
    )
    parser = StructuredOutputParser.from_response_schemas([response_schema])
    format_instruction = parser.get_format_instructions()

    message = llm.predict(f"""\
Xóa tất cả các thẻ HTML, CSS và các ký tự đặc biệt không mang ý nghĩa từ đoạn văn bản đầu vào. Trong cuộc hội thoại đó, tên của người gửi tin nhắn đã bị mất. Hãy thêm tên phù hợp vào đầu mỗi đoạn tin nhắn, có thể sử dụng tên tự đặt nếu cần thiết. Mỗi đoạn tin nhắn phải được ngăn cách bởi một dòng trống. Kết quả đầu ra là văn bản thuần túy, không cần thêm từ 'markdown'.
                          Kết quả trả về phải có dạng json.

Conversation:
{conversation}

{format_instruction}
""")
    
    return parser.parse(message)

def scam_prediction(conversation: str):
    accuracy_schema = ResponseSchema(
        name ="accuracy",
        description="Trả về phần trăm khả năng cuộc hội thoại này có dấu hiệu lừa đảo, không có dấu % chỉ có số"
    )
    reasons_schema = ResponseSchema(
        name ="reasons",
        description="Liệt kê các lý do đó là cuộc hội thoại có dấu hiệu lừa đảo"
    )
    parser = StructuredOutputParser.from_response_schemas([accuracy_schema, reasons_schema])
    format_instruction = parser.get_format_instructions()

    message = llm.predict(f"""\
Hãy phân tích cuộc hội thoại được cung cấp và đưa ra nhận định có dấu hiệu lừa đảo hay không. Nếu cuộc hội thoại có dấu hiệu của hành vi lừa đảo, hãy liệt kê các lý do cụ thể khiến bạn nhận định như vậy. Nếu không có dấu hiệu lừa đảo, hãy nêu rõ lý do tại sao cuộc hội thoại được coi là hợp pháp và đáng tin cậy.
Kết quả trả về phải có dạng json.

Conversation:
{conversation}

{format_instruction}
""")
    
    return parser.parse(message)

def toxic_prediction(content: str):
    accuracy_schema = ResponseSchema(
        name ="accuracy",
        description="Trả về phần trăm khả năng nội dung trong trang web này có nội dung độc hại hoặc dấu hiệu lừa đảo, không có dấu % chỉ có số"
    )
    reasons_schema = ResponseSchema(
        name ="reasons",
        description="Liệt kê các lý do đó là trang web có dấu hiệu lừa đảo hoặc có thông tin độc hại"
    )
    parser = StructuredOutputParser.from_response_schemas([accuracy_schema, reasons_schema])
    format_instruction = parser.get_format_instructions()

    message = llm.predict(f"""\
Hãy đưa ra dự đoán về khả năng trang web sau có nội dung độc hại hoặc dấu hiệu của lừa đảo.
Nếu nó nội dung độc hại hay dấu hiệu lừa đảo hãy liệt kê các lý do.
Kết quả trả về phải có dạng json.

Conversation:
{content}

{format_instruction}
""")
    
    return parser.parse(message)

@api_view(['GET'])
def getScamPrediction(request, data):
    data = urllib.parse.unquote(data)
    print(data)
    return Response(scam_prediction(data))

@api_view(['GET'])
def getToxicPrediction(request, data):
    data = urllib.parse.unquote(data)
    return Response(toxic_prediction(data))