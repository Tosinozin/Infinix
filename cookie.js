let cookieHTML = "  <div class='text'><p>We use cookies to improve your experience.By your continued use of this site you accept such use. To change your settings please see our policy.</p></div><div class='chngSetting'><button>Change Settings</button><a href='#' onclick=closeCookieButton()><i class='fa fa-times' aria-hidden='true'></i></a></div>"

let cookieStyling = "<style>.box{background-color: #000;width: auto;padding: 5px 10px;opacity: .6;color: #fff;overflow: hidden;position: fixed;bottom: 0;right: 0;left: 0;}.text{padding-left: 50px;width: 80%;float: left;}.text p{padding-top: 10px;font-family: sans-serif;}.chngSetting{padding: 16px;float: right;padding-right: 40px;}button{padding: 10px;}button:hover{background-color: #f00;;}.chngSetting a{padding-left: 15px;color: #fff;font-size: 25px;}a:hover{</style>"

let box  = document.createElement("div");
box.className = "box";

box.innerHTML =cookieHTML + cookieStyling;
let body = document.body;

function closeCookieButton(){ 
    document.body.removeChild(box)
}
body.appendChild(box);