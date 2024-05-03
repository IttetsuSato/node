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

async function asyncFunc(json) {
  try {
    const result = await parseJSONAsync(json);
    console.log("parse result", result);
  } catch (err) {
    console.error(err);
  }
}

// asyncFunc('{"foo": 1}');
// => parse result { foo: 1 }
// asyncFunc('{"foo": 1');
// => SyntaxError

async function pauseAndResume(pausePeriod) {
  console.log("Start");
  await new Promise((resolve) => setTimeout(resolve, pausePeriod));
  console.log("End"); // async関数内の処理はawaitの影響を受ける
}

pauseAndResume(1000);
console.log("async関数外の処理はawaitの影響を受けない");

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i > 3) {
          return Promise.resolve({ done: true });
        }
        return new Promise((resolve) => {
          setTimeout(() => resolve({ value: i++, done: false }), 1000);
        });
      },
    };
  },
};

for await (const val of asyncIterable) {
  console.log("for await ... of", val);
}

async function* asyncGenerator() {
  let i = 0;
  while (i <= 3) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i++;
  }
}

for await (const val of asyncGenerator()) {
  console.log("for await ... of", val);
}
