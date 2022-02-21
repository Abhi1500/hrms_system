import React, {useEffect} from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function SignUpPage1() {

   const [userName, setUserName] = React.useState('');
   
    const [email,setEmail]= React.useState('')
    const [pass, setPassword] = React.useState('')
    const [name,setName]= React.useState('')
    const navi = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post( "https://fast-anchorage-32246.herokuapp.com/user/signup",{name,email,pass})
                 .then( response => {
                   setEmail(response.data)
                   console.log(response.data)
                 } )
                 .catch( error => {
                      console.log("error",error)
                 } );

        // const userList = localStorage.getItem('userList') || [];
        // const userListParsed = typeof userList == 'string' ? JSON.parse(userList) : userList;
        // const newUser = {
        //      userName, pass
           
        // }
        // userListParsed.push(newUser);
        // localStorage.setItem('userList', JSON.stringify(userListParsed))
        navi('/LoginPage');
    }

     
     return (<>
        <div style={{backgroundColor:'#139487'}}>
            
        <h1 className='  text-center  p-100'>SignUp</h1>
        <div className=''  > 
     

            <div className='d-flex container justify-content-center align-items-center w-100 vh-100'>
            
           

                <form className=' w-75   d-flex flex-column ' >
               
                    <div class="col-sm-15 " >
                        <div > 
                            <label for="validationCustomUsername">Username</label>
                            <div class="input-group ">
                                <div class="input-group-prepend">

                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-person-fill"></i></span>
                                </div>
                                <input className='' type="text" class="form-control " id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required value={userName} onChange={(e) => setUserName(e.target.value)} />

                            </div>
                        </div>

                        <div className='d-flex flex-column mt-3 '>
                            <label for="validationCustomUsername ">Email Address</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-envelope-plus-fill"></i></span>
                                </div>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Email Address" aria-describedby="inputGroupPrepend" required />
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className='mt-3' >
                            <label for="validationCustomUsername ">Password</label>
                            <div class="input-group ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-lock-fill"></i></span>
                                </div>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend" required value={pass} onChange={(e) => setPassword(e.target.value)} />
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className='mt-3' >
                            <label for="validationCustomUsername">Confirm Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-file-earmark-lock-fill"></i></span>
                                </div>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Confirm Password" aria-describedby="inputGroupPrepend" required />
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                            <div className='mt-3' >
                                <button class="btn btn-primary" type="submit" onClick={handleSubmit}><b>Sign Up</b></button>
                                <div className='mt-3 '>Already have an account? <a href='LoginPage'>Login here</a></div>
                            </div>
                        </div>
                    </div>


                </form>

            </div>
        </div>
        </div>
    </>
    )
}