window.onload=function () {
    let dui=document.querySelectorAll(".tanchu .content ul li .iconfont");
    console.log(dui);
    for (let i=0;i<dui.length;i++){
        dui[i].onclick=function () {
                    for(let j=0;j<dui.length;j++){
                        dui[j].classList.remove("active");
                    }
            dui[i].classList.add("active");
        }
    }

////////////////////////////////////////////////////////////////////////////////////
    let dianji=document.querySelector(".time .bottom ");
    let tanchu=document.querySelector(".yincang");
    let man=document.querySelector("main");
    console.log(dianji,tanchu);
    dianji.onclick=function () {
        tanchu.style.display="block";
        man.style.opacity="0";
    }
}