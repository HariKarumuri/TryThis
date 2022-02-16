const btnheight= 50;
const btnwidth = 100;
const maxheight = window.innerHeight - 5*btnheight;
const maxwidth = window.innerWidth-btnwidth;
let yesBtn = document.querySelector(".btn1");
let noBtn = document.querySelector(".btn2");
let count =0;
let div = document.querySelector(".divv");

yesBtn.addEventListener("click",()=>{
  window.alert("YAAA ME TOO!!!");
  div.classList.add("showGif");
  noBtn.classList.add("hidden");
  
 
});
noBtn.addEventListener("mouseover",()=>{
  noBtn.style.left = Math.floor(Math.random()*(maxwidth+1)) + 'px';
  noBtn.style.top = Math.floor(Math.random()*(maxheight+1)) + 'px';
  console.log(count)
  count++;
  if(count==10){
    window.alert("Just Click Yes!!,you've hated me 10 times already  -_-   ")
    count=0;
  }
})
