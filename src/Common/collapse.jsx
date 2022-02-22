import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

export default function ModelComponent(props) {
    const { details = {} } = props;
    // console.log('.....,', props);

    const [toggalModel, settoggalModel] = useState(false);

    useEffect(() => {
        (props.toggleModel != null) &&
            settoggalModel(!toggalModel);
        // console.log(toggalModel);
    }, [props.toggleModel]) // listen button true/false


    return (<>
        <div>

            <Offcanvas direction='end' isOpen={toggalModel} toggle={() => settoggalModel(!toggalModel)} >
                <OffcanvasHeader toggle={() => settoggalModel(!toggalModel)}>
                    Students Details
                </OffcanvasHeader>
                <OffcanvasBody>
                    <div className=' ' style={{ width: '15%',height:'auto' }}>
                        <img className="w-sm" src={details.avatar} style={{ width: '200px',height:'200px', borderRadius:'50%'}} alt="Not Available" />
                    </div>
                    <div>
                        <b>Id : </b>{details.id}<br />
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
                    </div>
                    

                </OffcanvasBody>
                <button type="button" className="btn btn-secondary text-black "  ><Link state={{details}} style={{color:'black',textDecoration:'none'}} to="../updateStudent" details={details}>Update</Link></button>&nbsp;

            </Offcanvas>

        </div>
    </>
    )
}
