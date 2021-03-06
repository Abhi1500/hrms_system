import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUpPage1() {
    const [allvalues, setAllvalues] = useState({
        username: { val: '', isValid: false },
        email: { val: '', isValid: false },
        password: { val: '', isValid: false },
        confirm_password: { val: '', isValid: false }
    });
    const changeHandler = e => {
        let key = e.target.name;
        let val = e.target.value?.trim();
        let isValid = true;
        switch (key) {
            case 'username':
                if (val?.length)
                    isValid = false;
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                break;
            case 'email':
                if (val?.length && /\S+@\S+\.\S+/.test(val))
                    isValid = false;
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                break;
            case 'password':
                if (val?.length && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(val))
                    isValid = false;
                console.log(isValid);
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                break;
            case 'confirm_password':
                console.log(key, val?.length);

                if (val?.length && val === allvalues.password.val)
                    isValid = false;
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                break;
            default:
                break;
        };
    }
    const navi = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let n1 = allvalues.username.val
        let n2 = allvalues.email.val
        let n3 = allvalues.password.val
         await axios.post("https://19e5-2405-201-4017-2902-b1f0-a0bb-3300-389b.ngrok.io/user/signup", { name: n1, email: n2, password: n3 })
            .then(response => {
                let res = response.data;

                console.log(res)
                navi('/LoginPage');

            })
            .catch(error => {
                console.log("error", error)
             
            });
          
           
        
        
    }
   
    
    return (<>
        <div style={{ backgroundColor: '#139487' }}>

            <div className='d-flex container justify-content-center align-items-center w-100 vh-100 '>
                <div className='container ' >
                    <h2 className='text-center mb-4 '><b>Sign Up</b></h2>

                    <form className=' w-90 p-5 justifiy-content-center   d-flex flex-column ' style={{ backgroundColor: 'white' }}>
                        <div class="col-sm-15  " >
                            <div >
                                <label for="validationCustomUsername">Username</label>
                                <div class="input-group  ">
                                    <div class="input-group-prepend">

                                        <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-person-fill"></i></span>
                                    </div>
                                    <input type="text" class="form-control " name="username" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" value={allvalues.username.val} onChange={changeHandler} />
                                    {allvalues.username.isValid && <small className='text-danger'>Invalid User Name</small>}

                                </div>
                            </div>
                            <div className='d-flex flex-column mt-3 '>
                                <label for="validationCustomUsername ">Email Address</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-envelope-plus-fill"></i></span>
                                    </div>
                                    <input type="text" class="form-control" name="email" id="validationCustomUsername" placeholder="Email Address" aria-describedby="inputGroupPrepend" value={allvalues.email.val} onChange={changeHandler} />
                                    {allvalues.email.isValid && <small className='text-danger'>Invalid Email</small>}

                                </div>
                            </div>
                            <div className='mt-3' >
                                <label for="validationCustomUsername ">Password</label>
                                <div class="input-group ">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-lock-fill"></i></span>
                                    </div>
                                    <input type="text" class="form-control" name="password" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend" value={allvalues.password.val} onChange={changeHandler} />
                                    {allvalues.password.isValid && <small className='text-danger'>Must contain 8 characters consists of upperCase lowerCase numeric And special character</small>}

                                </div>
                            </div>
                            <div className='mt-3' >
                                <label for="validationCustomUsername">Confirm Password</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-file-earmark-lock-fill"></i></span>
                                    </div>
                                    <input type="text" class="form-control" name="confirm_password" id="validationCustomUsername" placeholder="Confirm Password" aria-describedby="inputGroupPrepend" value={allvalues.confirm_password.val} onChange={changeHandler} />
                                    {allvalues.confirm_password.isValid && <small className='text-danger'>password is not matched</small>}

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