import React, { useEffect } from 'react'
import UploadImage from '../../../Common/uploadImage';

export default function Form(props) {
    let avatar = props.avatar

    let allValues = props.allValues
    console.log(allValues.avatar.val);
    let changeHandler = props.event;

    const handleUploadImage = (val) => {
        console.log(val);
        props.setval({ ...allValues, avatar: { val, isValid: true } })
    }

    
    // useEffect(() => {
    //     if (avatar)
    //       props.setval({ ...allValues, avatar: { val:avatar}})
    //       // console.log(imgPreview);
    //   }, [props.avatar])

    return (<>
        <div className='d-flex w-100 justify-content-center '> <b style={{ fontSize: '20px', textDecorationLine: 'underline' }}>STUDENT DETAIL'S :</b> </div>
        <form className='m-4 '>
            <div className="form-row ">
                <div className='d-flex  w-100  h-25 overflow-auto'>
                    <div className='d-flex flex-column mb-3 w-100 h-25  justify-content-between'>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="fName" className='text-start'>Name</label>
                            <input type="text" className="form-control" id="fName" name='fname' placeholder="First Name" value={allValues.fname.val} onChange={props.event} />
                            {allValues.fname.isValid && <small className='text-danger'>Invalid User Name</small>}

                        </div>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="lName" className='text-start'>Last Name</label>
                            <input type="text" className="form-control" id="lName" name='lname' placeholder="Last Name" value={allValues.lname.val} onChange={props.event} />
                            {allValues.lname.isValid && <small className='text-danger'>Invalid User Name</small>}
                        </div>
                        <div className="form-group col-md-12 mb-3 d-flex flex-column">
                            <label htmlFor="fatherName" className='text-start'>Father's Name</label>
                            <input type="text" className="form-control" id="fatherName" name='fathername' placeholder="Father's Name" value={allValues.fathername.val} onChange={changeHandler} />
                            {allValues.fathername.isValid && <small className='text-danger'>Invalid Father Name</small>}
                        </div>
                        <div className="form-group col-md-12 d-flex flex-column ">
                            <label htmlFor="MotherName" className='text-start'>Mother's Name</label>
                            <input type="text" className="form-control" id="MotherName" placeholder="Mother's Name" name='mothername' value={allValues.mothername.val} onChange={changeHandler} />
                            {allValues.mothername.isValid && <small className='text-danger'>Invalid Mother Name</small>}
                        </div>
                    </div>
                    <UploadImage handleUpload={props.handleUploadImage}  avatar={avatar}/>
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
                <input type="text" className="form-control" id="address2" placeholder="sector 63..." name='address2' placeholder="Noida...." value={allValues.address2.val} onChange={changeHandler} />
                {allValues.address2.isValid && <small className='text-danger m-0' >Address 2 is required</small>}
            </div>
            <div className="form-row">
                <div className="form-group  d-flex ">
                    <div className='col-md-6 d-flex flex-column me-1'> <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" name='inputCity' onChange={changeHandler} />
                        {allValues.inputCity.isValid && <small className='text-danger text-start'>Please enter City.</small>}
                    </div>
                    <div className='col-md-6  d-flex flex-column '>
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" name='inputZip' onChange={changeHandler} />
                        {allValues.inputZip.isValid && <small className='text-danger text-start'>Please enter postal code.</small>}
                    </div>
                </div>
                <div className='d-flex '>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control" name='State' id='State' onChange={changeHandler}>
                            <option value=''>Select state</option>
                            <option value='Andra Pradesh'>Andhra Pradesh</option>
                            <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
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
    </>
    )
}

