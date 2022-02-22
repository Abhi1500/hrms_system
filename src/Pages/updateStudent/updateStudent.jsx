import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import UploadImage from '../createStudent/uploadImage'
import { patchUpdate } from '../Management/service';

export default function UpdateStudent(props) {
    const location = useLocation();
    const [name, setName] = useState();
    const [father, setFather] = useState()
    const [mother, setMother] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [address, setAddress] = useState()
    const [address2, setAddress2] = useState()
    const [State, setState] = useState()
    const [avatar, setAvatar] = useState()


    useEffect(() => {
        let hi = location.state;
        // console.log('>>>>', location.state);
        let data = hi.details
        setName(data.name)
        setFather(data.father_name)
        setMother(data.mother)
        setEmail(data.email)
        setPassword(data.password)
        setAddress(data.address)
        setAddress2(data.address2)
        setState(data.state)
        setAvatar(data.avatar)
    }, [])
    // console.log('>>>>hjj', name);

    const [allValues, setAllValues] = useState({

        fname1: { val: name, isValid: false },
        fathername: { val: "" },
        mothername: { val: "" },
        fname: { val: "" },
        email: { val: "" },
        password: { val: "" },
        address: { val: "" },
        address2: { val: "" },
        State: { val: "" }

    });
    const formData = new FormData();



    const changeHandler = e => {
        const key = e.target.name;
        const val = e.target.value?.trim();
        // console.log(val)
        let isValid = true;
        switch (key) {
            case 'fname1':
                console.log(key, val?.length);

                if (val?.length) {
                    isValid = false;

                }
                setName(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                console.log(val);
                break;
            case 'lname':
                // console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;

            case 'fathername':
                // console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setFather(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'mothername':
                // console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setMother(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'email':
                // console.log(key, val?.length);

                if (val?.length && /\S+@\S+\.\S+/.test(val))
                    isValid = false;
                setEmail(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'password':
                // console.log(key, val?.length);

                if (val?.length && /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,32}$/.test(val))
                    isValid = false;
                setPassword(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;

            case 'address':
                // console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setAddress(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'address2':
                // console.log(key, val?.length);

                if (val?.length)
                    isValid = false;
                setAddress2(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'State':
                console.log(val, val?.length);

                if (val?.length)
                    // console.log('myval', val)
                    isValid = false;
                setState(val)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;

            default:
                break;
        }
    }
    const handleSubmit = async () => {
        formData.append('name', allValues.fname1.val);
        console.log(allValues.fname.val)
        formData.append('father_name', allValues.fathername.val);
        formData.append('mother', allValues.mothername.val);
        formData.append('email', allValues.email.val)
        console.log(JSON.stringify(formData));
        // const res = await axios.patch('https://ea79-103-62-237-69.ngrok.io/students/update', formData)
        // console.log(res);
        updateUserCredentials(formData)
    }
    const updateUserCredentials = async(formData)=>{
        const {res}=await patchUpdate(formData)
        console.log('sdfv',res.msg)
    }
    const handleUploadImage = (file) => {

        console.log(file);
        formData.append('avatar', file);
    }

    return (<>
        <div className='d-flex w-100 justify-content-center '> <b style={{ fontSize: '20px', textDecorationLine: 'underline' }}>STUDENT DETAIL'S :</b> </div>
        <form className='m-4 '>
            <div className="form-row ">
                <div className='d-flex  w-100  h-25 overflow-auto'>
                    <div className='d-flex flex-column mb-3 w-100 h-25  justify-content-between'>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="fName1" className='text-start'>Name</label>
                            <input type="text" className="form-control" id="fName1" name='fname1' value={name} onChange={changeHandler} />
                            {allValues.fname1.isValid && <small className='text-danger'>Invalid User Name</small>}

                        </div>

                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="lName" className='text-start'>Last Name</label>
                            <input type="text" className="form-control" id="lName" name='lname' placeholder="Last Name" value={allValues.fname.val} onChange={changeHandler} />
                            {allValues.fname.isValid && <small className='text-danger'>Invalid User Name</small>}
                        </div>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="fatherName" className='text-start'>Father's Name</label>
                            <input type="text" className="form-control" id="fatherName" name='fathername' placeholder="Father's Name" value={father} onChange={changeHandler} />
                            {allValues.fathername.isValid && <small className='text-danger'>Invalid User Name</small>}
                        </div>
                        <div className="form-group col-md-12 d-flex flex-column ">
                            <label htmlFor="MotherName" className='text-start'>Mother's Name</label>
                            <input type="text" className="form-control" id="MotherName" placeholder="Mother's Name" name='mothername' value={mother} onChange={changeHandler} />
                            {allValues.mothername.isValid && <small className='text-danger'>Invalid User Name</small>}
                        </div>
                    </div>
                    <UploadImage handleUpload={handleUploadImage} avatar={avatar} />



                </div>




                {/* <Inputbox
          field = 'fname'
          label = "Test Field"
          changeHandler = {changeHandlerTest} 
          err= "Invalid Input" 
          condition = {[] }
          
          /> */}

                <div className='d-flex mb-3'>

                </div>
                <div className='d-flex mb-3'>
                    <div className="form-group d-flex flex-column col-md-6 me-1">
                        <label htmlFor="inputEmail4" className='text-start'>Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='email' placeholder="Email" value={email} onChange={changeHandler} />
                        {allValues.email.isValid && <small className='text-danger text-start'>Enter a valid email address</small>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" name='password' placeholder="Password" value={password} onChange={changeHandler} />
                        {allValues.password.isValid && <small className='text-danger'>Must contain 8 characters consists of upperCase lowerCase numeric And special character</small>}

                    </div>
                </div>

            </div>
            <div className="form-group ">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" id="address" name='address' placeholder="Noida...." value={address} onChange={changeHandler} />
                {allValues.address.isValid && <small className='text-danger'>Address is required</small>}
            </div>
            <div className="form-group">
                <label htmlFor="address2">Address 2</label>
                <input type="text" className="form-control" id="address2" placeholder="sector 63..." id="address2" name='address2' placeholder="Noida...." value={address2} onChange={changeHandler} />
                {allValues.address2.isValid && <small className='text-danger m-0' >Address 2 is required</small>}
            </div>
            <div className="form-row">
                <div className="form-group  d-flex">
                    <div className='col-md-6'> <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" /></div>
                    <div className='col-md-6'>

                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>


                </div>
                <div className='d-flex '>

                    <div className="form-group col-md-6">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control" name='State' id='State' value={State} onChange={changeHandler}>
                            <option value=''>Select  state</option>
                            <option >Andhra Pradesh</option>
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


                    {allValues.State.isValid && <small className='text-danger'>Select is required</small>}
                </div>
            </div>




        </form>

        <button type="submit" className="btn btn-primary m-2" onClick={handleSubmit} ><Link to='../student' style={{color:'black',textDecoration:'none'}}>Update</Link></button>


    </>
    )
}
