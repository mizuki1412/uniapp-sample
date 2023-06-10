import {HttpHeader} from "./const"
import {storeUserInfo} from "../store/userInfo";
import {config as configLib} from '../store/config'

/// 重载配置项
export const RequestConfig = {
  // 错误信息展示func
  errShowFunc(msg) {
    // todo
    console.log('err req',msg)
    // ElMessage({
    //   showClose: true,
    //   message: msg,
    //   type: "error",
    // })
  },
  // 错误信息拦截处理
  errHandleFunc(e, config) {
    // 存在登录拦截
    let auth = true
    if (config.auth === false) auth = false
    // 只处理result==2，其他交给catch
    if (auth && e.data && e.data.result === 2) {
      uni.navigateTo({
        url: configLib.pageLogin
      })
      return false
    }
    return true
  },
}

function errHandle(e, url, config) {
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
    // pushErrMsg({
    //   src: url,
    //   msg,
    // })
    // 如果未配置errMsgChannel则
    // if (storeErrMsg.submitId === "") {
    //   RequestConfig.errShowFunc(msg)
    // }
    RequestConfig.errShowFunc(msg)
  }
  if (throwable) {
    throw new Error(msg)
  }
  return e
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
  if(url[0]!=='/'){
    url = '/'+url
  }
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
      return errHandle(res, url, config)
    }else{
      return res
    }
  } catch(e){
    return errHandle(e, url, config)
  }
}

/**
 * Download file
 * @param url request url
 * @param data request data
 * @param config filename, showMsg, throwable, axios_configs(https://github.com/axios/axios)
 */
export function download(url, data, config) {
  if(!config) config = {}
  config.responseType = 'blob'
  return request(url, data, config).then((response)=>{
    if ('download' in document.createElement('a')) { // 非IE下载
      const elink = document.createElement('a');
      elink.download = config.filename;
      elink.style.display = 'none';
      elink.href = window.URL.createObjectURL(response.data);
      // console.log(blob)
      document.body.appendChild(elink);
      elink.click();
      window.URL.revokeObjectURL(elink.href); // 释放URL 对象
      document.body.removeChild(elink);
    } else { // IE10+下载
      navigator.msSaveBlob(response.data, config.filename);
    }
  })
  // todo error handle
}

/**
 *
 * @param url
 * @param data file, etc
 * @param config showMsg, throwable, axios_configs(https://github.com/axios/axios)
 */
export function upload(url, data, config) {
  if (!config) config = {}
  if (!config.headers) config.headers = {}
  config.headers[HttpHeader.contentTypeKey] = HttpHeader.contentTypeMultipart
  if (config.throwable !== false) config.throwable = true
  return request(url, data, config)
}
