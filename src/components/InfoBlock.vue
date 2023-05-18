<template>
	<div class="home-block">
		<div class="container">
			<div class="home-block__row">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	.home-block {
		padding-top: 115px;
		margin-bottom: 150px;
		&.reverse {
			.home-block__row {
				flex-direction: row-reverse;
			}
		}
		&__content {
			width: 50%;
			max-width: 510px;
			p {
				font-weight: 500;
				font-size: 20px;
				line-height: 28px;
				color: #a3a3a8;
				margin-bottom: 25px;
			}
			ul {
				li {
					font-size: 20px;
					line-height: 28px;
					color: #a3a3a8;
					padding-left: 45px;
					position: relative;
					&:not(:last-child) {
						margin-bottom: 25px;
					}
					&::before {
						content: "";
						width: 30px;
						height: 30px;
						background-image: url("@/assets/img/check-icon.svg");
						background-size: 100% 100%;
						background-repeat: no-repeat;
						position: absolute;
						left: 0;
						top: 0px;
					}
				}
			}
		}
		

		&__buttons {
			display: flex;
			align-items: center;
			gap: 65px;
			.link {
				font-weight: 500;
				font-size: 16px;
				line-height: 22px;
				color: #ffffff;
				transition: all 0.2s ease-in-out;
				&:hover {
					opacity: 0.7;
				}
			}
			.button {
				display: inline-flex;
				align-items: center;
				svg {
					margin-left: 20px;
					width: 29px;
					height: 11px;
				}
			}
		}

		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 32px;
		}

		&__img {
			width: 50%;
		}
	}
</style>
