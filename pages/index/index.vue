<template>
	<view class="_flex_col_center">
		<image class="w-24 h-24 mt-4" src="/static/logo.png"></image>
		<view class="mt-2">
			<text class="text-red-600">{{title}}</text>
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

<style>

</style>
