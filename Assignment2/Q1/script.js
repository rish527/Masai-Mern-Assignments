var heading=document.getElementById("main-heading");
heading.textContent="Changed DOM Practice Page";


var headPara=document.getElementsByClassName("text-content");
for(var i=0;i<headPara.length;i++){
    headPara[i].style.color="red";
}


let container=document.querySelector('.container');
container.style.backgroundColor="whiteSmoke";


var allP=document.querySelectorAll('.container p');
for(var i=0;i<allP.length;i++){
    allP[i].textContent="Mnupilated Text";
}









