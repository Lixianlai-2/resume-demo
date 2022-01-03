let demo = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `/*你好，我是一名前端新人，
*现在开始打印一个正方体，并放到右边
*#div1{
*  width:400px;
* height:400px;
*}
*/
#div1 {
  border: 1px solid blue;
  width:400px;
  height:400px;
  }
/*
* 接下来我把它放到右边并变为圆形
*# div1 {
*  border-radius:50%;
*  box-shadow:0 0 3px rgba(0, 0, 0, 0.5);
*  border:none;
}
*/
#div1 {
  border-radius:50%;
  box-shadow:0 0 3px rgba(0, 0, 0, 0.5);
  border:none;
}
/*接下来将其变为一左一右黑白颜色
*/
`;

let n = 0;
let string2 = "";

const step = function () {
  setTimeout(() => {
    if (string[n] === "\n") {
      console.log("这一行有执行吗？");
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      console.log(n);
      string2 += string[n];
    }
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);

    // string.length等于60，当n等于58时
    if (n < string.length - 1) {
      // n等于59，n是下标，所以string2[59]刚好打印最后一位
      n = n + 1;
      console.log(string2);
      step();
    }
  }, 10);
};

step();

console.log(style);
