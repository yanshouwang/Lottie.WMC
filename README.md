# Lottie.WMC

![Node.js Package](https://github.com/yanshouwang/Lottie.WMC/workflows/Node.js%20Package/badge.svg)

Lottie 小程序组件

## 介绍

Lottie 小程序的第三方组件项目，将小程序官方的 [lottie-miniprogram](https://github.com/wechat-miniprogram/lottie-miniprogram) 项目封装为组件，方便各位同学开发使用

## 安装

```
npm install --save @yanshouwang/lottie-wmc
```

## 使用

*.JSON：
``` JSON
{
    "usingComponents":{
        "lottie":"../../miniprogram_npm/@yanshouwang/lottie-wmc/lottie"
    }
}
```
*.TS / *.JS
```TS
import xxx from "...";

Page({
    data:{
        xxx:xxx
    }
});
```
*.WXML
```XML
<lottie data="{{xxx}}" />
或者
<lottie uri="..." />
```
属性:
|参数名|类型|说明|
|-|-|-|
|loop|boolean|循环播放|
|auto|boolean|自动播放|
|data|object|动画对象|
|uri|string|网络地址|

## 问题
- Lottie 小程序版的 destroy 方法会报错，导致对象无法销毁，因此显示/隐藏组件或切换动画对象时会出现 BUG，待解决，详见：https://github.com/wechat-miniprogram/lottie-miniprogram/issues/1
- 目前本地文件只能使用模块导入之后数据绑定的方法进行加载，显然这会造成界面逻辑的耦合，但是暂未找到更好的解决方案，因此推荐采用网络地址进行加载
- 测试项目不可用，因为 lottie-miniprogram 项目测试时会报错
- 欢迎 PR 和 STAR :)
