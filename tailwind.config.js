module.exports = {
  content: ['./index.html', './pages/**/*.{html,vue,js,ts,jsx,tsx}','./lib/**/*.{html,vue,js,ts,jsx,tsx}'],
  separator: '__', // 兼容小程序，将 : 替换成 __
  theme: {
    extend: {},
  },
  plugins: [],
}
