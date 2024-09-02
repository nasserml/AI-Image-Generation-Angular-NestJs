import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({timestamps: true})
@ObjectType()
export class Post{
    @Field(()=>ID)
    _id: string;

    @Prop({required: true})
    @Field()
    name: string;

    @Prop({required: true})
    @Field()
    prompt: string;

    @Prop({required: true})
    @Field()
    photo: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);






