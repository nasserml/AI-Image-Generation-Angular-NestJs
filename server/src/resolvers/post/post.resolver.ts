import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Post } from '../../mongodb/models/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePostInputs } from '../../classes/post/create-post-inputs/create-post-inputs';
import cloudinaryConnection from 'src/config/cloudinary/cloudinary';
import { PostObj } from 'src/classes/post/post-obj/post-obj';



@Resolver('/post')
export class PostResolver {

    constructor(@InjectModel(Post.name) private postModel: Model<Post>){}

    @Query(()=>[Post])
    async getPosts():Promise<PostObj[]>{
        try {
            const posts =await this.postModel.find();
            return posts 
            
        } catch (error) {
            console.error(error);
        }
    }



    @Mutation(() => PostObj) 
    // async createPost( @Args('name', { type: ()=> String}) name: string, @Args('prompt', {type: () => String}) prompt:string,  @Args('photo', {type: ()=> String}) photo: string):Promise<Post> {
    async createPost(@Args('input', {type: ()=> CreatePostInputs}) input: CreatePostInputs ):Promise<PostObj> {



        try {


            const result = await cloudinaryConnection().uploader.upload(input.photo);

            const photoUrl = result.secure_url;

            

            const newPost = new this.postModel({
                name:input.name,
                prompt:input.prompt,
                photo:photoUrl
            })
            
            return await newPost.save() ;

            
        } catch (error) {
            console.log(error);
            return error
            
        }

    }

}


