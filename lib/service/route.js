import {fillSlashFront} from "../utils/string";

/**
 * route
 * url: path?key=value&key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数
 * params: key-value(基本类型)
 * config: type=redirect/reLaunch/switchTab
 */
export function route(url, params,config){
  url = fillSlashFront(url)
  if(!config) config = {}
  if(!params) params = {}
  if (config.type!=='switchTab' && Object.keys(params)>0){
    url += "?"
    for (let k of Object.keys(params)){
      url += k+"="+params[k]+"&"
    }
    url = url.substring(0, url.length-1)
  }
  switch (config.type){
    case "redirect":
      uni.redirectTo({url})
      break
    case "reLaunch":
      uni.reLaunch({url})
      break
    case "switchTab":
      uni.switchTab({url})
      break
    default:
      uni.navigateTo({url})

  }

}

export function back(){
  uni.navigateTo()
}
