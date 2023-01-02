<script setup>
  import {ref} from 'vue'
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
  @import './tailwind.css';
</style>
