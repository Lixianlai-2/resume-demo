let demo = document.querySelector("#demo");

let n = 1;
demo.innerHTML = n;

// setTimeout(() => {
//   n += 1;
//   demo.innerHTML = n;
// }, 1000);

const step = function () {
  console.log(n);
  if (n <= 10) {
    n = n + 1;
    setTimeout(() => {
      demo.innerHTML = n;
      step();
    }, 500);
  }
};

step();
