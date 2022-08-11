# 数据结构与算法

## 时间复杂度

定性描述算法运行时间，取复杂度最高的，共同完成一个循环，是o1。

- o1 < ologn <  on <  Onlogn <  on^2  < on^3  < o2^n < on^n！ 越往后面越需要优化
::: tip
- Ο(1)表示基本语句的执行次数是一个常数，一般来说，只要算法中不存在循环语句，其时间复杂度就是Ο(1)。
- O(logn)比如while循环里面操作/2等等
- for 循环的时间复杂度为 O(n)。
- for嵌套for循环on^2 
::: 
## 空间复杂度

在运行过程中临时占用存储空间的度量，取复杂度最高。
**表示算法的存储空间和数据规模之间的关系**

> o1 on on 方 log n 二分搜索 n log n 排序 on3 2n 次方 树

> 通常舍空间换时间

## 栈

后进先出的数据结构，类似蜂窝煤，js可以用array实现栈所有功能，入栈push，出栈pop

- 查看栈顶元素，stack［stack-1］

- 10 进制转 2 进制
  - 比如 35，用 35 除 2，得到得到 17 继续除，最后拿到所有余数，倒叙输出就是二进制。

#### 实现栈
```js
class Stack {
  constructor() {
    this.items = [];
  }

  // 添加新元素到栈
  push(element) {
    this.items.push(element);
  }

  // 移出栈顶元素
  pop() {
    return this.items.pop();
  }

  // 获取栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 判断空
  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}
```

## 队列 
queue

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

## 集合

集合是一种无序且唯一的数据结构,new Set 对象存储的值总是唯一的

#### 方法

- add 添加某个值，返回 Set 对象本身。
- clear 删除所有的键/值对，没有返回值。
- delete 删除某个键，返回 true。如果删除失败，返回 false。
- forEach 对每个元素执行指定操作。
- has 返回一个布尔值，表示某个键是否在当前 Set 对象之中。

#### 求交集

```js
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter((x) => b.has(x))); // {2, 3}
```

## 字典

字典与集合类似，字典也是存储唯一值的数据结构，但它是以键值对形式存储，es6的 new Map

map 本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

#### 实例的属性和操作方法

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

## 树
- （数组转树）
- left right val

遍历查找：深度优先、广度优先

- 前序遍历：中左右
- 中序遍历：左中右
- 后序遍历：左右中

```js
// 树结构
// 前序中序后序遍历
const PreOrder = function(node) {
  if(node !== null) {
    console.log(node.val);
    PreOrder(node.left);
    PreOrder(node.right);
  }
}

const InOrder = function(node) {
  if(node !== null) {
    InOrder(node.left);
    console.log(node.val);
    InOrder(node.right);
  }
}

const PostOrder = function(node) {
  if(node !== null) {
    PostOrder(node.left);
    PostOrder(node.right);
    console.log(node.val);
  }
}
```


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
堆可以放大东西，里面放对象，数组等。
stack栈放基础类型string、number等。
...

## leetcode 算法题解题思路

### 20.有效的括号

解题：
新建一个栈，遍历字符串，遇到左括号入栈，遇到右括号与栈顶括号匹配，就出栈。
最后空了就合法，否则不合法。该题时间和空间复杂度都是 On
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        } else {
            let top = stack[stack.length - 1]
            if (
                (top === "(" && s[i] === ')')
                || (top === "{" && s[i] === '}')
                || (top === "[" && s[i] === ']')
            ) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};
```
- hash Map
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) { return false; }
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (map.has(c)) {
            stack.push(c)
        } else {
            const t = stack[stack.length-1]
            if (map.get(t) === c) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};
```
#### 144.二叉树的前序遍历

#### 933.最近的请求次数 时间和空间复杂度都是 On

#### 237，删除链表中的节点

#### 206.反转链表

#### 2.两数相加

#### 83.删除排序链表中的重复元素。

#### 141，环形列表

#### 3.无重复字符的最长子串

### 349.两个数组的交集

求交集 fillter，has
求差集。正好反过来，感叹号 ❕

#### 1.两数之和

#### 704. 二分查找

