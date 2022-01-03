let demo = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `/*你好，我是一名前端新人，
*现在开始打印CSS内容， 
*body{
*  color:blue;
*}
**/
#style {
 background-color:red;
}
`;

let n = 0;
let string2 = "";

style.innerHTML = `
body {
  color:red;
}
`;

const step = function () {
  setTimeout(() => {
    if (string[n] === "\n") {
      console.log("这一行有执行吗？");
      string2 += "<br>";
    } else {
      console.log(n);
      string2 += string[n];
    }
    demo.innerHTML = string2;

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
