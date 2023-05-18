import axios from "axios";

const API_URL = "https://mfinancial.herokuapp.com/";
const API = "https://mfinancial.herokuapp.com/transactions/1";
class AuthService {
	async login(user) {
		const response = await axios.post(API_URL + "apiauth/jwt/create", {
			username: user.username,
			password: user.password,
		});
		localStorage.setItem("user", JSON.stringify(response.data));
		return response.data;
	}

	async transactions(transactions) {
		const response = await axios.get(API, {
			user: transactions.user,
			category: transactions.category,
		});
		localStorage.setItem("transaction", JSON.stringify(response.data));
		return response.data;
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(user) {
		return axios.post(API_URL + "api/auth/users", {
			username: user.username,
			email: user.email,
			password: user.password,
		});
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
