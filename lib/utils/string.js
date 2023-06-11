
export function fillSlashFront(url){
  if(url[0]!=='/'){
    url = '/'+url
  }
  return url
}
