let demo = document.querySelector("#demo");

let n = 1;
demo.innerHTML = n;

// setTimeout(() => {
//   n += 1;
//   demo.innerHTML = n;
// }, 1000);

const step = function () {
  n = n + 1;
  console.log(n);
  if (n <= 10) {
    setTimeout(() => {
      demo.innerHTML = n;
      step();
    }, 500);
  }
};

step();
