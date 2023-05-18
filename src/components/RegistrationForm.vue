<template>
	<div class="col-md-12">
		<div class="container">
			<Form @submit="handleRegistration" :validation-schema="schema">
				<div class="form-group">
					<label for="email">Email</label>
					<Field name="email" type="email" class="form-control" />
					<ErrorMessage name="email" class="error-feedback" />
				</div>
				<div class="form-group">
					<label for="username">Username</label>
					<Field name="username" type="text" class="form-control" />
					<ErrorMessage name="username" class="error-feedback" />
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<Field
						name="password"
						type="password"
						class="form-control"
					/>
					<ErrorMessage name="password" class="error-feedback" />
				</div>
				<div class="form-group">
					<label for="confirmPassword">Confirm Password</label>
					<Field
						name="confirmPassword"
						type="password"
						class="form-control"
					/>
					<ErrorMessage
						name="confirmPassword"
						class="error-feedback"
					/>
				</div>

				<div class="form-group">
					<button
						class="btn btn-primary btn-block"
						:disabled="loading"
					>
						<span
							v-show="loading"
							class="spinner-border spinner-border-sm"
						></span>
						<span>Register</span>
					</button>
				</div>
				<div class="form-group">
					<div v-if="message" class="alert alert-danger" role="alert">
						{{ message }}
					</div>
				</div>
			</Form>
		</div>
	</div>
</template>
<script>
	import { Form, Field, ErrorMessage } from "vee-validate";
	import * as yup from "yup";
	import AuthService from "@/services/user.service";

	export default {
		name: "Registration",
		components: {
			Form,
			Field,
			ErrorMessage,
		},
		data() {
			const schema = yup.object().shape({
				username: yup.string().required("Username is required!"),
				password: yup.string().required("Password is required!"),
				confirmPassword: yup
					.string()
					.oneOf([yup.ref("password"), null], "Passwords must match")
					.required("Confirm Password is required!"),
				email: yup
					.string()
					.email("Invalid email")
					.required("Email is required!"),
			});

			return {
				loading: false,
				message: "",
				schema,
			};
		},
		methods: {
			handleRegistration(user) {
				this.loading = true;

				AuthService.register(user)
					.then(() => {
						this.$emit("close");
					})
					.catch((error) => {
						this.loading = false;
						this.message =
							(error.response &&
								error.response.data &&
								error.response.data.message) ||
							error.message ||
							error.toString();
					});
			},
		},
	};
</script>

<style scoped>
	/* Styles omitted for brevity */
</style>
