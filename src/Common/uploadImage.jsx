import React, { useEffect, useState } from 'react'


export default function UploadImage(props) {
  let avatar = props.avatar
  const [imgPreview, setimgPreview] = useState();
  const fileTypes = ['image/png', 'image/jpeg'];
  const handleimgPreview = (e) => {
    let selected = e.target.files[0];
    // console.log(e.target.files);
    // console.log('hiii', selected.name);
    if (selected.name) {
      if (selected.name && fileTypes.includes(selected.type)) {
        console.log(selected.type)
        setimgPreview(URL.createObjectURL(selected))
        props.handleUpload(selected);

      }
    }
  }
  
  useEffect(() => {
    if (avatar)
      setimgPreview(props.avatar)
  }, [props.avatar])


return (<>
  <div className='d-flex flex-column  w-25 h-auto'>
    <label className="form-label mb-0 " htmlFor="customFile" style={{ textDecorationLine: 'underline' }}>Upload image </label>
    <input type="file" className=" h-35px w-100 mt-5px" id="customFile" name='customFile' onChange={handleimgPreview} />
    <img src={imgPreview} alt="error" className='img-thumbnail mt-3' style={{ height: '200px', borderRadius: '100%' }} />
  </div>
</>
)
}
