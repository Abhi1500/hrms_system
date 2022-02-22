import React, { useState } from 'react'
import  axios  from 'axios';




export default function SignUpPage1() {

    // const formData = new FormData();
    const [name, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const [allvalues, setAllvalues] = useState({
        username: { val: '', isValid: false },
        email: { val: '', isValid: false },
        password: { val: '', isValid: false },
        confirmpassword: { val: '', isValid: false }
    });
    const changeHandler = e => {
        let key = e.target.name;
        let val = e.target.value?.trim();
        console.log(val)
        let isValid = true;

        switch (key) {
            case 'username':
                console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setUsername(val)
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                break;
            case 'email':
                console.log(key, val?.length);

                if (val?.length && /\S+@\S+\.\S+/.test(val))
                    isValid = false;
                setEmail(val)
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                break;
            case 'password':
                if (val?.length)
                    isValid = false;
                console.log(isValid);
                setPassword(val)
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                break;

                break;
            case 'confirmpassword':
                console.log(key, val?.length);

                if (val?.length && val === allvalues.password.val)
                    isValid = false;
                setAllvalues({ ...allvalues, [key]: { val, isValid } })
                console.log('jjjj', isValid);
                break;
            default:
                break;
        };
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
       
        await axios.post('https://ea79-103-62-237-69.ngrok.io/user/signup', {name,email,password})
        .then(response=>{
            console.log('dddd',response.data)})
        .catch(err=>{console.log(err)})
        // console.log(res);
    }

    return (<>
        <div style={{ backgroundColor: '#139487' }}>

            <div className=' text-center display-5 p-4 '>SignUp</div>
            <div className='d-flex container justify-content-center align-items-center w-100 vh-100'>
                <form className=' w-75 p-5  d-flex flex-column ' >
                    <div className="col-sm-15 " >
                        <div >
                            <label htmlFor="validationCustomUsername">Username</label>
                            <div className="input-group ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill"></i></span>
                                </div>
                                <input type="text" className="form-control " id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" name='username' value={name} onChange={changeHandler} />
                                {allvalues.username.isValid && <small className='text-danger'>Invalid User Name</small>}

                            </div>
                        </div>
                        <div className='d-flex flex-column mt-3 '>
                            <label htmlFor="validationCustomUsername ">Email Address</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-envelope-plus-fill"></i></span>
                                </div>
                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="Email Address" aria-describedby="inputGroupPrepend" name='email' value={email} onChange={changeHandler} />
                                {allvalues.email.isValid && <small className='text-danger'>Invalid Email</small>}
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className='mt-3' >
                            <label htmlFor="validationCustomUsername ">Password</label>
                            <div className="input-group ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-lock-fill"></i></span>
                                </div>
                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend" name='password' value={password} onChange={changeHandler} />
                                {allvalues.password.isValid && <small className='text-danger'>Must contain 8 characters consists of upperCase lowerCase numeric And special character</small>}
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className='mt-3' >
                            <label htmlFor="validationCustomUsername">Confirm Password</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-file-earmark-lock-fill"></i></span>
                                </div>
                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="Confirm Password" aria-describedby="inputGroupPrepend" name='confirmpassword' value={allvalues.confirmpassword.val} onChange={changeHandler} />
                                {allvalues.confirmpassword.isValid && <small className='text-danger'>password is not matched</small>}

                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                            <div className='mt-3' >
                                <button className="btn btn-primary" type="submit" onClick={handleSubmit}><b>Sign Up</b></button>
                                <div className='mt-3 '>Already have an account? <a href='LoginPage'>Login here</a></div>
                            </div>
                        </div>
                    </div>


                </form>

            </div>
        </div>

    </>
    )
}

