import {HttpHeader} from "./const"
import {storeUserInfo} from "../store/userInfo";
import {config as configLib} from '../store/config'
import {fillSlashFront} from "../utils/string";
import {route} from "../service/route";
import {showError} from "../store/globalMssage";

/// 重载配置项
export const RequestConfig = {
  // 错误信息拦截处理
  errHandleFunc(e, config) {
    // 存在登录拦截
    let auth = true
    if (config.auth === false) auth = false
    // 只处理result==2，其他交给catch
    if (auth && e.data && e.data.result === 2) {
      route(configLib.pageLogin)
      return false
    }
    return true
  },
  errHandle(e, url, config){
    const er = RequestConfig.errHandleFunc(e, config)
    if (!er) return
    let showMsg = true
    if (config.showMsg === false) showMsg = false
    let throwable = true
    if (config.throwable === false) throwable = false
    const data = e.data
    // data 不存在时，请求链路故障
    const msg = data?(data.message ? data.message : data): e.errMsg
    if (showMsg) {
      showError(msg)
    }
    if (throwable) {
      throw new Error(msg)
    }
    return e
  }
}

/**
 * @param url
 * @param data object
 * @param config:
 *  - showMsg:true, throwable:true, auth(default true, 存在登录拦截)
 *  - header, method, dataType  (https://uniapp.dcloud.net.cn/api/request/request.html)
 */
export async function request(url, data, config) {
  // 补全headers
  if (!config) config = {}
  if (!config.header) config.header = {}
  config.header[HttpHeader.tokenKey] = storeUserInfo.token||''
  if (!config.header[HttpHeader.contentTypeKey]) {
    config.header[HttpHeader.contentTypeKey] = HttpHeader.contentTypeForm
  }
  if (!config.method) {
    config.method = "POST"
  }else{
    config.method = config.method.toUpperCase()
  }
  if(!config.dataType){
    config.dataType = 'json'
  }
  // url必须/开头
  url = fillSlashFront(url)
  // success/fail: (data, statusCode, header, cookies)
  try{
    let res = await uni.request({
      url: configLib.requestBaseUrl+url,
      data,
      header: config.header,
      method: config.method,
      dataType: config.dataType,
    })
    if(res.statusCode!==200){
      return RequestConfig.errHandle(res, url, config)
    }else{
      return res
    }
  } catch(e){
    return RequestConfig.errHandle(e, url, config)
  }
}

/**
 * Download file todo
 * @param url request url
 * @param data request data
 * @param config filename, showMsg, throwable
 */
// export function download(url, data, config) {
// }

/**
 * 上传文件 todo test
 * @param url
 * @param data data: {files, filePath, name(param-name), formData}
 * @param config showMsg, throwable
 */
export async function upload(url, data, config) {
  // url必须/开头
  url = fillSlashFront(url)
  try{
    let res = await uni.uploadFile({
      url: configLib.requestBaseUrl+url,
      ...data
    })
    if(res.statusCode!==200){
      return RequestConfig.errHandle(res, url, config)
    }else{
      return res
    }
  } catch(e){
    return RequestConfig.errHandle(e, url, config)
  }
}
