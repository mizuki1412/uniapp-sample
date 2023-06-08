import configInLib from 'lib/store/config'
export const config = {
  requestBaseUrl: "https://www.linkortech.com/myspace-server",
  appName: "demo-test"
}

export function initConfigInLib(){
  configInLib.requestBaseUrl = config.requestBaseUrl
  configInLib.appName = config.appName
}
