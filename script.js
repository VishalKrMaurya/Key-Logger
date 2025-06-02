const startbtn = document.getElementById("startlogger");
const stopbtn = document.getElementById("stoplogger");
const keyname = document.getElementById("keyname");
const keypress = document.getElementById("keypress");


startbtn.addEventListener('click',()=>{
    document.addEventListener('keydown',handleDown);
    document.addEventListener('keyup',handleUp);

    startbtn.disabled=true;
    stopbtn.disabled=false;
})

stopbtn.addEventListener('click',()=>{
    document.removeEventListener('keydown',handleDown);
    document.removeEventListener('keyup',handleUp);
    keyname.textContent="";
    keypress.textContent="";

    startbtn.disabled=false;
    stopbtn.disabled=true;
})

function handleDown(e){
    keyname.textContent=`Key ${e.key} is pressed down`;
    keypress.textContent="Key is Down";
}
function handleUp(e){
    // console.log(e);
    keyname.textContent=`Key ${e.key} is pressed up`;
    keypress.textContent="Key is Up";
}