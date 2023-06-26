
<script setup>
import {onLaunch, onShow, onHide, onLoad} from '@dcloudio/uni-app'
  onLaunch(()=>{
    console.log('App Launch')
  })
  onShow(()=>{
    console.log('App Show')
  })
  onHide(()=>{
    console.log('App Hide')
  })
</script>

<style>
@import "./tailwind.uniapp.css";
@import "./static/iconfont/iconfont.css";
</style>
