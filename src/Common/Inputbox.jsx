import React, { useEffect, useState } from 'react'


export default function Inputbox({field,label,changeHandler, err, condition = [] }) {

     const [state, setState] = useState({
         val: '',
         isValid: false
     })     

     const handleInput =(field) => (e) => {
         let val = e.target.value;
         let isValid = true;
        if (val?.length) isValid = false;

        setState({ val, isValid })
       console.log('lllllllllll',field);
       changeHandler({[field]:e.target.value})
     }


    return (<div className="form-group col-md-6 me-1 d-flex flex-column">
        <label for="fName"> { label} </label>
        <input type="text" 
        className="form-control" 
        id='fName' 
        name='fname' 
        placeholder="First    jjj   Name" 
        value={state.val} 
        onChange={handleInput(field)} />
        {state.isValid && <small className='text-danger'>{err}</small>}
    </div>)
}
