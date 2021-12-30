// async await
const sleep = (str) => new Promise(r => setTimeout(() => r(str), 1000));

/**
 * 语法糖 core -> 生成器
 * async () => {
 *   const res1 = await sleep('x');
 *   // console
 *   const res2 = await sleep('x');
 *   return 'success'
 * }
 */

// 其实玩儿的生成器
function *test() {
  console.log('------ in --------'); // 第一次 next 会到这里
  const res1 = yield sleep('hello zhuawa!');
  console.log('------- first result -----------', res1); // 第二次 next 会到这里 🔥
  const res2 = yield sleep('hello baidu!');
  console.log('------- second result -----------', res2); // 第三次 next 会到这里 🚀
  return 'success';
}

// 生成
// const gen = test();

// console.log(gen);
// 1. 执行顺序 ✅ 2. 传参 ✅
// const r = gen.next('这是第一次执行的参数'); // 这个参数好像没什么卵用
// console.log(1, r);

// const s = gen.next('这是第二次执行的参数'); // 🔥
// console.log(2, s);

// const t = gen.next('这是第三次执行的参数'); // 🚀
// console.log(3, t);

// 确定是使用生成器来实现，因为可以控制异步流程，并且参数也是可控的...
// 问题 1: 生成器是需要手动触发的 xxx.next()?  -> 自动执行

// const a = gen.next(); // 1

// 手动/暴力解法
// a.value.then(v1 => {
//   const g1 = gen.next(v1);
//   console.log('这里拿到的参数 v1 是 ', v1);

//   g1.value.then(v2 => {
//     const g2 = gen.next(v2);
//     console.log('这里拿到的参数 v2 是 ', v2);
//   })
// });

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    // gen['next']()
    var result = gen[key](arg); // 3. gen.next(value)
    var value = result.value;
  } catch (error) {
    reject(error)
    return;
  }
  
  // 边界，终止条件
  if (result.done) {
    resolve(value); // 5. 最后终止
  }
  else {
    Promise.resolve(value).then(_next, _throw) // 4. 还要接着执行 gen.next(value)
  }
}

// 自动执行，包装
function asyncToGenerator(fn) {
  return function() {
    // ctx
    var self = this, args = arguments;
    return new Promise((resolve, reject) => {
      var gen = fn.apply(self, args); //1. gen = test()

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }

      _next(void 0); //2. 第一次 gen.next(void 0)
    })
  }
}
