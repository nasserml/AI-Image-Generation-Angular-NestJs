import axios from 'axios';
import imageToBase64  from 'image-to-base64';
export  const genImage = async (urlPrompt:string) =>  {
    try {
        
            
            const response = await axios.get(urlPrompt, {responseType: 'arraybuffer'});
            const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
            return imageBase64;



        
    } catch (error) {
        console.log('error fetching image ',error);
        return null;
        
    }

}