function get_text_data() {
  text_data = document.getElementsByTagName("div");

  text_data_list = [];

  for (var i = 0; i < text_data.length; i++) {
    text_data_list.push(text_data[i].innerText);
    console.log(i, text_data[i].innerText);
  }
  return text_data_list;
}

function get_image_data() {
  image_data = document.getElementsByTagName("img");

  image_data_list = [];

  for (var i = 0; i < image_data.length; i++) {
    image_data_list.push(image_data[i].src);
    console.log(i, image_data[i].src);
  }
  return image_data_list;
}

function get_selected_text() {
  var selectedText = window.getSelection().toString();
  // console.log(1231233);
  if(selectedText !== "") {
    console.log("Selected text: " + selectedText);
    // Do something with the selected text here
  }
}

// get_image_data();
// get_text_data();
// get_selected_text();


// Tạo một thẻ div để chứa cả hai hình ảnh
var containerDiv = document.createElement('div');
containerDiv.style.position = 'fixed';
containerDiv.style.left = '0';
containerDiv.style.bottom = '0';
containerDiv.style.display = 'flex';
containerDiv.style.flexDirection = 'column';

// Tạo một thẻ img để chứa hình ảnh gốc
var imageElement = document.createElement('img');
imageElement.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAAgCAYAAABKKLTHAAAAAXNSR0IB2cksfwAACBVJREFUeJzt3U1TG/cdwPGvpJUQDyLY9QNMAn5omnhMm2kb+9pODz21576PvoG+k76ATk+dHnroTA7JTMepk7Sxa7uJMRiwjYMFQtiAQEjK4be4QLaTS2ailb6fi0Da3f939vqb/S9IkiRJkiRJkiQNmMInG7/pfd8RkiRJkiRJkiRJ36Xi9x0gSZIkSZIkSZL0XUse1rdPfFEoFACYmxqnUsqej3R78dDI6tYOAO1uj7mpcYDX55w+5qDT/b8Rx9c8fo1vWxOg1zv5AIv99ttvv/3222+//fbbb7/99tvfX/15bifn995+++233377h7nfJ0AkSZIkSZIkSdLAST5YqANQLsWUplSMKcr5+VmSYhmA1eYuANMTVQCebe8BcGslzj3odDg/PxsXTM9ZbsSE5dZyHLNYHwWg043rX3zjVeaax69xfN2sNQFa7YL99ttvv/3222+//fbbb7/99tvfx/15bs/7vbfffvvtt9/+Ye73CRBJkiRJkiRJkjRwkv12AkC5dHDih04XPl6Kicri1iYA89MTADxYbwKw1z6EdPKSbsv1jenPoxdjAPznyQUADjsxc/nFtceZa0L2ullrAthvv/3222+//fbbb7/99ttvv/393Z/n9rzfe/vtt99+++0f5n6fAJEkSZIkSZIkSQMnOfqj14uJybNGDYCPFhL+ejfmI+/NxYjns6cbJ4593qyl/xdZqMfeWgsvGgCs3oqRzr3COQD2i7FUqfi/N8JnrQlkrpu1JsDk6J799ttvv/3222+//fbbb7/99tvfx/15bs/7vbfffvvtt9/+Ye73CRBJkiRJkiRJkjRwkkIrpjL7izELudeKqc0/H1VOTGw4Nj1Z24rpyfG9vWojj+M6d2JvrfpfSgB0fp2ePBmTmPLSKwAKl7uZa3JqUnS0btaaAL+8vGi//fbbb7/99ttvv/3222+//fb3cX+e2/N+7+2333777bd/mPt9AkSSJEmSJEmSJA2cpPTpCACtf7UB6N6MSUlhosfZtV0ASldimrJxN357vbcXMekZXdrl7MH7AGz9LfbyupDcBeBJOmIpPnwJwPhHLwDo1Lq07yTfWBPIXPf0mtXFuF5pw3777bfffvvtt99+++2333777e/n/jy35/3e22+//fbbb/8w9/sEiCRJkiRJkiRJGjhJ8cOYiDR31wDodWMSc+7pDlfvxZvTX3Y6ACz/PaYo7d/GMSMbMYmZud3kysLvARivxfVuvfpDHJNOfwqfbAFQ3I19wlofjDBT+xkA5cI2ABNPmwCZ655e88LH9bje5Iz99ttvv/3222+//fbbb7/99tvfx/15bs/7vbfffvvtt9/+Ye73CRBJkiRJkiRJkjRwku2d2CPrq82YzkytxJvaf7q9x3r63bM/x8HVsZiXjD6KY859GVOb6WqJxy9vA1BiAoCNVkxYqkubcc5InJtMlAGYGbnJuyO/A+CLtT8CcGk9rpe17uk1L1bjN/vtt99+++2333777bfffvvtt7+/+/Pcnvd7b7/99ttvv/3D3O8TIJIkSZIkSZIkaeAka42YiHQPY2+sG2vx/w9nqzy8twfAaDXmJBem4rN9O/bXuvZ2vIW9WilyfzlGLfWt2HOrF8MZJifinGuX49i9VnxfOniLx407AMwX1gGYno4JUda6WWsC/Pu+/fbbb7/99ttvv/3222+//fbb38/9eW7P+72333777bff/mHuj28lSZIkSZIkSZIGSLLfbZ74otuNt6U3moeMjcbfE6MxJ0lKccyl6QoAZydjalMuF7h+NY59Xo+9t5aeHQDwbjr9eXsuNu66/2gXgH+s/YnDTkxufj4+BsBIMxbIWvf0mkkSLfbbb7/99ttvv/3222+//fbbb39/9+e5Pe/33n777bfffvuHud8nQCRJkiRJkiRJ0sBJLs3ERGRlLaY29a2Y4lTKPc5Oxnxkeyf29nrrYkx0rrwZn/9djInOfrvHT94ZB+DSTPy23ohzZqfj/3ISE5lifHBpppK5JpC5btaaR9ex33777bfffvvtt99+++233377+7c/z+15v/f222+//fbbP8z9PgEiSZIkSZIkSZIGTnJjPvbg2mjGpOT96/F/bazI51/sAFDfionLzR/HxOVoonOk1+uxku77VRuPmcpoHMqT5/H9D6Zi4643JuPznSuVzDWBzHWz1gS4MT9uv/3222+//fbbb7/99ttvv/3293F/ntvzfu/tt99+++23f5j7fQJEkiRJkiRJkiQNnKRyNBFJpyqb6T5arf0CnW58101/W04nPefPxCvV2+mb3JuvujxciYnL3HRMeWrjcd3Pv9wDYDb9/sb8BACVpJC5JpC5btaar69jv/3222+//fbbb7/99ttvv/32921/ntvzfu/tt99+++23f5j7fQJEkiRJkiRJkiQNnGRhdR+AVvpm9fuLMbU5UytCOmDpxsCFzx7Em9OvvhkTnSSdwKw3urRjGy62d+I6pVI6gUknMUf7dm02Y0qz1+pmrwmZ62atCWC//fbbb7/99ttvv/3222+//fb3d3+e2/N+7+2333777bd/mPt9AkSSJEmSJEmSJA2cwq+uXe8B9FpH38RHtVKgkP79ohEjnk46TTk/FftoJfFBa79HLz39TPqm92IpTm5sx9SnnB5bSkcu1WqJQrrY6lexP9d7PxpJ146DPn0QUXv73ddrlkonm2pn4lj77bfffvvtt99+++2333777be/P/vz3J73e2+//fbbb7/9w9z/NS4bL20o36MVAAAAAElFTkSuQmCC'; // Thay chuỗi base64 này bằng chuỗi base64 của hình ảnh của bạn
imageElement.style.width = '25%';
imageElement.style.height = '20px';
imageElement.style.imageRendering = 'pixelated';
// Thêm hình ảnh gốc vào thẻ div


