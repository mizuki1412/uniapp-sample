import {fillSlashFront} from "../utils/string";
import {config as c} from '../store/config'

/**
 * route
 * url: path?key=value&key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数
 * params: key-value(基本类型)
 * config: type=redirect/reLaunch/switchTab
 */
export function route(url, params, config){
  url = getPath(url)
  if(!params) params = {}
  if(!config) config = {}
  if (config.type!=='switchTab' && Object.keys(params).length>0){
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
  uni.navigateBack()
}

// 包装内部path,url是项目中的目录
export function getPath(url){
  url = fillSlashFront(url)
  // 分包情况
  if (c.subPackageName!=='') url = fillSlashFront(c.subPackageName) + url
  return url;
}