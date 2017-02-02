function sendMessage() {
  var rootURL = "https://secure.niki.ai/ola/accessToken";
  $.ajax({
    url: rootURL,
    dataType: "jsonp",
    cache: true,
    jsonp: false,
    data: hashtoparam(),
    success: function(response){
    },
  });
}

function hashtoparam() {
  var text = (window.location.hash);
  text = text.substring(1);
  var aparams = text.split("&");
  var keyVal = [];
  var dict = {};
  for (i = 0; i < aparams.length; i++) {
    keyVal = aparams[i].split("=");
    dict[keyVal[0]] = decodeURIComponent(keyVal[1]);
  }
  return (dict);
}
