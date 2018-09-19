  let qujiesuan = document.querySelector("footer .right");
  let tan=document.querySelector(".zhezhao");
  console.log(qujiesuan);
  qujiesuan.onclick=function () {
     tan.style.display="block";
  }
  let n_add = document.querySelector(".pic .add")
  let n_jian = document.querySelector(".pic .jian")
  let num = document.querySelector(".pic h2")
  let pri = document.querySelector(".price span")
  console.log(n_add,num,pri )
  n_add.onclick=function () {
    // console.log(num.innerText)
      num.innerText = parseFloat(num.innerText) + 1
      pri.innerText = parseFloat(pri.innerText) +24
  }
  n_jian.onclick=function () {
      // console.log(num.innerText)
      num.innerText = parseFloat(num.innerText) - 1
      pri.innerText = parseFloat(pri.innerText) -24
  }