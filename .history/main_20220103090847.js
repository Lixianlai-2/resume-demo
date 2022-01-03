let demo = document.querySelector("#demo");

let string = "我是一名前端新人";

let n = 0;
// demo.innerHTML = string.substring(0, n);

const step = function () {
  n = n + 1;
  console.log(n);
  if (n <= string.length) {
    setTimeout(() => {
      //   demo.innerHTML = string[n];
      demo.innerHTML = string.substring(0, n);
      step();
    }, 500);
  }
};

step();
