import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HighlightButton } from './highlightButton';
// import Inputbox from '../../Common/Inputbox';
import UploadImage from './uploadImage';
export default function CreateStudent(props) {
    // const hi = HighlightButton(allValues);
    
    const [alertShow, setalertShow] = useState('d-none');
    const [allValues, setAllValues] = useState({
        avatar:{ val: "", isValid: false },
        lname: { val: "", isValid: false },
        fathername: { val: "", isValid: false },
        mothername: { val: "", isValid: false },
        fname: { val: "", isValid: false },
        email: { val: "", isValid: false },
        password: { val: "", isValid: false },
        address: { val: "", isValid: false },
        address2: { val: "", isValid: false },
        State: { val: "", isValid: false }

    });
    
    const {highlightbtn} = HighlightButton(allValues);
    const formData = new FormData();
    
    const changeHandler = e => {
        const key = e.target.name;
        const val = e.target.value?.trim();
        let isValid = true;

        switch (key) {
            case 'fname':
                if (val?.length)
                    isValid = false; 
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'lname':
                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'fathername':
                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'mothername':
                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'email':
                if (val?.length && /\S+@\S+\.\S+/.test(val))
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'password':
                if (val?.length && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(val))
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'address':
                if (val?.length)
                    isValid = false;
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'address2':
                if (val?.length)
                    isValid = false;                    
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'State':
                console.log(val, val?.length);
                console.log('isValid 1',isValid)
                if (val !== 'Select state'){
                console.log('myval',val)
                    isValid = false;
                    console.log('value',val ,'isValid',isValid)}
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
                
            default:
                break;
        }


    }

    
    const handleUploadImage = (val ) => {

      
        console.log(val);
        setAllValues((prev)=>({...prev,avatar:{val,isValid:true}}))
    }
    const handleSubmit = async () => {
        formData.append('name', allValues.fname.val);
        formData.append('avatar', allValues.avatar.val);
        // console.log(allValues.fname.val)
        formData.append('father_name',allValues.fathername.val );
        formData.append('mother',allValues.mothername.val );
        formData.append('email',allValues.email.val )
        if(!allValues.avatar.val){
           alert('image is mandatory');
           return;
        }
         const res = await axios.post('http://fast-anchorage-32246.herokuapp.com/students/create', formData)
         .then((e)=>{
             const res = e.data
             console.log(res);
             if(res.msg){
                setalertShow('d-block')
                setTimeout(() =>{ setalertShow('d-none')} , 1500);
                 
             }
         }).catch((em)=>{
            alert(em)
         })

      
    }
    

    return (<>


        <div className='d-flex w-100 justify-content-center '> <b style={{ fontSize: '20px', textDecorationLine: 'underline' }}>STUDENT DETAIL'S :</b> </div>
        <form className='m-4 '>
            <div className="form-row ">
                <div className='d-flex  w-100  h-25 overflow-auto'>
                    <div className='d-flex flex-column mb-3 w-100 h-25  justify-content-between'>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="fName" className='text-start'>Name</label>
                            <input type="text" className="form-control" id="fName" name='fname' placeholder="First Name" value={allValues.fname.val} onChange={changeHandler} />
                            {allValues.fname.isValid && <small className='text-danger'>Invalid User Name</small>}

                        </div>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="lName" className='text-start'>Last Name</label>
                            <input type="text" className="form-control" id="lName" name='lname' placeholder="Last Name" value={allValues.lname.val} onChange={changeHandler} />
                            {allValues.lname.isValid && <small className='text-danger'>Invalid User Name</small>}
                        </div>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="fatherName" className='text-start'>Father's Name</label>
                            <input type="text" className="form-control" id="fatherName" name='fathername' placeholder="Father's Name" value={allValues.fathername.val} onChange={changeHandler} />
                            {allValues.fathername.isValid && <small className='text-danger'>Invalid User Name</small>}
                        </div>
                        <div className="form-group col-md-12 d-flex flex-column ">
                            <label htmlFor="MotherName" className='text-start'>Mother's Name</label>
                            <input type="text" className="form-control" id="MotherName" placeholder="Mother's Name" name='mothername' value={allValues.mothername.val} onChange={changeHandler} />
                            {allValues.mothername.isValid && <small className='text-danger'>Invalid User Name</small>}
                        </div>
                    </div>
                    <UploadImage handleUpload={handleUploadImage} />



                </div>



                {/* 
              <Inputbox
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
                        <input type="email" className="form-control" id="inputEmail4" name='email' placeholder="Email" value={allValues.email.val} onChange={changeHandler} />
                        {allValues.email.isValid && <small className='text-danger text-start'>Enter a valid email address</small>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" name='password' placeholder="Password" value={allValues.password.val} onChange={changeHandler} />
                        {allValues.password.isValid && <small className='text-danger'>Must contain 8 characters consists of upperCase lowerCase numeric And special character</small>}

                    </div>
                </div>

            </div>
            <div className="form-group ">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" id="address" name='address' placeholder="Noida...." value={allValues.address.val} onChange={changeHandler} />
                {allValues.address.isValid && <small className='text-danger'>Address is required</small>}
            </div>
            <div className="form-group">
                <label htmlFor="address2">Address 2</label>
                <input type="text" className="form-control" id="address2" placeholder="sector 63..." id="address2" name='address2' placeholder="Noida...." value={allValues.address2.val} onChange={changeHandler} />
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
                        <select id="inputState" className="form-control" name='State' id='State' value={allValues.State.val} onChange={changeHandler}>
                            <option>Select state</option>
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
                        {allValues.State.isValid && <small className='text-danger'>Please Select State.</small>}
                    </div>

                
                    
                </div>
            </div>




        </form>

        <button type="submit" className="btn btn-primary m-2" disabled={highlightbtn.value} onClick={handleSubmit} >Create</button>

        <div   className={`position-absolute h-150px ${alertShow}`} style={{ width:'500px',top:'30%',left:'25%',border:'2px solid green',textAlign:'center',paddingTop:'15px',backgroundColor:'green'}}>
              successful
       </div>
      
    </>

    )
}
