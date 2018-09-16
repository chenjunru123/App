
window.onload=function () {
    let inputs=document.querySelectorAll("input");
    let user=document.querySelector(".user-block .user");
    let pass=document.querySelector(".users");
    console.log(user.value);
    console.log(pass.value);
    let yes=document.querySelector(".yes");
    let yes1=document.querySelector(".yes1");
    let no=document.querySelector(".no");
    let no1=document.querySelector(".no1");
    // console.log(yes, yes1, no, no1);
    let btns=document.querySelector(".block .btn");
    // console.log(btns);
    // inputs.onblur=function () {
    //     if(user.value=="abc" && pass.value=="111111") {
    //         yes.style.display = "block";
    //     }
    //     else {
    //         no.style.display="block";
    //     }
    // }
    pass.onblur=function () {
        if(user.value=="abc" && pass.value=="111111") {
            yes.style.display = "block";
            yes1.style.display = "block";
            no.style.display = "none";
            no1.style.display = "none";
            btns.onclick=function () {
                window.open("querendingdan.html");
            }
        }else if(user.value!="abc"&&pass.value=="111111"){
            no.style.display="block"
            yes1.style.display="block";
            no1.style.display = "none";
            yes.style.display = "none";
        }
        else if(pass.value!="111111"&&user.value=="abc"){
            no1.style.display = "block";
            yes.style.display="block";
            no.style.display="none";
            yes1.style.display="none";
        }else if(user.value!="abc" && pass.value!="111111"){
            no.style.display = "block";
            no1.style.display = "block";
            yes.style.display = "none";
            yes1.style.display = "none";
        }
    }
    btns.onclick=function () {
        if(user.value=="" && pass.value==""){
            window.open("error.html");
        }
    }
}


