import conf from "@/conf/conf.js"
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createListing({email, name,
        propertyType,
        city,
        area,
        pincode,
        description,
        price,
        bedrooms,
        bathrooms,
        username,
        phone,
        url,
        }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionRequestId,
                ID.unique(),
                {
                    name,
                    propertyType,
                    bedrooms,
                    bathrooms,
                    city,
                    description,
                    pincode,
                    price,
                    area,
                    email,
                    username,
                    phone,
                    url,
                    slug: ID.unique()
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createListing :: error", error);
        }
    }

    async getPostBySlug(slug,queries = [Query.equal("Document ID", slug)]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionListingsId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async createProductListing({email, name,
        propertyType,
        city,
        area,
        pincode,
        description,
        price,
        bedrooms,
        bathrooms,
        username,
        phone,
        url,
        }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionListingsId,
                ID.unique(),
                {
                    name,
                    email,
                    propertyType,
                    city,
                    area,
                    pincode,
                    description,
                    price,
                    bedrooms,
                    bathrooms,
                    username,
                    phone,
                    url
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createListing :: error", error);
        }
    }

    async updatePost(slug, {name,
        propertyType,
        city,
        area,
        pincode,
        description,
        price,
        bedrooms,
        bathrooms,
        email}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionListingsId,
                slug,
                {
                    name,
                    propertyType,
                    city,
                    area,
                    pincode,
                    description,
                    price,
                    bedrooms,
                    bathrooms,
                    email
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deleteProperty(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionListingsId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getProperty(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionListingsId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionRequestId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionListingsId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPostsByRequests(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionRequestId,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getPostsByListings(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionListingsId,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service