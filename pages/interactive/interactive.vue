<template>
	<view class="p-2">
		<ShowMessage class="mb-2"></ShowMessage>
		<button type="primary" @tap="loading" class="mb-2">request loading</button>
		<button type="primary" @tap="toast" class="mb-2">toast</button>
		<button type="primary" @tap="confirm" class="mb-2">确认拦截</button>
		<button type="warn" @tap="error" class="mb-2">错误显示</button>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'
	import {useAppLoading, useConfirm} from "../../lib/service/interactive";
	import {sleep} from "../../lib/utils";
	import {showError} from "../../lib/store/globalMssage";
	import ShowMessage from "../../lib/components/ShowMessage.vue";

	onLoad((e)=>{
    console.log("load", e)
  })

	function toast(){
		uni.showToast({title:'文字长度有限制;文字长度有限制', icon:'error'})
	}

	function loading(){
		useAppLoading(async ()=>{
			await sleep(1000)
		})()
	}

	function confirm(){
		useConfirm('确认删除？',()=>{
			uni.showToast({title:'文字长度有限制;文字长度有限制',icon:'none'})
		})()
	}

	function error(){
		showError('这是条错误信息.这是条错误信息.这是条错误信息.这是条错误信息')
	}
</script>
