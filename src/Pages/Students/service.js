
import axios from 'axios';
import {BASEURL } from '../../Utilities/rootService';


export const getUserList = async() => {
   return await axios.get(`${BASEURL}/students/list`)
          .catch((e)=> console.log(e));
} 

export async function patchUpdate(formData) {
   return await axios.patch(`${BASEURL}/students/update` , formData).catch((e)=>{
      console.log(e);
   }); // 1s
}