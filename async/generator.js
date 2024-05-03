function* generatorFunc() {
  console.log("generatorFunc is executed");
  console.log("yield 1");
  yield 1;
  console.log("yield 2");
  yield 2;
  console.log("yield 3");
  yield 3;
  console.log("generatorFunc is finished");
  return "finished";
}

const iterable = generatorFunc();
for (const val of iterable) {
  console.log("for ... of", val);
}

// 配列もイテラブル
const arrayIterator = [1, 2, 3][Symbol.iterator]();
for (const val of arrayIterator) {
  console.log("for ... of", val);
}

// next()の引数はyieldの戻り値
function* resetableGeneratorFunc() {
  let count = 0;
  while (true) {
    if (yield count++) {
      count = 0;
    }
  }
}

function* tryCatchGeneratorFunc() {
  try {
    yield 1;
  } catch (err) {
    console.error(err);
    yield 2;
  }
}

function parseJSONAsync(json) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.parse(json));
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
}

function* asyncWithGeneratorFunc(json) {
  try {
    const result = yield parseJSONAsync(json);
    console.log("parse result", result);
  } catch (err) {
    console.error(err);
  }
}

const asyncWithGenerator = asyncWithGeneratorFunc('{"foo": 1}');
