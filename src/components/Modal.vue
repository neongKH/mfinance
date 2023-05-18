<template>
	<div class="modal-overlay" @click="closeModal">
		<div class="modal-container" @click.stop>
			<div class="modal-header">
				<button class="modal-close" @click="closeModal">&times;</button>
			</div>
			<div class="modal-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			closeModal() {
				this.$emit("close");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s ease-in-out;
		&.active {
			opacity: 1;
			pointer-events: all;
		}
	}

	.modal-container {
		background-color: white;
		padding: 20px;
		border-radius: 20px;
		max-width: 500px;
		color: #000000;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.modal-close {
		font-size: 24px;
		font-weight: bold;
		border: none;
		background: none;
		cursor: pointer;
	}

	.modal-body {
		padding: 20px;
	}
</style>
