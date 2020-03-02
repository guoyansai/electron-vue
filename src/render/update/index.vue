<template>
	<div class="upDateBox">
		<h1>欢迎页面</h1>
		<p>检查更新中...</p>
		<p>{{ countDown }}s</p>
		<p><button @click="openMain()">立即跳转</button></p>
	</div>
</template>
<script>
const { ipcRenderer } = require('electron');
export default {
	data() {
		return {
			countDown: 555
		};
	},
	methods: {
		openMain(newVersionPath, version) {
			ipcRenderer.send('create-main', {
				newVersionPath,
				version
			});
		},
		// 跳转到主窗口
		runMain(newVersionPath, version) {
			let timer = setInterval(() => {
				if (this.countDown <= 0) {
					timer = clearInterval(timer);
					this.openMain(newVersionPath, version);
				}
				this.countDown--;
			}, 1000);
		}
	},
	mounted() {
		// 更新逻辑看下面伪代码
		// const v1 = getOnlineVersion();
		// const v2 = getLocalVersion();
		// const needUpdate = checkVersion(v1, v2);
		// if (needUpdate) {
		//     downloadVersion();
		// }

		this.runMain();
	}
};
</script>
<style lang="less" scoped>
.upDateBox {
	position: absolute;
	top: 0rem;
	left: 0rem;
	width: 100%;
	height: 100%;
	background: lightblue;
	p,
	h1 {
		text-align: center;
		line-height: 50px;
	}
}
</style>