// Tạo một div để chứa phia tren
var overlayElement = document.createElement('div');
overlayElement.style.display = 'flex';
overlayElement.style.gap = '0px';

// con cho
var overlayImageElement = document.createElement('img'); 
overlayImageElement.src = 'data:image/png;base64,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'; // Thay đường dẫn này bằng đường dẫn đến hình ảnh phía trên
overlayImageElement.classList.add('gif');
overlayImageElement.style.width = '70px';
overlayImageElement.style.padding = 'auto';
overlayImageElement.style.flexShrink = '0';
overlayImageElement.style.flexGrow = '0';
overlayImageElement.style.imageRendering = 'pixelated';
// overlayImageElement.style.margin = '0px 0px -15px 0px';

overlayImageElement.style.margin = '25px 0px -10px 0px';

// loi noi
var dogTextContainer = document.createElement('div');
dogTextContainer.style.width = "140px";
dogTextContainer.style.height = '80px';
dogTextContainer.style.position = 'relative';
dogTextContainer.style.zIndex = '100';
dogTextContainer.style.transform = 'translate(-150px, 0)';

var dog_text = "lòng mình sẽ không gửi tiền qua những số tài khoản lạ";
var dogText = document.createElement('div');
dogText.textContent = dog_text;
dogText.style.whiteSpace = 'normal';
dogText.style.textAlign = 'center';

