<template>
	<view class="mt-2 _flex_col_center">
		<text class="text-red-500">{{title}}</text>
		<text class="text-red-500">{{obj?.extend}}</text>
		<i class="iconfont icon-home text-red-600"></i>
		<button @tap="test">test</button>
		<view class="bg-gray-300 h-screen w-full"></view>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad,onReady, onPullDownRefresh, onHide, onUnload, onPageScroll} from '@dcloudio/uni-app'

  const title = ref('Hello2')
	const obj = ref()
	async function test(){

	}

	onLoad((e)=>{
    console.log('index1 log:',"load", e)
		// 当前页面实例
		console.log('index1 log:', getCurrentPages()[0], getCurrentPages()[0].route)
		// 页面通信
		uni.$emit('update',{msg:'页面load index1'})
  })
	onReady(()=>{
		console.log('index1 log:','ready')
	})
	onHide(()=>{
		console.log('index1 log:','hide')
	})
	onUnload(()=>{
		console.log('index1 log:','unload')
	})
	onPageScroll((e)=>{
		// 单位px
		console.log('index1 scroll:',e.scrollTop)
	})

	onPullDownRefresh(()=>{
		console.log('index1 log:','pull refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 1000);
	})
</script>