#### 二分查找
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((right - left) / 2 + left)//+low防止整数溢出
        if (nums[mid] === target) {
            return mid //出口 返回下标
        } else if (nums[mid] < target) {
            left = mid + 1//砍掉左半边
        } else {
            right = mid - 1//砍掉右半边
        }
    }
    return -1
};
```

链表的 dummy 节点： 1. 作为新链表的头节点 2. 解决链表头部的极端情况
dummy 节点
### 278. 第一个错误的版本
#### 二分查找
```js
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 1
        let high = n
        while (low < high) {
            let mid = Math.floor(low+(high - low) / 2 )
            let val = isBadVersion(mid)
            if (val) {
                high = mid
            } else {
                low = mid + 1
            }
        }
        return low

    };
};
```
### 35. 搜索插入位置

#### 二分查找
```js
var searchInsert = function(nums, target) {
    let left=0
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor((right-left)/2+left)
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<=target){
            left =mid+1
        }else{
            right=mid-1
        }
    }
    return left
};
```
### 21.合并两个有序的链表(归并)
- 思路
  - 和归并排序很像，将数组替换成链表就可以
- 步骤
  - 新建一个链表，作为返回结果
  - 用指针遍历两个有序链表，并比较两个链表的当前节点，较小者先接入新链表，并将指针像后移一步
  - 链表遍历结束，返回新链表
```js
var mergeTwoLists = function (list1, list2) {
    let node = new ListNode(0)
    let p = node //如果不新建一个指针，不知道指到哪里了
    let p1 = list1//想遍历需要指针
    let p2 = list2
    while (p1 && p2) {
        if (p1.val > p2.val) {
            p.next = p2
            p2 = p2.next//用过了，向后移动一位
        } else {
            p.next = p1
            p1 = p1.next
        }
        p = p.next
    }
    //边界情况
    if (p1) {
        p.next = p1
    }
    if (p2) {
        p.next = p2
    }
    return node.next
};
```
### 374.猜数字大小

- 解题：
  - 从数组的中间元素开始，如果中间元素正好是目标值，则搜索过程结束
  - 如果目标值大于或者小于中间元素，则在数组大于或小于中间的那一半去查找
  - 
- 二分搜索
  - 时间复杂度O(logN)
    > 凡是分开两半的基本上都是logN
  - 空间是O1
```JS
var guessNumber = function (n) {
    let low = 1
    let high = n
    while (low <= high) {
        const mid = Math.floor((low+high) / 2)
        const res = guess(mid)
        if (res == 0) {
            return mid
        } else if (res == 1) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
};
```

- 分而治之思想，递归
  - 时间复杂度O(logN)
  > 凡是分开两半的基本上都是logN
  - 空间是O(logN)
```js
var guessNumber = function (n) {
    const cur = (low, high) => {
        if (low > high) { return }
        const mid = Math.floor((low + high) / 2)
        const res = guess(mid)
        if (res == 0) {
            return mid
        } else if (res == 1) {
            return cur(mid + 1, high)
        } else if (res == -1) {
            return cur(low, mid - 1)
        }
    }
    return cur(1, n)
};
```


### 42.接雨水

思路：
  - 位置 i 能装下多少水，其实和左侧和右侧的高度
  - Math.min(左侧高度，右侧高度)-自己高度height[i]

暴力破解
```js
var trap = function (height) {
    if (!height.length) return 0
    let len = height.length
    let res = 0
    for (let i = 1; i < len - 1; i++) {
        let left_max = 0
        let right_max = 0
        //左侧最大
        for (let j = i; j < len; j++) {
            left_max = Math.max(left_max, height[j])
        }
        //右侧最大
        for (let j = i; j >= 0; j--) {
            right_max = Math.max(right_max, height[j])
        }
        res+=Math.min(left_max,right_max)-height[i]
    }
    return res
};
```
动态规划-暴力破解优化
```js
var trap = function (height) {
    if (!height.length) return 0
    let len = height.length
    let res = 0

    let l_max = new Array(len)//一个数组存每一个位置上左右的最高
    let r_max = new Array(len)

    l_max[0] = height[0]//默认值
    r_max[len - 1]= height[len - 1]

    for (let i = 1; i < len; i++) {
        l_max[i] = Math.max(l_max[i-1], height[i])
    }
    for (let i = len-2; i >= 0; i--) {
        r_max[i] = Math.max(r_max[i+1], height[i])
    }
    for (let i = 1; i < len - 1; i++) {
        res += Math.min(l_max[i], r_max[i]) - height[i]
    }
    return res
};
```

双指针
```js
var trap = function (height) {
    if (!height.length) return 0
    let len = height.length
    let res = 0

    let left = 0
    let right = len - 1

    let leftMax = height[0]
    let rightMax = height[len - 1]

    while (left <= right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if (leftMax < rightMax) {
            res += leftMax - height[left]
            left++
        } else {
            res += rightMax - height[right]
            right--
        }
    }
    return res
};

```


二叉树层序遍历
## 排序算法

- 冒泡排序
- 选择排序
- 插入排序
- 归并排序
- 快速排序
- ......


[排序可视化演示地址](https://visualgo.net/zh/sorting)
### 冒泡排序

- 思路
  * 比较所有相邻元素，如果第一个比第二个大，则交换他们
  * 一轮下来，可以保证最后一个数是最大的
  * 执行n-1轮，就可以完成排序
- 时间复杂度为O(n^2)
  
#### code

```js
var arr = [1, 25, 56, 88, 22, 555, -1, 46, 56, 82, 93, 999, 998]
  Array.prototype.bubbleSoet = function () {
      const arr = this
      for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  // let temp = arr[j]
                  // arr[j] = arr[j + 1]
                  // arr[j + 1] = temp
                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]//es6解构
              }
          }
      }
      return arr
  }
  console.log(arr.bubbleSoet());
