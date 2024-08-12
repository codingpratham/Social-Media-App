import conf from "../conf/conf";
import { Client, Account, ID ,Databases,Storage,Query} from "appwrite"

export class Services{
    client= new Client();
    databases
    buckets
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            
            .setProject(conf.appwriteProjectId)
            
            this.databases=new Databases(this.client)

            this.buckets=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            
            const promise = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,featuredImage,
                    userId
                },
                ID.unique(),
                {}
            );
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
               
            )

            return true
        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {

            await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100
            )
            
        } catch (error) {
            throw error
            return false
        }
    }

    //fileupload

    async uploadFile(file){
        try {
            return await this.buckets.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
        }
    }

    async updateFile(fileID){
        try {
            return await this.buckets.updateFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            throw error
            
        }
    }

    async deleteFile(fileID){
        try {
            await this.buckets.deleteFile(
                conf.appwriteBucketId,
                fileID
            )

            return true
        } catch (error) {
            throw error
            return false
        }
    }

    getFilePreview(fileID){
        return this.buckets.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }
}


const services=new Services()

export default services