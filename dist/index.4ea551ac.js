let html=document.querySelector("#html"),style=document.querySelector("#style"),string="/*你好，我是一名前端新人，\n*现在开始打印一个正方体，并放到右边\n*/\n#div1 {\n  border: 1px solid blue;\n  width:200px;\n  height:200px;\n  \n  }\n/*\n* 接下来我把它放到中间并变为圆形\n*/\n#div1 {\n  border-radius:50%;\n  box-shadow:0 0 3px rgba(0, 0, 0, 0.5);\n  border:none;\n}\n/*接下来将其左右变成一黑一白\n*/\n#div1 {\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);\n}\n/*接下来增加两个小球，通过径向梯度将它们分别设置为中间白周围黑，和中间黑周围白\n*/\n#div1::before {\n  width:100px;\n  height:100px;\n  top:0;\n  left:50%;\n  border-radius:50%;\n  background:#fff;\n  transform:translateX(-50%);\n  background: radial-gradient(circle, rgba(0,0,0,1) 7%, rgba(255,255,255,1) 7%, rgba(255,255,255,1) 100%);\n}\n\n#div1::after {\n  width:100px;\n  height:100px;\n  bottom:0;\n  left:50%;\n  border-radius:50%;\n  background:#000;\n  transform:translateX(-50%);\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 7%, rgba(0,0,0,1) 7%);\n}\n/*一个简单的太极图完成啦\n*/\n",n=0,string2="";const step=function(){setTimeout((()=>{"\n"===string[n]?(console.log("这一行有执行吗？"),string2+="<br>"):" "===string[n]?string2+="&nbsp":(console.log(n),string2+=string[n]),html.innerHTML=string2,style.innerHTML=string.substring(0,n),html.scrollTo(0,99999),html.scrollIntoView(!1),n<string.length-1&&(n+=1,console.log(string2),step())}),30)};step(),console.log(style);
//# sourceMappingURL=index.4ea551ac.js.map