```


### 选择排序

- 思路
  * 找到数组中的最小值，选中他并将其放置在第一位
  * 接着找到第二小的值，选中他并将其放置在第二位
  * 以此类推，执行n-1轮,类似于扫描,区间不断在缩小
- 时间复杂度为O(n^2)

#### code

```js
var arr = [4, 1, 3, 2, 5, 0, 9, 8]
Array.prototype.selectionSort = function () {
    /*
        重复（元素个数-1）次
            把第一个没有排序过的元素设置为最小值
            遍历每个没有排序过的元素
                如果元素 < 现在的最小值
                将此元素设置成为新的最小值
            将最小值和第一个没有排序过的位置交换
    */
    const arr = this
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i
        for (let j = i; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j//找到这一轮的最小值的下表下标
            }
        }
        const temp = arr[indexMin]
        arr[indexMin] = arr[i]
        arr[i] = temp
    }
    return arr
}
```
  

### 插入排序



- 思路
  * 从第二数开始往前比
  * 比他大就往后排（把这个数字向后移一位）
  * 以此类推，进行到最后一个数
- 时间复杂度为O(n^2)


#### code

```js
var arr = [4, 1, 3, 2, 5, 0, 9, 8]
  Array.prototype.mergeSort = function () {
      /*
          将第一个元素标记为已排序
          遍历每个没有排序过的元素
          “提取” 元素 X
          i = 最后排序过元素的指数 到 0 的遍历
          如果现在排序过的元素 > 提取的元素
          将排序过的元素向右移一格
          否则：插入提取的元素
      */
      //第二个数往前比
      const arr = this
      for (let i = 1; i < arr.length; i++) {
          let temp = arr[i]//标记为已排序
          let j = i//提个变量
          while (j > 0) {//往前比，能拿到前面所有数的下标
              if (arr[j - 1] > temp) {//因为初始化是第二个数字，所以是j - 1
                  arr[j] = arr[j - 1]//向右移一格
              } else {
                  break
              }
              j--
          }
          arr[j] = temp
      }
      return arr
  }
  console.log(arr.mergeSort());

