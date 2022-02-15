
import axios from 'axios';

export const getUserList = async() => {
   return await axios.get('https://fast-anchorage-32246.herokuapp.com/students/list')
          .catch((e)=> console.log(e));
} 