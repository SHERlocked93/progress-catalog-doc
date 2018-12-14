# progress-catalog 指南

![npm](https://img.shields.io/npm/v/progress-catalog.svg) ![license](https://img.shields.io/github/license/jserwang/rc-bmap.svg)

这个插件根据选定的目录内容中的 `h1, h2, h3, h4, h5, h6` 标签来自动生成目录插入到选定的目录容器中，并且提供一个漂亮的样式效果；

- 监听内容区滚动
- 点击跳转功能

**兼容性：** IE10+ (由于使用了 `node.classList`)

**依赖性：** 不依赖任何库

**大小：** 体积小，只需 `4.22kb`，经过 gzip 之后只有 `1.76kb`。

欢迎提 issue，提 pr~

## Preview

炫酷模式：

![](https://i.loli.net/2018/09/28/5bad890a0cdd7.gif)

普通模式：

![](https://i.loli.net/2018/09/28/5bad890db3d81.gif)

可以通过 [线上 DEMO](http://sherlocked93.club/vue-style-codebase/) 来预览一下炫酷模式的效果

## 实现思路

滚动的监听通过 [getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect) 获取元素大小以及相对视口的位置，判断我们的监听对象 `h1~h6` 标签是否在视口中，如果在则添加 `linkActiveClass` 类。

点击目录项的定位跳转在 hash 模式的单页面应用中会与传统的锚点定位冲突，会导航到错误的路由路径，这里采用把要跳转的 id 放到 [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 中，跳转的时候取出来使用 [scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) 来进行平滑滚动到目标位置。

左边的边栏线则是使用 [svg](http://www.ruanyifeng.com/blog/2018/08/svg.html) 的 path 来画出来的，根据层级相应做一些调整，辅以 css 的 `transition` 的效果就可以呈现出不错的移动效果。

## 添加依赖

```bash
npm i -S progress-catalog
```

## 本地开发

```bash
# git clone
git clone git@github.com:SHERlocked93/progress-catalog.git

# npm install
npm i

# build to babel
npm run build
```

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)