```

### 归并排序

- 思路
  * 分：把数组劈开两半，再递归的对子数组进行 分 操作，知道分成一个个单独的数
  * 合：把两个数组并为有序数组，再对有序数组进行合并，直到全部子数组合并一个完整数组
  * 以此类推，进行到最后一个数

- 实现
  * 新建一个空数组res，用于存放最终排序后的数组
  * 比较两个有序数组的头部，较小者出队并推入res中
  * 如果两个数组还有值，就重复第二步
- 时间复杂度为O(n*logN)
  - 分的时间复杂度 logN
  - 合的时间复杂度 n

```js
var arr = [4, 1, 3, 2, 5, 0, 9, 8]
Array.prototype.insertionSort = function () {
    /*
        将每个元素拆分成大小为1的部分,用递归
        recursively merge adjacent partitions
        i = 左侧开始项指数 到 右侧最后项指数 的遍历（两端包括）
        如果左侧首值 <= 右侧首值
        拷贝左侧首项的值
        否则： 拷贝右侧部分首值
        将元素拷贝进原来的数组中
    */
    //第二个数往前比
    const arr = this
    const cur = (arr) => {
        if (arr.length == 1) {
            return arr
        }
        // 进行分的操作
        let mid = Math.floor(arr.length / 2)
        let leftArr = arr.slice(0, mid)
        let rightArr = arr.slice(mid, arr.length)
        const left = cur(leftArr)
        const right = cur(rightArr)
        //进行合的操作
        let res = []
        while (left.length || right.length) {
            if (left.length && right.length) {
                res.push(left[0] > right[0] ? right.shift() : left.shift())
            } else if (left.length) {
                res.push(left.shift())
            } else if (right.length) {
                res.push(right.shift())
            }
        }
        return res
    }
    return cur(arr)
}
console.log(arr.insertionSort());
```

### 快速排序

- 思路
  * 从数组中任意选择一个元素作为基准，所有比基准小的元素放在基准前面，比基准大的元素放在基准后面
  * 递归：递归地对基准前后的子数组进行分区操作
- 时间复杂度为O(n*logN)
  - 递归的时间复杂度 logN
  - 分区的时间复杂度 n
#### code
```js
var arr = [4, 1, 3, 2, 5, 10, 9, 8]
Array.prototype.quickSort = function () {
    const cur = (arr) => {
        if (arr.length <= 1) {
            return arr //递归出口
        }
        let left = []
        let right = []
        let mid = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (mid > arr[i]) {
                left.push(arr[i])//放左边
            } else {
                right.push(arr[i])//放右边
            }
        }
        return [...cur(left), mid, ...cur(right)]
    }
    let res = cur(this)
    //改变原数组
    res.forEach((item, index) => {
        this[index] = item
    });
}
arr.quickSort()
console.log(arr);
```

## 搜索
### 顺序搜索

思路：
- 遍历数组
- 找到值返回下标
- 遍历结束没找到返回-1
```js
Array.prototype.sequentialSeach = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == item) {
            return i
        }
    }
    return -1
}
var arr = [4, 1, 3, 2, 5, 10, 9, 8]
const res = arr.sequentialSeach(3)
console.log(res);
```


### 二分搜索

前提 ：数组是有序的
- 思路
  * 从数组中的中间元素开始，如果中间元素正好是目标值，搜索结束，返回下标
  * 如果目标值大于或小于中间元素，则在大于或小于中间元素的那一半数组中搜索
  * 每次搜索范围都缩小一半，效率提升
- 时间复杂度为O(logN)
  - 这种劈开两半的基本都是logN
  
```js
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt((high + low) / 2);
        if (key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        } else {
            return -1;
        }
    }
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];
var result = binary_search(arr, 10);
console.warn(result); // 9 返回目标元素的索引值  
```



## 分而治之

- 分而治之是算法设计中的一种方法
- 它将一个问题<b style="color:red">分</b>成多个和原问题相似的小问题，<b style="color:red">递归解决</b>小问题，再将结果<b style="color:red">合</b>并以解决原来的问题。
  
#### 场景
- 归并排序
- 快速排序 
- 374题猜数字大小 二分搜索

### 226.翻转二叉树

- 思路：
  - 先翻转左右子树，再将子树换个位置
  - 符合 分、解、合 特性
  - 考虑分而治之
- 步骤：
  - 分：获取左右子树
  - 解：递归的翻转左右子树
  - 合：将翻转后的左右子树换个位置放到根节点上

  - 时间复杂度:O(N)
  - 空间复杂度:O(N)||O(H) H是树的高度
```js
var invertTree = function(root) {
    if(!root){return null}
    return{
        val:root.val,
        left:invertTree(root.right),
        right:invertTree(root.left)
    }
};
```

### 100.相同的树
- 思路：
  - 两个树：根节点的值相同，左子树相同
  - 符合 分、解、合 特性
  - 考虑分而治之
- 步骤：
  - 分：获取两个树的左右子树
  - 解：递归的判断两个左子树是否相同，右子树是否相同
  - 合：将上述结果合并，如果根节点的值也相同，树就相同

  - 时间复杂度:O(N)
  - 空间复杂度:O(N)
```js
var isSameTree = function (p, q) {
    var cur = (p, q) => {
        if (!p && !q) {return true}
        if (p && q && p.val == q.val
            && cur(p.left, q.left)
            && cur(p.right, q.right)
        ) {
            return true
        } else {
            return false
        }
    }
    return cur(p, q)
};
```

### 101.对称二叉树
- 思路：
  - 转化为：左右子树是否镜像
  - 分解为：树1的左子树个树2的右子树是否镜像，树1的右子树和树2的右子树是否镜像
  - 考虑分而治之
- 步骤：
  - 分：获取两个树的左右子树
  - 解：递归的判断是否镜像

、
  - 时间复杂度:O(N)
  - 空间复杂度:O(N)
```js
var isSymmetric = function (root) {
    if (!root) { return true }
    const isMirror = (l, r) => {
        if (!l && !r) { return true }
        if (l && r && l.val == r.val
            && isMirror(l.left, r.right)
            && isMirror(l.right, r.left)
        ) {
            return true
        } else {
            return false
        }
    }
    return isMirror(root.left, root.right)
};
```


## 动态规划

- 动态规划是算法设计中的一种方法，空间换时间
- 它将一个问题分解为<b style="color:red">相互重叠</b>的子问题，通过反复求解子问题，来解决原来的问题。
- 相比分而治之的子问题互不干扰、独立的，动态规划的子问题是相互重叠

#### 场景
- 斐波那契数列：0 1 1 2 3 5 8 13 21 34
  - 定义子问题：F(n)=F(n-1)+F(n-2)
  - 反复执行：从2执行到n，执行上述公式

### 动态规划公式

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
### 01背包问题

给你一个可装载重量为W的背包和N个物品，每个物品有重量和价值两个属性。其中第i个物品的重量为wt[i]，价值为val[i]，现在让你用这个背包装物品，最多能装的价值是多少？

举个简单的例子，输入如下：

N = 3(3个物品), W = 4(背包容量4)
wt = [2, 1, 3]
val = [4, 2, 3]
算法返回 6，选择前两件物品装进背包，总重量 3 小于W，可以获得最大价值 6。

这是一个典型的动态规划问题。
这个题目中的物品不可以分割，要么装进包里，要么不装，不能说切成两块装一半。这就是 0-1 背包这个名词的来历。
### 动态规划解题思路

一、明确【状态】和【选择】

1. 状态
如何才能描述一个背包问题？
只要给定几个可选物品和一个背包的容量限制，就形成了一个背包问题。
所以状态有两个，就是「背包的容量」和「可选择的物品」。

2. 选择
对于每件物品，你能选择什么？选择就是「装进背包」或者「不装进背包」。

3. 套用框架

```
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        dp[状态1][状态2] = 择优(选择1，选择2...)
```

二、明确dp数组的定义

dp数组是什么？其实就是描述问题局面的一个数组。换句话说，我们刚才明确问题有什么「状态」，现在需要用dp数组把状态表示出来。

首先看看刚才找到的「状态」，有两个，也就是说我们需要一个二维dp数组，一维表示可选择的物品，一维表示背包的容量。

dp[i][w]的定义如下：对于前i个物品，当前背包的容量为w，这种情况下可以装的最大价值是dp[i][w]。

dp[0][w] = 0

dp[i][0] = 0

比如说，如果 dp[3][5] = 6，其含义为：对于给定的一系列物品中，若只对前 3 个物品进行选择，当背包容量为 5 时，最多可以装下的价值为 6。

为什么要这么定义？便于状态转移。

根据这个定义，我们想求的最终答案就是dp[N][W]。
base case 就是dp[0][..] = dp[..][0] = 0，因为没有物品或者背包没有空间的时候，能装的最大价值就是 0。


那么细化上面的解题框架就是：

```
int dp[N+1][W+1]
dp[0][..] = 0
dp[..][0] = 0

