
const messages =
document.getElementById("messages");


const input =
document.getElementById("userInput");


const sendBtn =
document.getElementById("sendBtn");


const typing =
document.getElementById("typing");


const themeBtn =
document.getElementById("themeBtn");





let userName =
localStorage.getItem("userName") || "";







// XABAR QO'SHISH

function addMessage(text,type){


let div =
document.createElement("div");


div.className =
"message " + type;


div.innerText =
text;


messages.appendChild(div);



messages.scrollTop =
messages.scrollHeight;


}









// BOT JAVOBI


function botAnswer(text){


let msg =
text.toLowerCase();




if(
msg.includes("salom") ||
msg.includes("assalom")
){

return userName
?
`Salom ${userName}! 😊 Qanday yordam bera olaman?`
:
"Salom! 😊 Ismingiz nima?";

}





if(
msg.includes("ism")
){


if(!userName){


userName =
text
.replace(/ismim|men|ism/i,"")
.trim();



localStorage.setItem(
"userName",
userName
);



return `Tanishganimdan xursandman ${userName}! 😊`;


}


return `Sizning ismingiz ${userName}.`;


}






if(
msg.includes("vaqt") ||
msg.includes("soat")
){


let time =
new Date()
.toLocaleTimeString();


return `Hozir vaqt: ${time} ⏰`;

}







if(
msg.includes("sana") ||
msg.includes("bugun")
){


let date =
new Date()
.toLocaleDateString();


return `Bugungi sana: ${date} 📅`;

}








if(
msg.includes("charchadim") ||
msg.includes("charchoq")
){


return "Biroz dam ol 😊 Keyin yana davom etamiz 💪";

}








if(
msg.includes("rahmat")
){


return "Arzimaydi! 😊 Har doim yordam beraman.";

}







if(
msg.includes("qalesan") ||
msg.includes("qalaysan")
){


return "Yaxshi! 😊 Siz bilan suhbatlashyapman.";

}








if(
msg.includes("motivatsiya") ||
msg.includes("ruhlantir")
){


return "Har kuni kichik qadamlar katta natija beradi! 🚀";

}








return "Qiziq savol ekan 🤔 Men hali o'rganmoqdaman, lekin yordam berishga harakat qilaman.";

}









// XABAR YUBORISH


function sendMessage(){


let text =
input.value.trim();



if(text==="") return;





addMessage(
text,
"user"
);



input.value="";






typing.style.display="block";




setTimeout(()=>{



typing.style.display="none";



let answer =
botAnswer(text);



addMessage(
answer,
"bot"
);



},800);





}









sendBtn.onclick =
sendMessage;





input.addEventListener(
"keydown",
(e)=>{


if(e.key==="Enter"){

sendMessage();

}


});









// CHAT SAQLASH


window.onload=()=>{


let old =
localStorage.getItem(
"chat"
);



if(old){

messages.innerHTML =
old;

}



};





setInterval(()=>{


localStorage.setItem(

"chat",

messages.innerHTML

);


},1000);









// DARK MODE


themeBtn.onclick=()=>{


document.body.classList.toggle(
"dark"
);



localStorage.setItem(

"virtualTheme",

document.body.classList.contains(
"dark"
)
?
"dark"
:
"light"

);



};







if(
localStorage.getItem(
"virtualTheme"
)==="dark"
){

document.body.classList.add(
"dark"
);

}