dogTextContainer.appendChild(dogText);


overlayElement.appendChild(overlayImageElement);
containerDiv.appendChild(overlayElement);
containerDiv.appendChild(imageElement);

// Thêm thẻ div chứa cả hai hình ảnh vào body của trang
document.body.appendChild(containerDiv);

// Lắng nghe tin nhắn từ background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Kiểm tra xem tin nhắn có chứa thông điệp không
    if (message.message == 'okay') {
      text_data_list = get_text_data();
      text_data = "".concat(get_text_data());

      let apiCall = new XMLHttpRequest();
      apiCall.open("GET", "http://127.0.0.1:8000/api/toxic_prediction/" + encodeURIComponent(text_data.slice(0, 300)));
      apiCall.send();
      apiCall.onload = () => {
        console.log(apiCall.response);

        ret = JSON.parse(apiCall.response);
        str = 'Khả năng lừa đảo: ' + ret['accuracy'] + '\n';
        str += 'Lý do:\n' + ret['reasons'];

        if (ret['accuracy'] > 0) {
          overlayImageElement.src = 'data:image/png;base64,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';
          var overlay = document.createElement("div");
        overlay.setAttribute("id", "customOverlay");
        overlay.innerHTML = "<p>Trang web này đã bị chặn.</p>";
        document.body.appendChild(overlay);
        }

        dog_say_that(str);
      }
    }
    else if (message.message) {
        const selectedText = window.getSelection().toString();
        let apiCall = new XMLHttpRequest();
        apiCall.open("GET", "http://127.0.0.1:8000/api/scam_prediction/" + encodeURIComponent(selectedText));
        apiCall.send();
        apiCall.onload = () => {

          console.log(apiCall.response);

          ret = JSON.parse(apiCall.response);
          str = 'Khả năng lừa đảo: ' + ret['accuracy'] + '\n';
          str += 'Lý do:\n' + ret['reasons'];

          dog_say_that(str);
        }
    }
});