for i in [1..N]:
    for w in [1..W]:
        dp[i][w] = max(
            把物品 i 装进背包,
            不把物品 i 装进背包
        )
return dp[N][W]
```

三、状态转移方程怎么写？

简单说就是，上面伪代码中「把物品i装进背包」和「不把物品i装进背包」怎么用代码体现出来呢？

这一步要结合对dp数组的定义和我们的算法逻辑来分析：

先重申一下刚才我们的dp数组的定义：

dp[i][w]表示：对于前i个物品，当前背包的容量为w时，这种情况下可以装下的最大价值是dp[i][w]。

如果你没有把这第i个物品装入背包，那么很显然，最大价值dp[i][w]应该等于dp[i-1][w]。你不装嘛，那就继承之前的结果。

如果你把这第i个物品装入了背包，那么dp[i][w]应该等于dp[i-1][w-wt[i-1]] + val[i-1]。

首先，由于i是从 1 开始的，所以对val和wt的取值是i-1。

而dp[i-1][w-wt[i-1]]也很好理解：你如果想装第i个物品，你怎么计算这时候的最大价值？换句话说，在装第i个物品的前提下，背包能装的最大价值是多少？

显然，你应该寻求剩余重量w-wt[i-1]限制下能装的最大价值，加上第i个物品的价值val[i-1]，这就是装第i个物品的前提下，背包可以装的最大价值。


综上就是两种选择，我们都已经分析完毕，也就是写出来了状态转移方程，可以进一步细化代码：

```
for i in [1..N]:
    for w in [1..W]:
        dp[i][w] = max(
            dp[i-1][w],
            dp[i-1][w - wt[i-1]] + val[i-1]
        )
