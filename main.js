/*
    phone
        đặc tính (Thuộc tính)
                màu sắc
                kích Thucowms
                tên
                ...
        hành động - method(phương thức)
// */
// var phone = {
//     color:"green",
//     name:"iphone 11",
//     date:2020,
//     sendMessage : function(){
//         alert("bạn đang gửi tn");
//     }
// } 
// phone.price=500;
// phone.takePicture=function(){
//     alert("hello")
// }
/**
 *  tạo 1 object tên user gồm cá thược tính 
 * 
 */
var user = {
    name: "Phạm Văn Hùng",
    email: "hungpvph25702@fpt.edu.vn",
    signin: function () {
        alert("Bạn đang đăng nhập")
    },
    signout: function () {
        alert("đăng nhập thành công")
    }
}
// console.log(user.name);
var show_display = document.querySelector("#show_display");
// show_display.innerHTML=user.email
// document.write(user.name)
// var user_info=document.querySelector(".user_info")
// user_info.innerHTML=`
// <h2>${user.email}</h2>
// `
var userName = [
    {
        name: "sontv",
        email: "sontv@gmail.com"
    },
    {
        name: "hungpv",
        email: "hungpv@gmail.com"
    }
]
var users = document.querySelector("#users");
var email = document.querySelector("#email")
var btn = document.querySelector("#btn")
btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (users.value == user.name && email.value == user.email) {
        show_display.innerHTML = "đăng nhập thành công"
    } else if (users.value == "") {
        show_display.innerHTML = "nhập username"
    } else if (email.value == "") {
        show_display.innerHTML = "nhập email"
    }
    else {
        show_display.innerHTML = "đăng nhập thất bại"
        alert("đăng nhập thất bại")
    }
})

