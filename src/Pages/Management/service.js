
import axios from 'axios';

export const getUserList = async() => {
   return await axios.get('https://797b-103-62-237-69.ngrok.io/students/list')


          .catch((e)=> console.log(e));
} 
const updateApi = 'https://797b-103-62-237-69.ngrok.io/students/update'

export async function patchUpdate(formData) {

   return await axios.patch(updateApi , formData).catch((e)=>{
      console.log(e);
   }); 
}