return dp[N][W]
```


四、把伪代码转换为代码

```js

/**
* 0-1背包问题
* @param {Number} W 背包容量
* @param {Number} N 物品总数
* @param {Array} wt 物品重量数组
* @param {Array} val 物品价值数组
* @returns Number 背包能装的最大价值
*/
function knapsack(W, N, wt = [], val = []) {
    // 初始化N+1行, M+1列的二维数组, base case 已初始化
    const dp = Array.from(new Array(N + 1), () => new Array(W + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        for (let w = 1; w <= W; w++) {
            if (w - wt[i - 1] < 0) {
                // 当前背包容量装不下，只能选择不装入背包
                dp[i][w] = dp[i - 1][w];
            } else {
                // 装入或者不装入背包，择优
                dp[i][w] = Math.max(dp[i - 1][w - wt[i - 1]] + val[i - 1],
                    dp[i - 1][w]);
            }
        }
    }

    return dp[N][W];
}

const W = 4;
const N = 3;
const wt = [2, 1, 3];
const val = [4, 2, 3];

console.log(knapsack(W, N, wt, val))

```



### 70.爬楼梯

思路：
  - 爬到第n阶可以再第n-1阶爬1个台阶，或者在第n-2阶爬2个台阶
  - F(n)=F(n-1)+F(n-2)
步骤：
  - 定义子问题 F(n)=F(n-1)+F(n-2)
  - 从2循环到n，执行上述公式

```js
var climbStairs = function (n) {
    if(n<2){return 1}
    const dp=[1,1]
    for(let i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
};
```
```js
var climbStairs = function (n) {
    if(n<2){return 1}
    const menu=[]
    menu[1]=1
    menu[2]=2
    for(let i=3;i<=n;i++){
        menu[i]=menu[i-2]+menu[i-1]
    }
    return menu[n]
};
```

### 198.打家劫舍


思路：
  - f(k)=从前k个房屋中能偷窃到的中最大数额
  - Ak= 第k个房屋的钱数
  - f(k)=max(f(k-2)+Ak,f(k-1))
  - 考虑使用动态规划
- 时间复杂度 O(n)
- 空间复杂度 O(n)

```js
var rob = function (nums) {
    if(nums.length===0)return 0
    let dp = [0,nums[0]]
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i-1],dp[i-1])
    }
    return dp[nums.length]
};
```

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



## 回溯算法

- 回溯算法是一种渐进式寻找并构建问题解决方式的策略
- 回溯算法会先从一个可能的动作开始解决问题，如果不行，就回溯并选择另一个动作，直到将问题解决

### 场景
- 有很多路。这些路里，有死路，也有出路，通常递归模拟所有路
- 全排列
  - 递归模拟所有情况
  - 遇到包含重复元素，就回溯
  - 收集所有到达递归重点的情况，并返回

### 46.全排列 

- 时间复杂度 O(n!)
- 空间复杂度 O(n)

```js
var permute = function (nums) {
    let res = []
    const backtrack = (path) => {

        if (path.length === nums.length) {
            res.push(path)
            return
        }
        // for (let i = 0; i < nums.length; i++) {
        //     // console.log(nums[i])
        //     if (path.includes(nums[i])) return
        //     backtrack(path.concat(nums[i]))
        // }
        nums.forEach(n=>{
            if(path.includes(n)) return
            backtrack(path.concat(n))
        })
    }
    backtrack([])
    return res
};
```

### 78.子集

```js

