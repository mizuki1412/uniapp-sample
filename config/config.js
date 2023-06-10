import {configInit} from '../lib/store/config'
export const config = {
  requestBaseUrl: "https://www.linkortech.com/myspace-server",
  appName: "demo-test"
}

export function initConfigInLib(){
  configInit(config)
  if(config.requestBaseUrl[config.requestBaseUrl.length-1]==='/'){
    config.requestBaseUrl = config.requestBaseUrl.substring(0,config.requestBaseUrl.length-1)
  }
}