async function dog_say_that(str) {
  // bong bong
  var bubbleBox = document.createElement('img');
  bubbleBox.id = "bubbleBox"
  bubbleBox.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAAA6CAYAAAAuubyuAAAAAXNSR0IArs4c6QAAAPZlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAGAAAAcgE7AAIAAAAMAAAAeIdpAAQAAAABAAAAhAAAAAAAAABIAAAAAQAAAEgAAAABQ2FudmEAVGlueURyYWdvbnMAAASShgAHAAAAOwAAALqgAQADAAAAAQABAACgAgAEAAAAAQAAANGgAwAEAAAAAQAAADoAAAAAQVNDSUkAAAB4cjpkOkRBR0NWQzk5RHhrOjksajoxMzUxNTA0Njg0OTY2MTkzMDUwLHQ6MjQwNDE0MDEA370fTgAAAAlwSFlzAAALEwAACxMBAJqcGAAABhlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOkF0dHJpYj0iaHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8ZGM6Y3JlYXRvcj4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGk+VGlueURyYWdvbnM8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L2RjOmNyZWF0b3I+CiAgICAgICAgIDxkYzp0aXRsZT4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+VGhp4bq/dCBr4bq/IGNoxrBhIGPDsyB0w6puIC0gMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpBbHQ+CiAgICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgIDxBdHRyaWI6QWRzPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICAgICAgICAgICAgICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI0LTA0LTE0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpFeHRJZD5iZjliMGQ2OS02NTIyLTRmZTItYTk3OS0wYjdiMjk3YTcxY2Y8L0F0dHJpYjpFeHRJZD4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvQXR0cmliOkFkcz4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgICAgIDxyZGY6QWx0PgogICAgICAgICAgICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPnhyOmQ6REFHQ1ZDOTlEeGs6OSxqOjEzNTE1MDQ2ODQ5NjYxOTMwNTAsdDoyNDA0MTQwMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpBbHQ+CiAgICAgICAgIDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cq1FqzwAAAPcSURBVHgB7d27axRRFMfxc2bV+MCYNbKuj4CNWCokpXYKKRQLK7XWwkI0Imgj/gliJYgIFooQBdHGws5erFJYBEHyMNkkBIzGZOd4IyIhe2d2JlfF2fluldw798ycD/fHJpPHiPBCAAEEEEAAAQQQKLCA/q1rN7ONMjm5Sbq6Nv6tc1AXgXULxHEsCwtL2tf3dd01fi38YyGyRqNbdPmsiQ2KyQlXf1voxbEegX8kMGIiryONnunO2tu85/wjIbLG5BkXnrvu5HvzXgDHI/A/CbgwPY2W5LLW65+zXldQiGxmZofZ4gMRPZP1hByHQAEE5lTsgvbuGc5yresOkU2NDVgUPXcn6ctyIo5BoGgC7l3pfqW3frHdda8rRDY9vc90+b0r3tvuBMwjUGQBF6Q7LkhX03qI0iaT5ixqvnBzBCgJiPGOEXDvMldseuJ0WkO5Q+RuIgyJWX9aUeYQ6CQBU3348+5zQlO5QmRzH6vuLtzthFoMI9ChAlaN5futpOZyhShudg25QtuTijGOQKcKqOg1m53t8fWXK0Tu68NTviKMIVAKAVsc9PWZOUQ2NbXyg9TDviKMIVAGAfeLQid9fWYOkVSa3EzwCTJWGgFVHfA1mz1EJrt9BRhDoDwCdsjXa54Q1XwFGEOgTALurxMqa/vNHiLVDWsX8zkCJRRoyUzLQAlRaBmBIAFCFMTHYgRECBG7AIFAAUIUCMhyBAgRewCBQAFCFAjIcgQIEXsAgUABQhQIyHIECBF7AIFAAUIUCMhyBAgRewCBQAFCFAjIcgQIEXsAgUABQhQIyHIECBF7AIFAAUIUCMhyBAgRewCBQAFCFAjIcgQIEXsAgUABQhQIyHIECBF7AIEcAu5/zy2tPZwQrRXhcwSSBcZ8U4TIp8IYAn6BEd9w5hDFYlVfAcYQKIuAe6DDK1+vmUPkHi2x31eAMQRKI1CRlSdEtrwyh0jEjrasZgCBsgiYvNKe+qiv3UwhstnPR9ziuq8AYwiUQUDjaOUBd95XphDFzWbbx5B7qzOIQAcIqMpNrdU+JLXivldKf9ns+AGL1fs2lr6SWQSKL2Amjyu76ufTOmn7TmRx9CitAHMIdKqAiTxpF6CV3lNDFDfGh90NhWOdikRfCCQJuLvRtyu99XNJ86vHvV/O2ejoZuve8tIdeHz1wXyMQAkE3mgUXddq7V3WXltCZDPjl8z0hivQl7UIxyFQcIFv7nufZ1EU3dOdtbd5e/kdop+P0WtM9IvJ1rxFOB6BwglUKsui8kXU5mXH/CfVg4uF64ELRgABBBBAAAEEEEAAAQQQQACB4gv8ABBcsH0ulnmqAAAAAElFTkSuQmCC';
  bubbleBox.style.width = '260px';
  bubbleBox.style.height = '190px';

  // loi noi
  var dogTextContainer = document.createElement('div');
  dogTextContainer.id = "dogTextContainer"
  dogTextContainer.style.width = "230px";
  dogTextContainer.style.height = '160px';
  dogTextContainer.style.position = 'relative';
  dogTextContainer.style.zIndex = '100';
  dogTextContainer.style.flexShrink = '0';
  dogTextContainer.style.flexGrow = '0';
  dogTextContainer.style.transform = 'translate(-240px, 20px)';

  var dog_text = str;
  var dogText = document.createElement('div');
  dogText.textContent = dog_text;
  dogText.style.whiteSpace = 'normal';
  dogText.style.textAlign = 'center';
  dogText.style.justifyContent = 'center';

  dogTextContainer.appendChild(dogText);
  overlayElement.appendChild(bubbleBox);
  overlayElement.appendChild(dogTextContainer);

  await new Promise(r => setTimeout(r, 5000));

  document.getElementById("bubbleBox").remove();
  document.getElementById("dogTextContainer").remove();
};
