<template>
	<view class="mt-2 _flex_col_center">
		<text class="text-red-500">{{title}}</text>
		<text class="text-red-500">{{obj?.extend}}</text>
		<i class="iconfont icon-home text-red-600"></i>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'

  const title = ref('Hello2')
	const obj = ref()
	onLoad((e)=>{
    console.log("load", e)
  })
</script>
