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
  console.log(1231233);
  if(selectedText !== "") {
    console.log("Selected text: " + selectedText);
    // Do something with the selected text here
  }
}

window.resizeTo(window.innerWidth, 500);
console.log(window.innerWidth);

get_image_data();
// get_text_data();
get_selected_text();




