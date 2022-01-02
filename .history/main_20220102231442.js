let demo = document.querySelector("#demo");

let n = 1;
demo.innerHTML = n;

setTimeout(() => {
  n += 1;
  demo.innerHTML = n;
}, 1000);

// const step = function () {
//   console.log(n);
//   n = n + 1;
//   if (n <= 10) {
//     setTimeout(() => {
//       demo.innerHTML = n;
//     }, 1000);
//     step();
//   }
// };

// step();
