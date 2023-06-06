# uniapp-sample

uniapp的示例工程。

注意：此工程用HBuilderX编译运行。

## 工程目录

- lib: 通用的一些服务或库
- static: 存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
- pages.json: 配置页面路由、导航条、选项卡等页面类信息

# 集成

## tailwindcss

采用外部监听文件，然后生成目标css的方式。

输入文件是index.css，输出文件是tailwind.css，在App.vue中引入tailwind.uniapp.css.

注意：
- App的css语法受限制。
- 建议使用rpx

```shell
yarn add -D tailwindcss
# yarn tailwind
# 同时根据tailwind.config.js监听文件 
npx tailwindcss -i ./index.css -o ./tailwind.css --watch
# 去除其中的 *，兼容小程序
node ./tailwind.help.js
```

## iconfont

https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E6%A0%87
下载，采用其中的css、ttf文件，放入static/iconfont。

修改iconfont.css中:
```css
@font-face {
    font-family: "iconfont"; /* Project id 4103773 */
    src: url('/static/iconfont/iconfont.ttf') format('truetype');
}
```

App.vue中引入 `@import "static/iconfont/iconfont.css";`

注：tabbar中的iconfont，不支持小程序
