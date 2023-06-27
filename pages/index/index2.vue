<template>
	<view>
		<uni-section title="去除空格" type="line" padding>
			<text class="uni-subtitle">输入内容：{{ '"'+val+'"' }}</text>
			<uni-easyinput class="uni-mt-5" trim="all" v-model="val" placeholder="请输入内容"></uni-easyinput>
		</uni-section>
		<button class="mt-2" @tap="tap">点击</button>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'

  const val = ref('Hello2')

	function tap(){
		console.log(val.value)
	}
</script>
