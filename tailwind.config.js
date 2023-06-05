// https://github.com/mrleidesen/WeAppTailwind/tree/main
const colors = require("tailwindcss/colors");

const spacingValues = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24,
  28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 96,
];

const formatSpacingValues = spacingValues.reduce((prev, value) => {
  if (value.toString().includes(".")) {
    prev[value.toString().replace(".", "dot")] = `${value * 8}rpx`;
  } else {
    prev[value] = `${value * 8}rpx`;
  }

  return prev;
}, {});

module.exports = {
  content: ['./index.html', './pages/**/*.vue','./lib/**/*.vue'],
  separator: '__', // 兼容小程序，将 : 替换成 __
  presets: [],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    spacing: formatSpacingValues,
    backgroundOpacity: (theme) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    backgroundColor: (theme) => theme("colors"),
    borderColor: (theme) => theme("colors"),
    borderOpacity: (theme) => theme("opacity"),
    borderRadius: {
      none: "0rpx",
      sm: "4rpx",
      DEFAULT: "8rpx",
      md: "12rpx",
      lg: "16rpx",
      xl: "24rpx",
      "2xl": "32rpx",
      "3xl": "48rpx",
      full: "9999rpx",
    },
    borderWidth: {
      DEFAULT: "2rpx",
      0: "0rpx",
      2: "4rpx",
      4: "8rpx",
      8: "16rpx",
    },
    boxShadow: {
      sm: "0 2rpx 4rpx 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 2rpx 6rpx 0 rgba(0, 0, 0, 0.1), 0 2rpx 4rpx 0 rgba(0, 0, 0, 0.06)",
      md: "0 8rpx 12rpx -2rpx rgba(0, 0, 0, 0.1), 0 4rpx 8rpx -2rpx rgba(0, 0, 0, 0.06)",
      lg: "0 20rpx 30rpx -6rpx rgba(0, 0, 0, 0.1), 0 8rpx 12rpx -4rpx rgba(0, 0, 0, 0.05)",
      xl: "0 40rpx 50rpx -10rpx rgba(0, 0, 0, 0.1), 0 20rpx 20rpx -10rpx rgba(0, 0, 0, 0.04)",
      "2xl": "0 50rpx 100rpx -24rpx rgba(0, 0, 0, 0.25)",
      inner: "inset 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    content: {
      none: "none",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    fontSize: {
      xs: ["24rpx", { lineHeight: "32rpx" }],
      sm: ["28rpx", { lineHeight: "40rpx" }],
      base: ["32rpx", { lineHeight: "48rpx" }],
      lg: ["36rpx", { lineHeight: "56rpx" }],
      xl: ["40rpx", { lineHeight: "56rpx" }],
      "2xl": ["48rpx", { lineHeight: "64rpx" }],
      "3xl": ["60rpx", { lineHeight: "72rpx" }],
      "4xl": ["72rpx", { lineHeight: "80rpx" }],
      "5xl": ["96rpx", { lineHeight: "1" }],
      "6xl": ["120rpx", { lineHeight: "1" }],
      "7xl": ["144rpx", { lineHeight: "1" }],
      "8xl": ["192rpx", { lineHeight: "1" }],
      "9xl": ["256rpx", { lineHeight: "1" }],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1on2": "50%",
      "1on3": "33.333333%",
      "2on3": "66.666667%",
      "1on4": "25%",
      "2on4": "50%",
      "3on4": "75%",
      "1on5": "20%",
      "2on5": "40%",
      "3on5": "60%",
      "4on5": "80%",
      "1on6": "16.666667%",
      "2on6": "33.333333%",
      "3on6": "50%",
      "4on6": "66.666667%",
      "5on6": "83.333333%",
      full: "100%",
      screen: "100vh",
    }),
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: "24rpx",
      4: "32rpx",
      5: "40rpx",
      6: "48rpx",
      7: "56rpx",
      8: "64rpx",
      9: "72rpx",
      10: "80rpx",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    margin: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    maxHeight: (theme) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    maxWidth: {
      none: "none",
      0: "0rpx",
      xs: "640rpx",
      sm: "768rpx",
      md: "896rpx",
      lg: "1024rpx",
      xl: "1152rpx",
      "2xl": "1344rpx",
      "3xl": "1536rpx",
      "4xl": "1792rpx",
      "5xl": "2048rpx",
      "6xl": "2304rpx",
      "7xl": "2560rpx",
      full: "100%",
      min: "min-content",
      max: "max-content",
    },
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh",
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"],
    },
    padding: (theme) => theme("spacing"),
    textColor: (theme) => theme("colors"),
    textOpacity: (theme) => theme("opacity"),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1on2": "50%",
      "1on3": "33.333333%",
      "2on3": "66.666667%",
      "1on4": "25%",
      "2on4": "50%",
      "3on4": "75%",
      "1on5": "20%",
      "2on5": "40%",
      "3on5": "60%",
      "4on5": "80%",
      "1on6": "16.666667%",
      "2on6": "33.333333%",
      "3on6": "50%",
      "4on6": "66.666667%",
      "5on6": "83.333333%",
      "1on12": "8.333333%",
      "2on12": "16.666667%",
      "3on12": "25%",
      "4on12": "33.333333%",
      "5on12": "41.666667%",
      "6on12": "50%",
      "7on12": "58.333333%",
      "8on12": "66.666667%",
      "9on12": "75%",
      "10on12": "83.333333%",
      "11on12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
    }),
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      90: "90",
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
    space: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    fontVariantNumeric: false,
    resize: false,
    mixBlendMode: false,
  },
};
