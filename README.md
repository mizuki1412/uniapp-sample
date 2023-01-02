# uniapp-sample

uniapp的示例工程
用HBuilderX编译运行。

## tailwindcss

采用外部监听文件，然后生成目标css的方式。

在App.vue中引入tailwind.css.

```shell
npm install -D tailwindcss

# yarn tailwind
# 同时根据tailwind.config.js监听文件 
npx tailwindcss -i ./index.css -o ./tailwind.css --watch
```
