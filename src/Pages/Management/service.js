
import axios from 'axios';

export const getUserList = async() => {
   return await axios.get('https://reqres.in/api/users?page=2')
          .catch((e)=> console.log(e));
} 