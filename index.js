let mode = document.querySelector('#mode');
let currenr_mode="light";

mode.addEventListener('click', () =>{
    if(currenr_mode === "light" ){
        currenr_mode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }

    else{
        currenr_mode="light";
        document.querySelector("body").style.backgroundColor="white";
    }


});