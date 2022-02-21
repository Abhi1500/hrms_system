import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
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

            <Offcanvas direction='end' isOpen={toggalModel} toggle={() => settoggalModel(!toggalModel)} >
                <OffcanvasHeader toggle={function noRefCheck() { }}>
                    Students Details
                </OffcanvasHeader>
                <OffcanvasBody>
                    <div style={{ width: '15%' }}>
                        <img className="w-sm" src={details.avatar} style={{ width: '200px' }} alt="Not Available" />
                    </div>
                    <b>Id : </b>001<br />
                    <b>krId : </b>{details.krId}<br />
                    <b>Registraion Id : </b>{details.registration}<br />
                    <b>Name: </b>{details.name}<br />
                    <b>Father' Name : </b>{details.father_name}<br />
                    <b>Year of Admission : </b>{details.year_of_admission}<br />
                    <b>Current Session: </b>{details.current_session}<br />
                    <b>Class : </b>{details.class}<br />
                    <b>Section : </b>{details.section}<br />
                    <b>Section alias: </b>{details.section_alias}<br />
                    <b>Batch : </b>{details.batch}<br />
                </OffcanvasBody>
            </Offcanvas>
            {/* <Modal isOpen={toggalModel} toggle={() => settoggalModel(!toggalModel)}  >
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
        </Modal> */}
        </div>
    </>
    )
}
