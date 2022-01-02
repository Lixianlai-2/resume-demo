let demo = document.querySelector("#demo");
let string = "我是一名前端新人";
let n = 0;
demo.innerHTML = string[0];
const step = function() {
    n = n + 1;
    console.log(n);
    if (n < string.length) setTimeout(()=>{
        demo.innerHTML = string[n];
        step();
    }, 500);
};
step();

//# sourceMappingURL=index.7fbff28d.js.map
