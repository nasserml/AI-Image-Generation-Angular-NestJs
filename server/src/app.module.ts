import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PostResolver } from './resolvers/post/post.resolver';
import { GenImageResolver } from './resolvers/gen-image/gen-image.resolver';
import { Post, PostSchema } from './mongodb/models/post.schema';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URL), MongooseModule.forFeature([{name:Post.name,schema:PostSchema}]), GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
  })],
  controllers: [AppController],
  providers: [AppService, AppResolver, PostResolver, GenImageResolver],
})
export class AppModule { }
