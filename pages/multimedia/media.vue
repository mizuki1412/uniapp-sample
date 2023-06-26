<template>
	<view>
		<uni-section :title="'当前设备'" type="line" :padding="true">
			<view class="p-2 flex justify-between">
				<view>设备名称:</view>
				<view>{{deviceName}}</view>
			</view>
			<view class="p-2 flex justify-between">
				<view>设备编号:</view>
				<view>{{device}}</view>
			</view>
			<view class="text-red-700 _flex_center">{{errMsg}}</view>
		</uni-section>
		<uni-section title="实时喊话" type="line" :padding="true">
			<button type="primary" @tap="start" :disabled="audioing" v-if="!living">开始喊话</button>
			<button type="warn" @tap="close" v-if="living">结束喊话</button>
			<live-pusher id='livePusher' ref="livePusher" :url="url" mode="RTC" :enable-camera="false" :enable-agc="true" :enable-ans="true" class="hidden"
			></live-pusher>
		</uni-section>
		<uni-section title="录音喊话" type="line" :padding="true">
			<button type="primary" @tap="startRecord" :disabled="living" v-if="!audioing">开始录音</button>
			<button type="warn" @tap="endRecord" v-if="audioing">停止录音</button>
			<button class="mt-2" @tap="playVoice" v-if="voicePath">播放录音</button>
			<button class="mt-2" @tap="uploadVoice" :disabled="living" v-if="!audioing && voicePath">上传喊话</button>
		</uni-section>
	</view>
</template>

<script setup>
  import {ref, onUnmounted} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'

	const url = ref()
	const deviceName = ref()
	const device = ref()
	const errMsg = ref('')
	const pusher = ref()
	const active = ref(false)
	// 实时喊话进行中
	const living = ref(false)
	// 录音喊话进行中
	const audioing = ref(false)
	const recorderManager = ref()
	// ref无效 会报undefined
	const innerAudioContext = uni.createInnerAudioContext();
	const voicePath = ref()

	onLoad((e)=>{
		deviceName.value = 'e.deviceName'
		device.value = 'e.device'
		active.value = true
		recorderManager.value = uni.getRecorderManager();
		innerAudioContext.onError((err)=>{
			console.log('error: ', err)
		})
		recorderManager.value.onStop(function (res) {
			console.log('recorder stop', res);
			voicePath.value = res.tempFilePath;
		});
	})

	onUnmounted(()=>{
		active.value = false
	})

	// 实时喊话
	async function start(){
		if(!device.value) {
			console.error('device null');
			return
		}
		voicePath.value = null
		errMsg.value = ""
		living.value = false
		// url.value = await AudioRemoteStart([device.value])
		url.value = 'rtmp://xxxx'
		errMsg.value = "准备中"
		setTimeout(function (){
			pusher.value = uni.createLivePusherContext("livePusher", this);
			pusher.value.start({
				success: (a) => {
					// uni.showToast({title:'ok'})
					errMsg.value = "可以开始讲话"
					console.log("livePusher.start:" + JSON.stringify(a));
					living.value = true
				},
				fail: (a) => {
					errMsg.value = "推流组件错误"
					uni.showToast({title:'fail:'+a.errno, icon:'error'})
					console.log("livePusher.start.fail:" + JSON.stringify(a));
					// AudioRemoteEnd([device.value])
				}
			});
		},1000)

	}
	async function close(){
		if(!device.value || !pusher.value) {
			console.error('device null');
			return
		}
		// await AudioRemoteEnd([device.value])
		living.value = false
		errMsg.value = "喊话结束"
		pusher.value.stop({
			success: (a) => {
				console.log("close ok")
			},
			fail: (a) =>{
				uni.showToast({title:'fail:'+a.errno, icon:'error'})
			}
		});
	}

	// 录音喊话
	function startRecord() {
		console.log('开始录音');
		errMsg.value = ""
		voicePath.value = null
		recorderManager.value.start();
		audioing.value = true
		errMsg.value = "开始录音"
	}
	function endRecord() {
		console.log('录音结束');
		recorderManager.value.stop();
		audioing.value = false
		errMsg.value = "录音结束"
	}
	function playVoice() {
		console.log('播放录音');
		if (voicePath.value) {
			innerAudioContext.src = voicePath.value;
			innerAudioContext.play();
		}
	}
	async function uploadVoice(){
		// await AudioSendRecord(voicePath.value, [device.value])
		errMsg.value = "录音已上传"
		console.log("已发送")
	}

</script>
