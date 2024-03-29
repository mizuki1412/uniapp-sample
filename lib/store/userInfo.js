import {reactive} from "vue"
import {config} from "./config";

export const storeUserInfo = reactive({
  user: undefined,
  token: undefined,
  redirect: undefined,
  // expire: undefined,
  // setting: undefined,
})

export function initToken() {
  const token = uni.getStorageSync(config.appName + '-token');
  if (token) {
    storeUserInfo.token = token
  }
}

export function updateStoreUserInfo(data) {
  storeUserInfo.user = data.user
  storeUserInfo.token = data.token
  // storeUserInfo.expire = new Date().getTime() + 1000 * 60 * 60 * 20;
  uni.setStorageSync(config.appName + '-token', storeUserInfo.token);
}

export function rmStoreUserInfo() {
  for (const key in storeUserInfo) {
    delete storeUserInfo[key]
  }
  uni.removeStorageSync(config.appName + '-token');
}

export function checkPrivilege(ps, isAnd){
  if(ps && ps.length>0){
    if(storeUserInfo.user && storeUserInfo.user.role && storeUserInfo.user.role.privileges){
      if(isAnd){
        // 并的关系
        for (let p of ps){
          if(storeUserInfo.user.role.privileges.indexOf(p)<0) return false
        }
        return true
      }else{
        // 或的关系
        for (let p of ps){
          if(storeUserInfo.user.role.privileges.indexOf(p)>=0) return true
        }
        return false
      }
    }else{
      return false
    }
  }else{
    return true
  }
}
