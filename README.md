## 基本原理

#### 用 setTimeout 递归实现 1 到 10

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641137695796-573bce3d-61cd-4605-be66-d95c15033dd1.png)

#### 输出字符串的每一个字

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641137737550-65b34894-5cb4-4efe-beed-82e99173c3b7.png)

#### `String.substring`打印一段字符

1. 注意`string.substring(0,n)`是不打印 n 的

```javascript
let demo = document.querySelector("#demo");

let string = "我是一名前端新人";

let n = 0;
// demo.innerHTML = string.substring(0, n); // 下面的string.substring(0, n)会打印第0位

const step = function () {
  n = n + 1;
  console.log(n);
  if (n <= string.length) {
    setTimeout(() => {
      demo.innerHTML = string.substring(0, n);
      step();
    }, 500);
  }
};

step();
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641172454704-3db6b8e7-e827-4e4d-a1b5-938ffdfce87c.png)

## 打印几段字符

#### 理解`\n`字符串

- `\n`是占字符串的一个下标

![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641177963973-205449a6-99e0-4601-83ed-409d35f9e2a1.png)
![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641177972229-58ea695b-0b40-4f71-af72-3889d54e1758.png)

#### 用到的 api

1. `innerHTML`
1. `string.replace()`

![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641177906674-d1bd5f94-bfcf-4154-9357-076723f2f34c.png)

3. 正则表达式![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641177833396-d1d42f24-002d-470f-9b95-2a40dfdb4bd8.png)，替换所有`\n`

#### 用正则表达式替换并打印

```javascript
let demo = document.querySelector("#demo");

let string = `你好，我是一名前端新人，
现在开始打印CSS内容， 
body{
  background-color:blue;
}
`;

string = string.replace(/\n/g, "<br>");
let n = -1;

const step = function () {
  n = n + 1;
  setTimeout(() => {
    demo.innerHTML = string.substring(0, n);
    if (n <= string.length) {
      step();
    }
  }, 500);
};

step();
```

#### 打印时多出<的问题

![多出一个.gif](https://cdn.nlark.com/yuque/0/2022/gif/25396806/1641178575109-8c4ecad1-e6f0-4cce-bafa-fd02f378e352.gif)

#### 查找 Bug&打印整段

1. 注意把前面正则表达式那行删除，这里我是用 console.log()方法知道 string[n] === "\n"是否执行的
1. 解决打印时多出一个`<`的方法，

```javascript
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
```

## 画出太极图

![太极图.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641201733697-95fc172c-3556-4273-b08c-547eb964bb89.png)

#### 解决 undefined 的问题

- `string[0] `到`string[59]`刚好是 60 位

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641201976283-ddbd2113-06e5-4f1d-870b-39c735032fef.png)

```javascript
let demo = document.querySelector("#demo");


let string = `你好，我是一名前端新人，
现在开始打印CSS内容，
body{
  background-color:blue;
}
`;


let n = 0;
let string2 = "";


const step = function () {
  setTimeout(() => {
    if (string[n] === "\n") {
      console.log("这一行有执行吗？");
      string2 += "
";
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
```

## 考虑到手机

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641211555113-9c5fcf01-8f58-4bbe-834e-ce2696ba4c8d.png)

#### 在输入文字时，如何持续滚动到底部显示

- 搜问题，在 stack overflow 中查到`element.**scrollIntoView**(false);`

![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641204355206-2c807844-3f60-407e-8146-4dc84989cdda.png)

#### 如何处理手机模式下出现的横向滚动条

- 对添加问题的`#demo`部分进行`word-break:break-all`设置

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641204770719-9d5cf0a8-0bd2-4288-a4f3-29d8dd87dfd5.png)

#### 如何解决手机模式下太极图显示不全的问题

- 设置媒体查询

## 部署到 GitHubPages

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1641222697799-bee40326-54df-493e-864d-fa14bee7db26.png?x-oss-process=image%2Fresize%2Cw_1500%2Climit_0)
