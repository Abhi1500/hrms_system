import React, { useState } from 'react'
export default function UploadImage() {
   const [imgPreview, setimgPreview] = useState(null);
   const fileTypes = ['image/png','image/jpeg'];
const handleimgPreview=(e)=>{
    let selected = e.target.files[0];
    console.log('hiii',selected.name);
    if(selected.name){
        if(selected.name && fileTypes.includes(selected.type)){
            console.log(selected.type)
            setimgPreview(URL.createObjectURL(selected))
        }
    }

}

  return (
    <>
    <div className='d-flex flex-column'>


    <label className="form-label" for="customFile">Upload image (Passport Size)</label>
    <input type="file" className="form-control" id="customFile" onChange={handleimgPreview} />
    <button type="button" className="btn btn-info w-25" >Upload</button>
    <img src={imgPreview} alt="error" className="img-thumbnail w-25 h-25"></img>
    </div>
   
     
    </>
  )
}
