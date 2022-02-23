
import axios from 'axios';

export const getUserList = async() => {
   // return await axios.get('http://fast-anchorage-32246.herokuapp.com/students/list')
   return await axios.get('https://0121-103-62-237-69.ngrok.io/students/list')
   // return await axios.get('https://reqres.in/api/users')
   // return await axios.get('https://fathomless-beyond-85401.herokuapp.com/students/list')

          .catch((e)=> console.log(e));
} 
const updateApi = 'https://0121-103-62-237-69.ngrok.io/students/update'

export async function patchUpdate(formData) {

   return await axios.patch(updateApi , formData).catch((e)=>{
      console.log(e);
   }); // 1s
}