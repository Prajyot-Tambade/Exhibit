import conf from '../../conf/conf.js';

import { Client, Account, ID } from 'appwrite';

/*
 *
 * AuthService class : Handles all the authentication related services
 *
 *	- createAccount	 : Create a new account and login after creation
 *	- login			 : Login to an existing account
 *	- getCurrentUser : Get the current logged in user
 *	- logout		 : Logout the user from all the sessions
 *
 */

export class AuthService {
	Client = new Client();
	account;

	constructor() {
		this.Client.setEndpoint(conf.appwriteUrl).setProject(
			conf.appwriteProjectId
		);
		this.account = new Account(this.Client);
	}

	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				return this.login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			console.log('Appwrite serive :: createAccount :: error', error);
			throw error;
		}
	}

	async login({ email, password }) {
		try {
			return await this.account.createEmailPasswordSession(
				email,
				password
			);
		} catch (error) {
			console.log('Appwrite serive :: login :: error', error);
			throw error;
		}
	}

	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			console.log('Appwrite serive :: getCurrentUser :: error', error);
			throw error;
		}
		return null;
	}

	async logout() {
		try {
			return await this.account.deleteSessions();
		} catch (error) {
			console.log('Appwrite serive :: logout :: error', error);
			throw error;
		}
	}
}

const authService = new AuthService();
export default authService;
