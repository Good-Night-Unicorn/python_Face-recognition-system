<template>
	<div class="home_view">
		<div class="projectTitle">欢迎使用 {{projectName}}</div>
	</div>
</template>

<script setup>
	import {
		inject,
		nextTick,
		ref,
		getCurrentInstance
	} from 'vue';
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context.$project.projectName
	const init=()=>{
	}
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}
	init()
</script>
<style lang="scss">
	.projectTitle{
		padding: 20px 0;
		margin: 20px 0 20px;
		color: #fff;
		font-weight: 500;
		display: flex;
		width: 100%;
		font-size: 24px;
		justify-content: center;
		align-items: center;
		height: auto;
	}

	.showIcons {
		transition: transform 0.3s;
		margin-right: 10px;
	}

	.showIcons1 {
		transform: rotate(-180deg);
	}
	
	// 总数盒子
	.count_list{
		padding: 0 0 20px;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		// 总数card
		.card_view {
			border: 1px solid rgba(254, 182, 203, 0.5);
			border-radius: 0;
			box-shadow: 0px 0px 0px rgba(0,0,0,.12);
			margin: 0 1% 20px;
			background: rgba(255, 255, 255, 0.5);
			flex: 1;
			width: 31%;
			box-sizing: border-box;
			height: auto;
			// card头部
			.el-card__header {
				border: 0px solid rgba(254, 182, 203, 0.5);
				background: rgba(255, 255, 255, 0.3);
				width: 100%;
				border-width: 0 0 1px;
				// 头部盒子
				.index_card_head {
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					height: 10px;
					// 标题
					.card_head_title {
						color: #555;
						font-size: 14px;
					}
					// 按钮盒子
					.card_head_right {
						display: flex;
						align-items: center;
						// 按钮
						.el-icon {
							cursor: pointer;
							color: #666;
							font-size: 20px;
						}
					}
				}
			}
			// body
			.el-card__body {
				padding: 0;
				// body盒子
				.count_item{
					padding: 30px;
					text-align: center;
					// 总数标题
					.count_title{
						color: #333;
						font-size: 16px;
						line-height: 2;
					}
					// 总数数字
					.count_num{
						color: #f00;
						font-size: 30px;
						line-height: 2;
					}
				}
			}
		}
	}
	// 首页盒子
	.home_view {
		padding: 0px 20px;
		margin: 0;
		background: url(http://clfile.zggen.cn/20231120/3003369554f34c828841c05292b6461a.jpg) no-repeat center top / 100% 100% !important;
		width: 100%;
		min-height: 100vh;
		height: auto;
	}
	// 统计图盒子
	.card_list {
		padding: 0 0 20px;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		// 统计图card
		.card_view {
			border: 1px solid rgba(254, 182, 203, 0.5);
			border-radius: 0;
			box-shadow: 0px 0px 0px rgba(0,0,0,.12);
			margin: 0 1% 30px;
			background: rgba(255, 255, 255, 0.5);
			width: 48%;
			box-sizing: border-box;
			height: auto;
			// 头部
			.el-card__header {
				border: 0px solid rgba(254, 182, 203, 0.5);
				background: rgba(255, 255, 255, 0.3);
				width: 100%;
				border-width: 0 0 1px;
				// 头部盒子
				.index_card_head {
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					height: 10px;
					// 标题
					.card_head_title {
						color: #555;
						font-size: 14px;
					}
					// 按钮盒子
					.card_head_right {
						display: flex;
						align-items: center;
						// 按钮
						.el-icon{
							cursor: pointer;
							color: #666;
							font-size: 20px;
						}
					}
				}
			}
			// body
			.el-card__body {
				padding: 0;
				// body盒子
				.card_item{
					padding: 30px;
					text-align: center;
				}
			}
		}
	}
</style>
