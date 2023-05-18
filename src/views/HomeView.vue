<template>
	<header class="header">
		<div class="container">
			<div class="header__row">
				<div class="header__logo">MFinance</div>
				<div class="header__nav">
					<div class="header__nav-link">
						<a class="login" @click="showLoginDialog">Log in</a>
					</div>
					<div class="header__nav-button">
						<a
							href="#"
							class="button"
							@click="showRegistrationDialog"
							>Get Started</a
						>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main>
		<Modal :class="{ active: showLogin }" @close="showLoginDialog()">
			<h2>Log in</h2>
			<LoginForm @login="handleLogin"></LoginForm>
		</Modal>
		<Modal
			:class="{ active: showRegistration }"
			@close="showRegistrationDialog()"
		>
			<h2>Register</h2>
			<RegistrationForm @register="handleRegistration"></RegistrationForm>
		</Modal>
		<div class="info-block-list">
			<InfoBlock>
				<div class="home-block__content">
					<h1>Start to manage your finance right now!</h1>
					<p>
						Knowing your income and expenses will help you make
						informed financial decisions and achieve your goals.
					</p>
					<div class="home-block__buttons">
						<a
							href="#"
							class="button"
							@click="showRegistrationDialog"
						>
							Start manage
							<svg
								width="30"
								height="16"
								viewBox="0 0 30 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M29.7071 8.70711C30.0976 8.31659 30.0976 7.68342 29.7071 7.2929L23.3431 0.928934C22.9526 0.53841 22.3195 0.53841 21.9289 0.928934C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM-8.74228e-08 9L29 9L29 7L8.74228e-08 7L-8.74228e-08 9Z"
									fill="white"
								/>
							</svg>
						</a>
						<a href="#" class="link">Log in</a>
					</div>
				</div>
				<div class="home-block__img">
					<img src="@/assets/img/bank-locket.png" alt="bank" />
				</div>
			</InfoBlock>
			<InfoBlock class="reverse">
				<div class="home-block__content">
					<h2>Control over finances is the key to success</h2>
					<p>
						By saving money, you can find a key to solving problems
						or helping someone else
					</p>
					<ul>
						<li>Productive saving money</li>
						<li>Becoming a financially literate person</li>
					</ul>
				</div>
				<div class="home-block__img">
					<img src="@/assets/img/retangl-image.svg" alt="bank" />
				</div>
			</InfoBlock>
			<InfoBlock>
				<div class="home-block__content">
					<h2>
						Therefore, it is necessary to focus on managing your
						finances
					</h2>
					<p>
						With the help of the right strategy and planning, you
						can achieve great success in personal finance
					</p>
					<div class="home-block__buttons">
						<a
							href="#"
							class="button"
							@click="showRegistrationDialog"
						>
							Start manage
							<svg
								width="30"
								height="16"
								viewBox="0 0 30 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M29.7071 8.70711C30.0976 8.31659 30.0976 7.68342 29.7071 7.2929L23.3431 0.928934C22.9526 0.53841 22.3195 0.53841 21.9289 0.928934C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM-8.74228e-08 9L29 9L29 7L8.74228e-08 7L-8.74228e-08 9Z"
									fill="white"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div class="home-block__img">
					<img src="@/assets/img/payment-deadline.png" alt="bank" />
				</div>
			</InfoBlock>
		</div>
	</main>
</template>
<script>
	import InfoBlock from "../components/InfoBlock.vue";
	import LoginForm from "../components/LoginForm.vue";
	import Modal from "../components/Modal.vue";
	import RegistrationForm from "../components/RegistrationForm.vue";

	export default {
		data() {
			return {
				showLogin: false,
				showRegistration: false,
			};
		},
		components: { InfoBlock, LoginForm, RegistrationForm, Modal },
		methods: {
			showLoginDialog() {
				this.showLogin = !this.showLogin;
				document.body.classList.add("modal-open");
			},
			showRegistrationDialog() {
				this.showRegistration = !this.showRegistration;
				document.body.classList.add("modal-open");
			},
			handleLogin() {
				this.showLogin = false; // Close the login dialog after login
			},
			handleRegistration() {
				this.showRegistration = false; // Close the registration dialog after registration
			},
		},
	};
</script>
<style lang="scss" scoped>
	.header {
		padding-top: 45px;
		&__row {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__logo {
			font-weight: 600;
			font-size: 25px;
			line-height: 34px;
			&::first-letter {
				color: #2fc67d;
			}
		}
		&__nav {
			display: flex;
			align-items: center;
		}
		&__nav-link {
			margin-right: 25px;
			a {
				font-family: "Inter", sans-serif;
				font-weight: 500;
				font-size: 18px;
				line-height: 25px;
				color: #a3a3a8;
			}
		}
	}

	.info-block-list {
		.home-block {
			&:not(:first-child) {
				padding-top: 0;
			}
		}
	}
</style>
