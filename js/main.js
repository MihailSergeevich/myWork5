const arr = ["Frontend & Backend developer"]

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const hero_develp = document.querySelector(".hero_develp")

let textIndex = 0;
let charIndex = 0;

const textSpeed = 100;
const pause = 2000;
const delitigText = 80;

function typeText () {
    const text = arr[textIndex]
   hero_develp.textContent = text.slice(0,charIndex ++)

   if (charIndex <= text.length) {
    setTimeout(typeText,textSpeed )
   }else{
    setTimeout(backText,pause)
   }
}
function backText () {
    const text = arr[textIndex]
    hero_develp.textContent = text.slice(0,charIndex--)
    if (charIndex >= 0){
        setTimeout(backText, delitigText)
    }else{ 
        textIndex = (textIndex + 1 ) % arr.length
        charIndex = 0;
        setTimeout(typeText,pause)
    }
}
typeText()

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

AOS.init();

const sendMessage = document.getElementById("btn_message")

const urlApi = "http://localhost:3000/user"

const form = document.getElementById("form_message")

  form.addEventListener('submit',async(event) =>{
    event.preventDefault()
   const formD =  new FormData(form)
   const dataSend = Object.fromEntries(formD)

   let response = await fetch(urlApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(dataSend)
  });
  
  let result = await response.json();
  console.log(result);
  })

   
  