import {ObjectType, Field, ID} from '@nestjs/graphql';

@ObjectType()
export class PostObj {

    @Field(()=> ID)
    _id: string;


    @Field()
    name: string;

    @Field()
    prompt:string;

    @Field()
    photo: string;

  

    
}
