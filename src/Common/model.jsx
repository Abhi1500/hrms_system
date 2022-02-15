import React, { useEffect, useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import CardView from './cardview';

export default function ModelComponent(props) {
    const { details = {} } = props;
    const { email, first_name, avatar } = details 

    const [toggalModel, settoggalModel] = useState(false);

    useEffect(() => {
        settoggalModel(props.toggleModel);
        console.log(toggalModel);
    }, [props.toggleModel]) // listen button true/false
    

    return (<>
        <div>
        <Modal isOpen={toggalModel} toggle={() => settoggalModel(!toggalModel)}  >
            <ModalBody>
               <div className='row'>
                   <div className='col-md-5'>
                      <img src={avatar} />
                   </div>
                   <div className='col-md-6'>
                      <p><b>{first_name}</b></p>
                      <i>{email}</i>
                   </div>
               </div>
            </ModalBody>
        </Modal>
        </div>
        </>
    )
}
