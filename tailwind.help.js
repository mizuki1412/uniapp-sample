// tailwind.css后处理
const fs = require("fs");
const watch = require('node-watch');

const tailwindFilePath = "./tailwind.css";
function change() {
  fs.readFile(tailwindFilePath, (readError, data) => {
    if (readError) {
      console.error(readError);
    }

    const css = data.toString();
    const reg = /\*,[\d\D]*?\}/g;

    const minifyCSS = css.replace(reg, "")
    // .replace(/\n/g, "")
    // .replace(/ /g, "")

    fs.writeFile(
      "./tailwind.uniapp.css",
      minifyCSS,
      { flag: "w" },
      (writeError) => {
        if (writeError) {
          console.error(writeError);
        }
      }
    );
  });
  console.log(new Date(), "changed");
}
change()

watch(tailwindFilePath, { recursive: true }, change );


