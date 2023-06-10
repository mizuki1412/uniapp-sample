<template>
	<view class="mt-2 _flex_col_center">
		<text class="text-red-500">{{title}}</text>
		<text class="text-red-500">{{obj?.extend}}</text>
		<i class="iconfont icon-home text-red-600"></i>
		<button @click="test">test2</button>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'
	import {request} from "../../lib/request";

  const title = ref('Hello2')
	const obj = ref()
	async function test(){
		let r = await request('/rest/user/login',{username: 'admin',pwd:'50319'},{throwable:false})
		console.log(111,r)
	}

	onLoad((e)=>{
    console.log("load", e)
  })
</script>
