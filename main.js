let demo = document.querySelector("#demo");

let string = `你好，我是一名前端新人，
现在开始打印CSS内容， 
body{
  background-color:blue;
}
`;

// string = string.replace(/\n/g, "<br>");
let n = -1;
let string2 = "";

const step = function () {
  n = n + 1;
  setTimeout(() => {
    if (string[n] === "\n") {
      console.log("这一行有执行吗？");
      string2 += "<br>";
    } else {
      console.log(n);
      string2 += string[n];
    }
    demo.innerHTML = string2;
    if (n <= string.length) {
      console.log(string2);
      step();
    }
  }, 10);
};

step();
