<template>
	<view>
		<uni-section title="服务端分页" type="line">
			<uni-list>
				<uni-list-item
					v-for="item in devices" :key="item.id"
					showArrow clickable :title="item.name" />
			</uni-list>
			<view class="mt-2 text-gray-600 _flex_center" v-if="devices.length===0">暂无数据</view>
			<view class="mt-2"></view>
			<uni-pagination :show-icon="true" :total="total" :pageSize="12" v-model="current" @change="change" />
		</uni-section>
	</view>
</template>

<script setup>
  import {ref} from 'vue'
  import {onLoad} from '@dcloudio/uni-app'
	import {useAppLoading} from "../../lib/service/interactive";

	const devices = ref([])
	const current = ref(1)
	const total = ref(0)

	onLoad((e)=>{
		change({current: 1})
	})

	function change(e){
		useAppLoading(async ()=>{
			// let ds = await DeviceList(e.current, 10)
			let ds = {
				records:[],
				total: 100,
				current: e.current
			}
			for(let i=0;i<100;i++){
				ds.records.push({id: i, name:'第'+i+'条信息'})
			}
			ds.records = ds.records.slice((ds.current-1)*12,ds.current*12)
			devices.value = ds.records
			total.value = ds.total
			current.value = ds.current
		})()
	}
</script>
