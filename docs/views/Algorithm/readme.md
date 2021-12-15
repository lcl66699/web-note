# 数据结构与算法

## 时间复杂度

    定性描述算法运行时间，取复杂度最高的，共同完成一个循环，是o1。

- o1 ologn on o nlogn on2 on3 o2n on！ 越往后面越需要优化

## 空间复杂度 O（n）

    在运行过程中临时占用存储空间的度量，取复杂度最高。

> o1 on on 方 log n 二分搜索 n log n 排序 on3 2n 次方 树

> 通常舍空间换时间

## 栈

    后进先出的数据结构，类似蜂窝煤，js可以用array实现栈所有功能，入栈push，出栈pop

- 查看栈顶元素，stack［stack-1］

- 10 进制转 2 进制
  - 比如 35，用 35 除 2，得到得到 17 继续除，最后拿到所有余数，倒叙输出就是二进制。

## 队列 queue

    先进先出的数据结构。

## 链表

- [x] 单向链表：多个元素组成的列表，元素存储不连续，用 next 找下一个，连在一起，直到最后是 null（单向链表）
- 双向链表 123 21 可以向前，可以向后
- 循环链表 123 123 123 到最后不是 null
  > 删除链表 1 2 3 直接 把 1 指向 3 就把 2 删除了

> - 优点：链表插入|删除元素很快，O1 就可以完成
> - 缺点：时间为 On，比如获取第 5 个元素 需要一直 next

> 原型链本质是链表。原型链上的节点是各种原型对象，比如 fun.pro，Obj.prototype。
> 原型链通过*proto*属性连接各种原型对象
> obj 的原型，Obj 原型，null
> fun 原型，Fun，然后 Obj，然后 null

## 集合 new Set

    集合是一种无序且唯一的数据结构,Set 对象存储的值总是唯一的

### 方法

- add 添加某个值，返回 Set 对象本身。
- clear 删除所有的键/值对，没有返回值。
- delete 删除某个键，返回 true。如果删除失败，返回 false。
- forEach 对每个元素执行指定操作。
- has 返回一个布尔值，表示某个键是否在当前 Set 对象之中。

### 求交集

```js
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter((x) => b.has(x))); // {2, 3}
```

## 字典 new Map

    字典与集合类似，字典也是存储唯一值的数据结构，但它是以键值对形式存储，es6的map

map 本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

### 实例的属性和操作方法

- size 返回 Map 结构的成员总数

```js
var obj = new Map([
  ["name", "tom"],
  ["age", 12],
  ["sex", "男"],
]);
obj.size; //3
```

- set(key, value)
  set 方法设置 key 所对应的键值，然后返回整个 Map 结构。如果 key 已经有值，则键值会被更新，否则就新生成该键。
- get 读取 key 对应的键值，如果找不到 key，返回 undefined。
- has 返回一个布尔值，表示某个键是否在 Map 数据结构中。
- delete 删除某个键，返回 true。如果删除失败，返回 false。
- clear 删除所有的键/值对，没有返回值。

## 树（数组转树）

- left right val

#### 完全二叉树 complete binary tree

除了最后一层，每一个节点都有两个孩子，第 h 层，都需要集中在最左面。

#### 满二叉树 full binary tree

每个节点都有两个孩子 叶节点

#### 二叉搜索树-BST

- 每一个节点左侧都小于该节点，右侧的值都大于这个本身节点

深度优先遍历：尽可能深的搜索数的分支。

广度优先遍历：先访问离根节点最近的节点。

先中后序便利

## 图

...

## 堆

...

## leetcode 算法题解题思路

### 20.有效的括号。

解题：
新建一个栈，遍历字符串，遇到左括号入栈，遇到右括号与栈顶括号匹配，就出栈。
最后空了就合法，否则不合法。该题时间和空间复杂度都是 On

### 144.二叉树的前序遍历

### 933.最近的请求次数 时间和空间复杂度都是 On

### 237，删除链表中的节点

### 206.反转链表

### 2.两数相加

### 83.删除排序链表中的重复元素。

### 141，环形列表

### 3.无重复字符的最长子串

### 349.两个数组的交集

求交集 fillter，has
求差集。正好反过来，感叹号 ❕

### 1.两数之和

### 704 二分搜索

链表的 dummy 节点： 1. 作为新链表的头节点 2. 解决链表头部的极端情况
dummy 节点

## 排序

### 搜索排序

### 选择排序

时间复杂度

### 插入排序

从第二个数开始往前比，比他大就往后排，直到最后一个数。

## 贪心算法

期盼通过每个阶段的局部最优选择，从而达到全局的最优

结果不一定是最优

贪心算法其实可以认为是 dp 问题的一个特例, 除了动态规划的各种特征外, 贪心算法还需要满足"贪心选择性质", 当然效率也比动态规划要高。

### 455.分饼干

思路：
局部最优:既能满足孩子，还消耗最少
先将较小的饼干分给胃口最小的孩子

步骤：
对饼干数组和胃口数组进行升序排序
遍历饼干数组，找到能满足第一个孩子（胃口最小的孩）的饼干
然后继续遍历这个饼干，找到满足第 2、3、...、n 个孩子的饼干

```js
var findContentChildren = function(g, s) {
  var sortFun = (a, b) => {
    return a - b;
  };
  g.sort(sortFun);
  s.sort(sortFun);
  var num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[0]) {
      num++;
      g.shift();
    }
  }
  // s.forEach((item)=>{
  //     if(item>=g[num]){
  //         num++
  //     }
  // })
  return num;
};
```

- 时间复杂度为 n\*logn
- 空间复杂度为 O1

