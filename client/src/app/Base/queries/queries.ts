import {gql} from 'apollo-angular';

export const GET_POSTS = gql`
    query GEtPosts {
        getPosts {
            name 
            prompt 
            photo
            _id
        }
    }
`