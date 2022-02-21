import React, { useState } from 'react'
import UploadImage from './uploadImage';
export default function CreateStudent() {
    const [allValues, setAllValues] = useState({

        lname: { val: "", isValid: false },
        fathername: { val: "", isValid: false },
        mothername: { val: "", isValid: false },
        fname: { val: "", isValid: false },
        email: { val: "", isValid: false },
        password: { val: "", isValid: false }

    });

    let formErrors = {};

    const changeHandler = e => {
        const key = e.target.name;
        const val = e.target.value?.trim();
        let isValid = true;

        switch (key) {
            case 'fname':
                console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'lname':
                console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;

            case 'fathername':
                console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'mothername':
                console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'email':
                console.log(key, val?.length);

                if (val?.length && /\S+@\S+\.\S+/.test(val))
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
                case 'password':
                    console.log(key, val?.length);
    
                    if (val?.length && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(val))
                        isValid = false;
                    setAllValues({ ...allValues, [key]: { val, isValid } })
                    break;
                default:
                    break;
        }


    }

    const Validate = () => {


        if (allValues.fname.length < 5) {

            formErrors["studfNameErr"] = "First Name is required.";

            console.log(formErrors)
        }
        if (!allValues.lname) {
            formErrors["studlNameErr"] = "Last Name is required.";
            console.log(formErrors)
        }
    }
    return (<>
        <form className='m-2 '>

            <div className="form-row ">
                <div className='d-flex mb-3'>
                    <div className="form-group col-md-6 me-1 d-flex flex-column">
                        <label for="fName">Name</label>
                        <input type="text" className="form-control" id="fName" name='fname' placeholder="First Name" value={allValues.fname.val} onChange={changeHandler} />
                        {allValues.fname.isValid && <small className='text-danger'>Invalid User Name</small>}

                    </div>
                    * <div className="form-group col-md-6 ">
                        <label for="lName">Last Name</label>
                        <input type="text" className="form-control" id="LName" name='lname' placeholder="Last Name" value={allValues.lname.val} onChange={changeHandler} />
                        {allValues.lname.isValid && <small className='text-danger'>Invalid User Name</small>}
                    </div>
                </div>



                <div className='d-flex mb-3'>
                    <div className="form-group col-md-6 me-1">
                        <label for="fatherName">Father's Name</label>
                        <input type="text" className="form-control" id="fName" name='fathername' placeholder="Father's Name" value={allValues.fathername.val} onChange={changeHandler} />
                        {allValues.fathername.isValid && <small className='text-danger'>Invalid User Name</small>}
                    </div>
                    <div className="form-group col-md-6 ">
                        <label for="MotherName">Mother's Name</label>
                        <input type="text" className="form-control" id="MotherName" placeholder="Mother's Name" name='mothername' value={allValues.mothername.val} onChange={changeHandler} />
                        {allValues.mothername.isValid && <small className='text-danger'>Invalid User Name</small>}
                    </div>
                </div>






                <div className='d-flex mb-3'>
                    <div className="form-group col-md-6 me-1">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='email' placeholder="Email" value={allValues.email.val} onChange={changeHandler} />
                        {allValues.email.isValid && <small className='text-danger'>Enter a valid email address</small>}
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" name='password' placeholder="Password" value={allValues.password.val} onChange={changeHandler}/>
                        {allValues.password.isValid && <small className='text-danger'>Must contain 8 characters consists of upperCase lowerCase numeric And special character</small>}

                    </div>
                </div>

            </div>
            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
                <div className="form-group  d-flex">
                    <div className='col-md-6'> <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" /></div>
                    <div className='col-md-6'>

                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>


                </div>
                <div className='d-flex '>

                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Select...</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihae </option>
                            <option>Chattisgarh Pradesh</option>
                            <option>Goa</option>
                            <option>gujarat</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>
                            <option>Andhra Pradesh</option>

                        </select>
                    </div>

                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>

         <UploadImage/>

        </form>

        <button type="submit" className="btn btn-primary m-2" disabled={!allValues.fname || allValues.fname.length < 5 || !allValues.lname} onClick={Validate}>Create</button>



    </>

    )
}
