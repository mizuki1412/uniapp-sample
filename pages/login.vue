<template>
	<view class="_flex_col_center h-screen w-screen bg-green-700 text-white">
		<view class="text-2xl mb-4">登录</view>
		<view class="w-[80%] h-[400rpx] bg-gray-100 shadow rounded p-3 flex flex-col justify-center">
			<uni-forms ref="baseForm" :rules="rules" :modelValue="baseFormData">
				<uni-forms-item label="用户名" required name="name">
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="密码" required name="pwd">
					<uni-easyinput v-model="baseFormData.pwd" placeholder="请输入密码" />
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit()" class="w-full">登录</button>
		</view>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'
	import {route} from "../lib/service/route";
	import {config} from "../lib/store/config";

  const title = ref('login')
  const baseForm = ref()
	const baseFormData = ref({})
	const rules = ref({
		name: {
			rules: [{
				required: true,
				errorMessage: '姓名不能为空'
			}]
		},
		pwd: {
			rules: [{
				required: true,
				errorMessage: '密码不能为空'
			}]
		}
	})

	async function submit(){
		await baseForm.value.validate()
		console.log(baseFormData.value)
		// updateStoreUserInfo()
		route('pages/home',null,{type:'switchTab'})
	}
</script>
