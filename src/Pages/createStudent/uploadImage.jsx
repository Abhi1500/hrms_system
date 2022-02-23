import React, { useState } from 'react'
import Avatar from '../../images/avatar.png'


export default function UploadImage(props) {
  const [imgPreview, setimgPreview] = useState(Avatar);
  const fileTypes = ['image/png', 'image/jpeg'];
  const handleimgPreview = (e) => {
    let selected = e.target.files[0];
    console.log(e.target.files);
    console.log('hiii', selected.name);
    if (selected.name) {
      if (selected.name && fileTypes.includes(selected.type)) {
        console.log(selected.type)
        setimgPreview(URL.createObjectURL(selected))
        props.handleUpload(selected);

      }
    }
  }
  return (<>
    <div className='d-flex flex-column  w-25 h-auto'>
      <label className="form-label mb-0 " htmlFor="customFile" style={{ textDecorationLine: 'underline' }}>Upload image </label>
      <input type="file" className=" h-35px w-100 mt-5px" id="customFile" name='customFile' onChange={handleimgPreview} />
      <img src={imgPreview} alt="error" className='img-thumbnail mt-3' style={{ height: '200px', borderRadius: '100%' }} />
    </div>
  </>
  )
}
