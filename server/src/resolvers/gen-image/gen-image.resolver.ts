import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { openai } from 'src/config/open-ai.config';
import slugify from 'slugify';
import { genImage } from 'src/utils/gen-image/gen-image-utils';


@Resolver('/gen-image')
export class GenImageResolver {

    @Query(()=> String) 
    helloGen():string {
        return 'hello gen image';
    }

    @Mutation(()=> String)
    async generateImage( @Args('prompt',{type:()=> String}) prompt:string ) {

        try {
            const promptSlug = slugify(prompt,'_').toLowerCase();
            let urlImage = `https://image.pollinations.ai/prompt/${promptSlug}`;       
            let image = await genImage(urlImage); 
            return image;


            
            
        } catch (error) {
            console.log(error);
            return error;
            
        }

        


    }
}
