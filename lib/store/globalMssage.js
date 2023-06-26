import {reactive} from "vue"
export const storeGlobalMessage = reactive({
  content: '',
  type: 'error', // success, error, warn, info
  time: new Date()
})

export function updateGlobalMessage(obj){
  storeGlobalMessage.content = obj.content
  if(obj.type){
    storeGlobalMessage.type = obj.type
  }else{
    storeGlobalMessage.type = 'error'
  }
  storeGlobalMessage.time = new Date()
}

export function showError(msg){
  updateGlobalMessage({content: msg})
}