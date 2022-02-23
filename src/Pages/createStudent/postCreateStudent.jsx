import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Button, Modal, ModalFooter } from 'reactstrap';

export default function PostCreateStudent(props) {
    let allValues = props.allValue;
    let data = props.HighlightButton;
    console.log(allValues.fathername.val);
    const [toggle, settoggle] = useState(false)
    const formData = new FormData();

    const handleSubmit = async () => {
        formData.append('name', allValues.fname.val);
        formData.append('avatar',allValues.avatar.val);
       
        formData.append('father_name', allValues.fathername.val);
        formData.append('mother', allValues.mothername.val);
        formData.append('email', allValues.email.val)
        if (!allValues.avatar.val) {
            alert('image is mandatory');
            return;
        }
        await axios.post('https://797b-103-62-237-69.ngrok.io/students/create', formData)
            .then((e) => {
                const res = e.data
                console.log(res);
                if (res.msg) {
                    settoggle(!toggle)
                }
            }).catch((e) => {
                alert(e)
            })
    }
    return (
        <>
            <div>
                <Button
                    color="primary" className='m-2' disabled={data.highlightbtn}
                    onClick={handleSubmit}>
                    Create
                </Button>
                <Modal
                    isOpen={toggle} className='border border-4 border-success rounded-3' >
                    <div className={` w-100 h-100   d-flex justify-content-center align-items-center flex-column `}
                        style={{
                            textAlign: 'center', paddingTop: '15px', borderRadius: '0px',
                            backgroundColor: 'white'
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <p className='text-success h5'>Student added successfully</p>
                    </div>
                    <ModalFooter>
                        <Button onClick={() => { settoggle(!toggle) }}>
                            OK
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>)
}
