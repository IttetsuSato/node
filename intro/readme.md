# 練習問題

## 1-1 JSの言語仕様は何によって定められ、どのように更新されているか

ECMAScriptによって定められ、TC39という委員会によって毎年ステージ4の仕様がリリースされている

## 1-2 REPLで1週間の秒数を出力してみましょう

```js
> node
> 60 * 60 * 24 * 7
```

## 1-3 REPLで1~10までの数の積を、console.log()で途中経過も合わせて出力してください

```js
$ .editor
let res = 1;
for (let i=1; i<=10; i++) {
  res = res * i;
  console.log(res)
}
res
```