### 122.买卖股票的最佳时机 Ⅱ

思路：
上帝视角，知道未来价格
局部最优：见好就收，见差就不动，不做任何打算

步骤：
新建一个变量，用来统计总利润
遍历价格数组，如果当前价格比昨天高，就在昨天卖买，今天卖，否则就不交易
遍历结束后，返回利润之和

code:

```js
var maxProfit = function(prives) {
  var num = 0;
  for (let i = 0; i < prives.length - 1; i++) {
    if (prives[i] < prives[i + 1]) {
      num += prives[i + 1] - prives[i];
    }
  }
  return num;
};
```

- 时间复杂度为 On
- 空间复杂度为 O1

### 区间调度问题

来看一个经典的贪心算法问题 Interval Scheduling 区间调度.

有许多[start, end]的闭区间, 请设计一个算法, 算出这些区间中, 最多有几个互不相交的区间。

```js
function intervalSchedule(intvs: number[][]) {}

// 比如intvs = [[1,3], [2,4], [3,6]]
// 这些区间最多有两个区间互不相交, 即 [1,3], [3,6], intervalSchedule函数此时应该返回2
```

这个问题在现实中其实有很多应用场景, 比如你今天有好几个活动可以参加, 每个活动区间用[start, end]表示开始和结束时间, 请问你今天最多能参加几个活动？

### 贪心求解

大家可以先想一想，有什么思路？

1. 可以每次选择可选区间中开始最早的那个？

不行, 因为可能有的区间开始很早, 结束很晚, 比如[0,10], 使我们错过了很多短区间比如[1,2],[2,3]

2. 可以每次选择可选区间中最短的那个？

不行, 直接看上面这个例子[[1,3], [2,4], [3,6]], 这样的话会选择出 [1, 3], [2, 4], 并不能保证他们不相交

#### 正确思路

1. 从可选区间 intvs 里, 选择一个 end 结束时间 最小的区间 x
2. 把所有与 x 相交的区间从 intvs 中剔除
3. 重复 1,2, 直到 intvs 为空, 之前选出的各种区间 x， 就是我们要求的结果

把整个思路转换成代码的话, 因为我们要选出 end 最小的区间, 所以我们可以先对区间根据 end 升序排序.

1. 选出 end 最小的区间

由于我们已经排过序了, 所以直接选择第一个区间即可

2. 剔除与 x 相交的区间

这一步就没第一步那么简单了, 这里建议大家画个图看看

- 代码如下

```js
// 有许多[start, end]的闭区间, 请设计一个算法, 算出这些区间中, 最多有几个互不相交的区间。
// 比如intvs = [[1,3], [2,4], [3,6]]
// 这些区间最多有两个区间互不相交, 即 [1,3], [3,6], intervalSchedule函数此时应该返回2

function intervalSchedule(intvs) {
  if (intvs.length === 0) {
    return 0;
  }
  const sortArr = intvs.sort((a, b) => {
    return a[1] - b[1];
  });
  var count = 1; //区间
  let xEnd = sortArr[0][1]; //拿到第一个区间的结束区间

  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i][1] <= xEnd) {
      count++;
      xEnd = sortArr[i][1];
    }
  }
  return count;
}

console.log(
  intervalSchedule([
    [1, 3],
    [2, 4],
    [3, 6],
  ])
);
```

看一下区间调度.js

### 区间调度算法的应用

### 435. 无重叠区间

- 解答

刚才咱们已经找到了最多有几个互不相交的区间数 n, 那么总数减去 n 就可以了~

```js
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  let sortArray = intervals.sort((a, b) => a[1] - b[1]);

  let count = 1;

  let xEnd = sortArray[0][1];

  for (let item of intervals) {
    // 注意, 这里题目说了区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠, 所以应该是item[0] >= xEnd
    if (item[0] >= xEnd) {
      xEnd = item[1];
      count++;
    }
  }

  return intervals.length - count;
};
```

### 2. 用最少的箭头射爆气球

- 解答

这个问题和区间调度算法又是非常的类似, 大家稍微转换一下思路即可。

如果最多有 n 个不重叠的空间, 那么就至少需要 n 个箭头穿透所有空间，所以我们要求的其实就是最多有几个不重叠的空间。

来看一下这张图

但是这个题里的描述, 边界重叠后, 箭头是可以一起射爆的, 所以两个区间的边界重叠也算是区间重叠。

```js
var findMinArrowShots = function(points) {
  if (!points.length) {
    return 0;
  }
  //贪心法, 每个气球只少需要一支箭, 先按照右端点排序, 然后每次从最小的右端点射出一支箭, 去掉被射爆的气球, 重复该过程.
  points.sort((a, b) => {
    return a[1] - b[1];
  });
  let count = 1;
  let xEnd = points[0][1];
  for (let val of points) {
    if (val[0] > xEnd) {
      // 不挨着，注意这里不是>=
      count++;
      xEnd = val[1];
    }
  }
  return count;
};
```

## 动态规划

```js
const dp = (arr) => {
  let res = [].concat(arr);
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; index < arrLen; index++) {
      // if (arr[i] > sarr[i-j]+xxx){
      if (arr[i] > arr[i - j]) {
        arr[i] = "重新赋值";
      }
    }
  }
};
```

# 搜索算法(递归或者栈解决)

```js
const dfs = (arr) => {
  if (shot(xx)) {
    return xxx;
  }
  if (judge(xxx)) {
    //递归
    dfs();
  }
};
```

```js
const bfs = () => {
  while (queue.length) {
    const point = queue.shift();
    for (可达 in point) {
      queue.push(point);
      if (shot(可达)) {
        return 可达;
      }
    }
  }
};
```
