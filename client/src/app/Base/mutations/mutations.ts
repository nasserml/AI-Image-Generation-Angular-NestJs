import {gql} from 'apollo-angular';

export const GENERATE_IMAGE = gql`
    mutation GenerateImage($prompt: String!) {
        generateImage(prompt: $prompt)
    }
`

export const CREATE_POST = gql`
    mutation CreatePost($name: String!, $prompt: String!, $photo: String!) {
        createPost(input:{name:$name, prompt: $prompt, photo: $photo}) {
            name 
            prompt
            photo
        }
    }
`

interface Post {
    name: String
    prompt: String
    photo:String

}