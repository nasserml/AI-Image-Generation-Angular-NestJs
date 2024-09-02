import {gql} from 'apollo-angular';

export const GET_POSTS = gql`
    query GetPosts {
        getPosts {
            name 
            prompt 
            photo
            _id
        }
    }
`