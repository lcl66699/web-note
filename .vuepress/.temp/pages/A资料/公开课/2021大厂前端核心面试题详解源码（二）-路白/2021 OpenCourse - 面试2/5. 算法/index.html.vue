<template><div><h1 id="_01背包问题" tabindex="-1"><a class="header-anchor" href="#_01背包问题" aria-hidden="true">#</a> 01背包问题</h1>
<p>给你一个可装载重量为W的背包和N个物品，每个物品有重量和价值两个属性。其中第i个物品的重量为wt[i]，价值为val[i]，现在让你用这个背包装物品，最多能装的价值是多少？</p>
<p>举个简单的例子，输入如下：</p>
<p>N = 3(3个物品), W = 4(背包容量4)
wt = [2, 1, 3]
val = [4, 2, 3]
算法返回 6，选择前两件物品装进背包，总重量 3 小于W，可以获得最大价值 6。</p>
<p>这是一个典型的动态规划问题。
这个题目中的物品不可以分割，要么装进包里，要么不装，不能说切成两块装一半。这就是 0-1 背包这个名词的来历。</p>
<h2 id="动态规划解题思路" tabindex="-1"><a class="header-anchor" href="#动态规划解题思路" aria-hidden="true">#</a> 动态规划解题思路</h2>
<p>一、明确【状态】和【选择】</p>
<ol>
<li>
<p>状态
如何才能描述一个背包问题？
只要给定几个可选物品和一个背包的容量限制，就形成了一个背包问题。
所以状态有两个，就是「背包的容量」和「可选择的物品」。</p>
</li>
<li>
<p>选择
对于每件物品，你能选择什么？选择就是「装进背包」或者「不装进背包」。</p>
</li>
<li>
<p>套用框架</p>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        dp[状态1][状态2] = 择优(选择1，选择2...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、明确dp数组的定义</p>
<p>dp数组是什么？其实就是描述问题局面的一个数组。换句话说，我们刚才明确问题有什么「状态」，现在需要用dp数组把状态表示出来。</p>
<p>首先看看刚才找到的「状态」，有两个，也就是说我们需要一个二维dp数组，一维表示可选择的物品，一维表示背包的容量。</p>
<p>dp[i][w]的定义如下：对于前i个物品，当前背包的容量为w，这种情况下可以装的最大价值是dp[i][w]。</p>
<p>比如说，如果 dp[3][5] = 6，其含义为：对于给定的一系列物品中，若只对前 3 个物品进行选择，当背包容量为 5 时，最多可以装下的价值为 6。</p>
<p>为什么要这么定义？便于状态转移。</p>
<p>根据这个定义，我们想求的最终答案就是dp[N][W]。
base case 就是dp[0][..] = dp[..][0] = 0，因为没有物品或者背包没有空间的时候，能装的最大价值就是 0。</p>
<p>那么细化上面的解题框架就是：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>int dp[N+1][W+1]
dp[0][..] = 0
dp[..][0] = 0

for i in [1..N]:
    for w in [1..W]:
        dp[i][w] = max(
            把物品 i 装进背包,
            不把物品 i 装进背包
        )
return dp[N][W]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、状态转移方程怎么写？</p>
<p>简单说就是，上面伪代码中「把物品i装进背包」和「不把物品i装进背包」怎么用代码体现出来呢？</p>
<p>这一步要结合对dp数组的定义和我们的算法逻辑来分析：</p>
<p>先重申一下刚才我们的dp数组的定义：</p>
<p>dp[i][w]表示：对于前i个物品，当前背包的容量为w时，这种情况下可以装下的最大价值是dp[i][w]。</p>
<p>如果你没有把这第i个物品装入背包，那么很显然，最大价值dp[i][w]应该等于dp[i-1][w]。你不装嘛，那就继承之前的结果。</p>
<p>如果你把这第i个物品装入了背包，那么dp[i][w]应该等于dp[i-1][w-wt[i-1]] + val[i-1]。</p>
<p>首先，由于i是从 1 开始的，所以对val和wt的取值是i-1。</p>
<p>而dp[i-1][w-wt[i-1]]也很好理解：你如果想装第i个物品，你怎么计算这时候的最大价值？换句话说，在装第i个物品的前提下，背包能装的最大价值是多少？</p>
<p>显然，你应该寻求剩余重量w-wt[i-1]限制下能装的最大价值，加上第i个物品的价值val[i-1]，这就是装第i个物品的前提下，背包可以装的最大价值。</p>
<p>综上就是两种选择，我们都已经分析完毕，也就是写出来了状态转移方程，可以进一步细化代码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>for i in [1..N]:
    for w in [1..W]:
        dp[i][w] = max(
            dp[i-1][w],
            dp[i-1][w - wt[i-1]] + val[i-1]
        )
return dp[N][W]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、把伪代码转换为代码</p>
</div></template>
