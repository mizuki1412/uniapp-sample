<template>
	<view class="mt-2">
		<uni-grid :column="3" :highlight="true" @change="change">
			<uni-grid-item v-for="(item, index) in menus" :index="index" :key="index">
				<view class="_flex_center w-full h-full">{{item.name}}</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'
	import {route} from "../lib/service/route";

	const menus = ref([
		{name:"交互提示", path:"/pages/interactive/interactive"},
		{name:"列表分页", path:"/pages/list/list"},
		{name:"多媒体", path:"/pages/multimedia/media"},
	])

	onLoad((e)=>{
    console.log("load", e)
  })

	function change(e){
		console.log(e.detail.index)
		route(menus.value[e.detail.index].path)
	}
</script>
