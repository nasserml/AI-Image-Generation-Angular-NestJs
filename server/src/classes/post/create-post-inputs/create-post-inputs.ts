import {InputType, Field} from '@nestjs/graphql';

@InputType()
export class CreatePostInputs {
    @Field()
    name: string;

    @Field()
    prompt:string;

    @Field()
    photo:string;
}