```

## 搜索算法(递归或者栈解决)

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

## 双指针

### 977. 有序数组的平方
#### 暴力破解
```js
var sortedSquares = function(nums) {
    return nums.map(num=>num*num).sort((a,b)=>a-b)
};
```

#### 双指针
```js
var sortedSquares = function (nums) {
    let ans = new Array(nums.length)
    let left = 0, right = nums.length - 1, f = nums.length - 1

    while (left <= right) {
        if (nums[left] * nums[left] > nums[right] * nums[right]) {
            ans[f] = nums[left] * nums[left]
            left++
        } else {
            ans[f] = nums[right] * nums[right]
            right--
        }
        f--
    }
    return ans

};
```
### 189. 轮转数组
#### 傻瓜解法
```js
var rotate = function (nums, k) {
    const n=nums.length
    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr[(i+k)%n]=nums[i]
    }
    for(let i=0;i<n;i++){
        nums[i]=newArr[i]
    }
};
```
### 283. 移动零
#### 暴力破解（巧妙利用变量）
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //思路：新建一个数组，遍历原数组，
    //如果不是0 就给新数组push进去
    //遍历结束之后，再次遍历原数组，直接赋值，如果没有值 就取0
    var newArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            newArr.push(nums[i])
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i]=newArr[i]||0
    }
    /**
        另一种骚操作：只需要新建一个变量j，省空间。
        1. 循环遍历数组，如果数组元素不是0，就给j先赋值后再++（所以是后++）
        2. 遍历结束之后，j表示当前数组非0的个数，while循环，j后++赋值剩下的值为0
     */

    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
           nums[j++]=nums[i]
        }
    }
    while(j<nums.length){
        nums[j++]=0
    }
};
```

#### 双指针
两个指针都从左侧出发，
，左指针指向当前已经处理好的序列的尾部，右指针指向待处理序列的头部。

右指针不断向右移动，每次右指针指向非零数，则将左右指针对应的数交换，同时左指针右移。

```js
var moveZeroes = function (nums) {
    let len = nums.length,left = 0,right = 0
    while (right < len) {
        if (nums[right]) {//非零数
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
};
```

### 344. 反转字符串

困难题我唯唯诺诺，简单题我重拳出击

思路：

当 left < right：交换 s[left] 和 s[right]；left 指针右移一位，即 left = left + 1；
right 指针左移一位，即 right = right - 1。

当 left >= right，反转结束，返回字符数组即可。

```js
var reverseString = function (s) {
    let left = 0, right = s.length-1
    while (left < right) {
        [s[right], s[left]] = [s[left], s[right]]
        left++;
        right--
    }
};
```

###  反转

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
   const nums = [];         //定义新的数组用来存放字符串
   let i = 0;
   while(i < s.length){
       let start = i;   
        while(i < s.length && s.charAt(i) != ' '){      //遍历一段字符串，查出这个单词的长度
           i++;
       }
       for(let p = start;p < i;p++){                    // 循环将字符串倒序存入数组当中
           nums.push(s.charAt(start + i - p - 1));
       }
       while(i < s.length && s.charAt(i) == ' '){       //在倒序之后的数组中加上一个空格字符串
           nums.push(' ');
           i++;
       }
   }
    return nums.join('');               //将数组连接成为一个字符串

};
```

    第一次进入 i < s.length 循环
			i = 0
			start = 0
			第一个 while 循环之后            //  遍历一段字符串，查出这个单词的长度
			i = 5
			进入for循环                       // 循环将字符串倒序存入数组当中
			p = start = 0    p < i ( 5 )    p++
			此时的nums数组是["s","'","t","e","L"]
			进入第二个while循环中              //给nums数组后加上了一个空格字符串
			此时nums为 ["s","'","t","e","L"," "]
            i = 6
    
    第二次进入 i < s.length 循环
            i = 6
			start = 6
			第一个 while 循环之后            //  遍历一段字符串，查出这个单词的长度
			i = 10
			进入for循环                       // 循环将字符串倒序存入数组当中
			p = start = 6    p < i ( 10 )    p++
			此时的nums数组是["s","'","t","e","L"," ","e","k","a","t"]
			进入第二个while循环中              //给nums数组后加上了一个空格字符串
			此时nums为 ["s","'","t","e","L"," ","e","k","a","t"," "]
            此时 i= 10
    


    **对于为什么for循环内存入字符串的时候表达式为start + i - p - 1
当进入到第二次循环时，i- p - 1 = 3  所以要加上前面已经占用的位置 6
此时才是从下标为 9 时开始存入字符串

最后的join（）  作用是:将数组连接成为一个字符串**
