<template>
	<view class="mt-2 _flex_col_center">
		<text class="text-red-500">{{title}}</text>
		<text class="text-red-500">{{obj?.extend}}</text>
		<i class="iconfont icon-home text-red-600"></i>
		<button @tap="test">test2</button>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'
	import {request} from "../../lib/request";
	import {route} from "../../lib/service/route";
	import {useConfirm} from "../../lib/service/interactive";

  const title = ref('Hello2')
	const obj = ref()
	async function test(){
		useConfirm('确认请求？', async ()=>{
			let r = await request('/rest/user/login',{username: 'admin',pwd:'50319'},{throwable:false})
			route("/pages/index/index2", {abc:1}, {type: 'switchTab'})
		})()
	}

	onLoad((e)=>{
    console.log("load", e)
  })
</script>
