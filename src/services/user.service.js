import axios from "axios";

const API_URL = "https://mfinancial.herokuapp.com/";

class AuthService {
	async login(user) {
		const response = await axios.post(API_URL + "api/auth/users", {
			username: user.username,
			password: user.password,
		});
		localStorage.setItem("user", JSON.stringify(response.data));
		return response.data;
	}


	logout() {
		localStorage.removeItem("user");
	}

	async register(user) {
		const response = await axios.post(API_URL + "api/auth/users", {
		  username: user.username,
		  email: user.email,
		  password: user.password,
		  // Include other required fields for registration
		})
		  .then(response => {
			// Handle the successful registration response here
			// For example, display a success message to the user
			console.log("Registration successful:", response.data);
			return response.data;
		  })
		  .catch(error => {
			// Handle any registration errors here
			// For example, display an error message to the user
			console.error("Registration failed:", error);
			throw error;
		  });
		  return response.data;
	  }

	verify() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user && user.access) {
			return axios.post(API_URL + "verify", {
				token: user.access,
			});
		} else {
			return Promise.reject("User not authenticated");
		}
	}
}

export default new AuthService();
