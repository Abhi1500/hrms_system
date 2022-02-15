import React, { useState } from 'react'
export default function CreateStudent() {
    const [allValues, setAllValues] = useState({
        fname: '',
        lname: '',
        fathername:'',
        mothername:'',
        fname: { val: "", isValid:false }
        
     });
     
     let formErrors={};

     const changeHandler = e => {
        const key = e.target.name;
        const val = e.target.value?.trim();
        let isValid = true;

        switch (key) {
            case 'fname':
       console.log(key, val?.length);

            if(val?.length) 
               isValid = false; 
        }

        setAllValues((prev)=>({...prev, [e.target.name]: { val, isValid } }))
     }

     const Validate=()=>{
         

         if( allValues.fname.length < 5){

            formErrors["studfNameErr"] = "First Name is required."; 

            console.log(formErrors)
         }
         if(!allValues.lname){
            formErrors["studlNameErr"] = "Last Name is required.";    
            console.log(formErrors)
         }
     }
    return (<>
        {/* <form className='m-2 '>
          <div className="form-row ">
                <div className='d-flex mb-3'> */}
                    <div className="form-group col-md-6 me-1 d-flex flex-column">
                        <label for="fName">Name</label>
                        <input type="text" className="form-control" id="fName" name='fname' placeholder="First Name" value={allValues.fname.val} onChange={changeHandler}/>
                        {allValues.fname.isValid && <small className='text-danger'>Invalid User Name</small> }
                        
                    </div>
                    {/* <div className="form-group col-md-6 ">
                        <label for="lName">Last Name</label>
                        <input type="text" className="form-control" id="LName" name='lname' placeholder="Last Name" value={allValues.lname} onChange={changeHandler}/>
                    </div>
                </div>



                <div className='d-flex mb-3'>
                    <div className="form-group col-md-6 me-1">
                        <label for="fatherName">Father's Name</label>
                        <input type="text" className="form-control" id="fName" name='fathername' placeholder="Father's Name"  value={allValues.fathername} onChange={changeHandler}/>
                    </div>
                    <div className="form-group col-md-6 ">
                        <label for="MotherName">Mother's Name</label>
                        <input type="text" className="form-control" id="MotherName" placeholder="Mother's Name" name='mothername' value={allValues.fathername} onChange={changeHandler}/>
                    </div>
                </div>






                <div  className='d-flex mb-3'>
                <div className="form-group col-md-6 me-1">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
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
            <label className="form-label" for="customFile">Upload image (Passport Size)</label>
            <input type="file" className="form-control" id="customFile" /> 
        </form>*/}

            <button type="submit" className="btn btn-primary m-2"  disabled={!allValues.fname || allValues.fname.length < 5 || !allValues.lname} onClick={Validate}>Create</button>
     

    </>

    )
}
