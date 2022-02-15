import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Private(props) {
    const navi = useNavigate();
const page=props.page;

const token=localStorage.getItem('token');
// useEffect(() => {
//   !token && navi('/loginPage');

 
// }, []);


return token ? page : <div>unauthorised</div>

}