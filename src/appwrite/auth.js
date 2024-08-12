import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"

export class AuthServices {
    client = new Client()
    account;
    
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            
            .setProject(conf.appwriteProjectId)
            
            this.account = new Account(this.client)
        }
}
    
    async function createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            
            if (userAccount) {
                return this.login({email,password})
            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
        
        async function login({ email, password}) {
            try {
                return await this.account.createEmailSession(email, password)
                
            } catch (error) {
                throw error
            }
        }
        
        async function getCurrentUser(){
            try {
                const user= await this.account.get()
                
                return user
                
            } catch (error) {
                throw error
        }
        return null
    }
    
    async function logOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            
        }
    }
}

const AuthServicesInstaces = new AuthServices()

export default AuthServicesInstaces