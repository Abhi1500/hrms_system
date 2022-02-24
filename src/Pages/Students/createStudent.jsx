import Form from './Helpers/form';
import React, {  useState } from 'react'
import { HighlightButton } from './Helpers/highlightButton';
import PostCreateStudent from './Helpers/postCreateStudent';
import Avatar from '../../images/avatar.png'

export default function CreateStudent() {
    const [allValues, setAllValues] = useState({
        inputCity: { val: "", isValid: false },
        inputZip: { val: "", isValid: false },
        avatar: { val: Avatar, isValid: false },
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
    // console.log(allValues.avatar.val);
    const data = HighlightButton(allValues);
    const changeHandler = e => {
        const key = e.target?.name;
        const val = e.target?.value;
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
                if (val.length) {
                    isValid = false;
                }
                console.log(isValid)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'inputZip':

                console.log('isValid 1', val)
                if (val?.length) {
                    isValid = false;
                }
                console.log(isValid)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            case 'inputCity':
                if (val?.length) {
                    isValid = false;
                }
                console.log(isValid)
                setAllValues({ ...allValues, [key]: { val, isValid } })
                break;
            default:
                break;
        }


    }
    const handleUploadImage = (file)=>{
        setAllValues({ ...allValues, 'avatar': { val:file, isValid:false } });

    }
    return (<>
        <Form allValues={allValues} event={changeHandler} handleUploadImage={handleUploadImage} avatar={Avatar} setval = {setAllValues}/>
        <PostCreateStudent allValue={allValues}  HighlightButton={data} />
    </>)
}
