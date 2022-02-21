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
      
               
           
    
    

            <div className='d-flex container justify-content-center align-items-center w-100 vh-100 '>
            <div className='container ' >
                    <h2  className='text-center mb-4 '><b>Sign Up</b></h2>
           
           
                
            
            

                <form className=' w-90 p-5 justifiy-content-center   d-flex flex-column ' style={{backgroundColor:'white'}}>
                
               

                    <div class="col-sm-15  " >
                        <div >
                            <label for="validationCustomUsername">Username</label>
                            <div class="input-group  ">


       
   
                     <div class="input-group-prepend">

                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-person-fill"></i></span>
                                </div>

                                <input type="text" class="form-control " name="username" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required value={userName} onChange={(e) => setUserName(e.target.value)} />

                            </div>
                        </div>
                        <div className='d-flex flex-column mt-3 '>
                            <label for="validationCustomUsername ">Email Address</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-envelope-plus-fill"></i></span>
                                </div>
                                <input type="text" class="form-control" name="email" id="validationCustomUsername" placeholder="Email Address" aria-describedby="inputGroupPrepend" required />
                                
                            </div>
                        </div>
                        <div className='mt-3' >
                            <label for="validationCustomUsername ">Password</label>
                            <div class="input-group ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-lock-fill"></i></span>
                                </div>
                                <input type="text" class="form-control" name="password" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend" required value={pass} onChange={(e) => setPassword(e.target.value)} />
                               
                            </div>
                        </div>
                        <div className='mt-3' >
                            <label for="validationCustomUsername">Confirm Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-file-earmark-lock-fill"></i></span>
                                </div>
                                <input type="text" class="form-control" name="confirm-password" id="validationCustomUsername" placeholder="Confirm Password" aria-describedby="inputGroupPrepend" required />
                                
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