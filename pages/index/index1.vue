<template>
	<view class="_flex_col_center">
		<view class="mt-2">
			<text class="text-red-500">{{title}}</text>
			<i class="iconfont icon-home text-red-600"></i>
		</view>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'

  const title = ref('Hello2')
	onLoad((e)=>{
    console.log("load", e)
  })
</script>
