fortuneBank = [
"สีนำโชคของวันนี้คือสีแดงนะ",
"พยายามเข้านะ ต้องทำได้แน่ๆ เชื่อมั่นในตัวเองไว้",
"ลองออกไปเดินเล่น วันนี้อาจจะมีโชคก็ได้",
"ร่าเริงเข้าไว้ ทุกอย่างจะดีเอง",
"ระวังฝนตก ออกจากบ้านก็อย่าลืมพกร่มนะ",
"พรุ่งนี้จะมีโชค"
];

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");

    setTimeout(function(){
        getFortune();
    },3000);

}

function getFortune(){
    rand = Math.floor(Math.random()*fortuneBank.length);
    fortune.innerText = fortuneBank[rand];
    fortune.style.opacity = 1
    fortune.style.top = "96px";
}