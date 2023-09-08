const hourse=document.getElementById("hour");
const minuts=document.getElementById("minutes");
const second=document.getElementById("seconds");
const amp=document.getElementById("ampm");

function digitalclock(){
let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let am="AM";

if(h>12){
    h=h-12;
    am="pm";
}

h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;

hourse.innerText=h;
minuts.innerText=m;
second.innerText=s;
amp.innerText=am;


setTimeout(()=>{
    digitalclock();
},1000);
}
digitalclock();