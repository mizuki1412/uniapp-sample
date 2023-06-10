import {reactive} from "vue"
export const config = reactive({
  requestBaseUrl: "",
  appName: "",
  // 特定页面地址
  pageLogin: "/pages/login",
  pageIndex: "/pages/index/index"
})

export function configInit(c){
  for(let key of Object.keys(config)){
    if(c[key]!==null && c[key]!==undefined)
      config[key] = c[key]
  }
}
