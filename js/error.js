window.onload= function () {
    //获取span标签
    let span=document.getElementsByTagName("span")[0];
    // 获取span标签中的内容
    let num=span.innerHTML;
    // console.log(num);
    //创建时间间隔函数，每隔1s执行一次回调函数
    var t=setInterval(fn,1000);
    function fn() {
        //时间--
        num--;
        //如果时间减为0
        if(num==0){
            //清除时间间隔函数
            clearInterval(t);
            //跳转到登录页面
            window.open("sign.html");
        }
        //改变span中的数字
        span.innerHTML=num;
    }
}