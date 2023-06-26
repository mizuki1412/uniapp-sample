<!-- uni-popup的信息显示组件，需要放在每个需要显示的页面的顶部 -->
<template>
	<uni-popup ref="messageObj" type="message">
		<uni-popup-message :type="type" :message="content" :duration="1500"></uni-popup-message>
	</uni-popup>
</template>

<script setup>
  import {ref,watch} from 'vue'
	import {storeGlobalMessage} from "../store/globalMssage";

	const type = ref('error')
	const content = ref()
	const messageObj = ref()

	watch(storeGlobalMessage, ()=>{
		type.value = storeGlobalMessage.type
		content.value = storeGlobalMessage.content
		// this.$refs.message.open()
		messageObj.value.open()
	})
</script>
