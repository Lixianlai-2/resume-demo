let demo = document.querySelector("#demo");

let n = 1;
demo.innerHTML = n;

const step = function () {
  console.log(n);
  n = n + 1;
  setTimeout(() => {
    demo.innerHTML = n;
  }, 1000);
  step();
};

step();
