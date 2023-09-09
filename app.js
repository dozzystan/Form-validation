"use strict"

let img = document.querySelector('img');
let paswordInput = document.querySelector('#password');
let close = 'imgs/visibility_off_FILL0_wght400_GRAD0_opsz24.svg';
let open = 'imgs/visibility_FILL0_wght400_GRAD0_opsz24.svg'

function revealPwd(){
    if(paswordInput.type === "password"){
        
        paswordInput.type = "text"
        img.setAttribute('src',open)
    }else{
        paswordInput.type = "password";
        img.setAttribute('src', close)

    }
}

img.addEventListener('click',revealPwd)