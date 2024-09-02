import {Resolver, Query, Args} from '@nestjs/graphql';

@Resolver('/v1')
export class AppResolver {
    @Query(()=> String)
    hello():string {
        return 'Hello From GraphQl';
    }

    @Query(()=> String)
    sayWelcome():string {
        return 'welcome'
    }

    @Query(()=> String) 
    async welcome( @Args('name',{type: ()=> String}) name: string )  {
        return 'welcome ' + name
    }

    @Query(()=> Number) 
    calc( @Args('num', {type: ()=> Number}) num:number) : number {
        return num * 2;

    }

    @Query(()=>String) 
    add( @Args('num1', {type: ()=>Number }) num1:number, @Args('num2', {type: ()=> Number}) num2:number): string {
        return `The sum is ${num1 + num2}`;
    }

    
}