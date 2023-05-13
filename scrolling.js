let stars = document.getElementById(`stars1`);
let moon = document.getElementById("moon2");

let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");

let mountains7 = document.getElementById("mountains7");
let nouvil = document.querySelector(".nouvil");
let main=document.querySelector(".main")


window.onscroll = function () {
  let val = scrollY;
  
  
  stars.style.left=val+`px`
  moon.style.top=val*3+`px`
  if(val>"60" ){
  nouvil.style.display="block";
  nouvil.style.fontSize=val+`px`;}
 if(val>"80"){
    nouvil.style.fontSize=80+`px`;
    nouvil.style.position="fixed";
   
  }




else{
    nouvil.style.display="none";


}
mountains3.style.top=val*2+`px`
mountains4.style.top=val*1.5+`px`
river5.style.top=val+`px`
boat6.style.top=val+`px`
boat6.style.left=val*3+`px`
if(val>"170"){
    main.style.background= `linear-gradient(#2285a3,rgb(98 52 84))`
}
else{
    main.style.background= `linear-gradient(#22011d,rgb(58, 3, 41)`

}
};

