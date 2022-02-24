import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UploadImage from '../../Common/uploadImage'
import Form from './Helpers/form';
import { patchUpdate } from './service';

export default function UpdateStudent(props) {
    const location = useLocation();
    const formData = new FormData();
    const navigate = useNavigate();

    const data = location.state;
    let { id, name, father_name, avatar } = data.details;

    const [allValues, setAllValues] = useState({

        fname: { val: name, isValid: false },
        fathername: { val: father_name, isValid: false },
        mothername: { val: "", isValid: false },
        lname: { val: "", isValid: false },
        email: { val: "" , isValid: false},
        avatar: { val: avatar, isValid: false },
        password: { val: "", isValid: false },
        address: { val: "", isValid: false },
        address2: { val: "" , isValid: false},
        inputCity:{val:"", isValid: false},
        inputZip:{val:"", isValid: false},
        State: { val: "" , isValid: false}

    });



    const changeHandler =  (e) => {
        const key = e.target.name;
        const val = e.target.value?.trim();
        console.log(val);
        let isValid = true;

        switch (key) {
            case 'fname':
                if (val?.length) isValid = false;

                break;
            case 'lname':

                if (val?.length) isValid = false;
                break;

            case 'fathername':

                if (val?.length) isValid = false;
                break;
            case 'mothername':

                if (val?.length) isValid = false;
                break;
            case 'email':

                if (val?.length && /\S+@\S+\.\S+/.test(val)) isValid = false;
                break;
            case 'password':

                if (val?.length && /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,32}$/.test(val))
                    isValid = false;
                break;

            case 'address':

                if (val?.length) isValid = false;
                break;
            case 'address2':

                if (val?.length) isValid = false;
                break;
            case 'inputCity':

                if (val?.length) isValid = false;
                break;
            case 'inputZip':

                if (val?.length) isValid = false;
                break;
            case 'State':

                if (val?.length) isValid = false;
                break;

            default:
                break;
        }

        setAllValues({ ...allValues, [key]: { val, isValid } });
    }
    
    const handleSubmit = async () => {
        formData.append('name', allValues.fname.val);
        formData.append('id', id);
        console.log(id);
        formData.append('father_name', allValues.fathername.val);
        formData.append('mother', allValues.mothername.val);
        formData.append('email', allValues.email.val)
        formData.append('avatar', allValues.avatar.val)
        console.log(JSON.stringify(formData));

        updateUserCredentials(formData).then(()=>{
            navigate('/dashboard/student')
        })
    }
    const updateUserCredentials = async (formData) => {
        const { res } = await patchUpdate(formData)
        // console.log('sdfv', res.msg)
    }
    const handleUploadImage = (file) => {
        console.log(file);
        setAllValues({ ...allValues, 'avatar': { val:file, isValid:false } });

    }
    
    return (<>
        <div className='d-flex w-100 justify-content-center '> <b style={{ fontSize: '20px', textDecorationLine: 'underline' }}>STUDENT DETAIL'S :</b> </div>

        <Form allValues={allValues} event={changeHandler} avatar={avatar} handleUploadImage={handleUploadImage} setval = {setAllValues}/>
        

        <button type="submit" className="btn btn-primary m-2" onClick={handleSubmit} >Update</button>


    </>
    )
}
