import React, { useState } from 'react'
<<<<<<< HEAD
import { Alert, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Collapse, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
=======
import {  Button} from 'reactstrap';
>>>>>>> 280f514eb45f6ff221e836648f0b04eb705ec3d3
import ModelComponent from './model';
import PropTypes from 'prop-types';


const defaultProps = {
  details: {},
  toggalModel: () => null
}

function CardView(props) {
  const details = props.details;

  const [toggalModel, setToggalModel] = useState(null);
  const [popover, setPopover] = useState(false)

  const handleConfirm = () => {
    console.log(toggalModel);

    setToggalModel(!toggalModel);
    console.log(toggalModel);
  }


  return (<>
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 m-auto d-flex  py-20 h-40" >
      <div style={{ width: '15%' }}>
        <img className="w-sm" src={details.avatar} style={{ width: '-webkit-fill-available' }} alt="Not Available" />
      </div>
      <div className="px-6 py-2 d-flex justify-content-lg-start" style={{ width: '40%', fontSize: '15px' }}>
        <div className="font-bold text-xl mb-2 " style={{ width: '65%', textAlign: 'left' }}>
          <p className="text-gray-700 text-base ">
            <b>Id : </b>001<br />
            <b>Name: </b>{details.name}<br />
            <b>Father' Name : </b>{details.father_name}<br />
            <b>Year of Admission : </b>{details.year_of_admission}<br />
            <b>Current Session: </b>{details.current_session}<br />
            <b>Section alias: </b>{details.section_alias}<br />


          </p>

        </div>
        <div style={{ width: '35%', textAlign: 'left' }}>
          <p className="text-gray-700 text-base ">
            <b>krId : </b>{details.krId}<br />
            <b>Registraion Id : </b>{details.registration}<br />
            <b>Class : </b>{details.class}<br />
            <b>Section : </b>{details.section}<br />
            <b>Batch : </b>{details.batch}<br />
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 d-flex" style={{ width: '45%' }}>

        <div style={{ width: '30%' }}>
          <br />
          <Button
            id="Popover1"
            type="button"
          >
            Attendance
          </Button>
          <Popover placement='bottom' flip target="Popover1" isOpen={popover} toggle={() => setPopover(!popover)} >
            <PopoverHeader>
              Attendance
            </PopoverHeader>
            <PopoverBody>
              hello
            </PopoverBody>
          </Popover>
        
      </div>

      <div style={{ width: '70%', placeSelf: 'flex-end' }}>
        <button type="button" onClick={handleConfirm} class="btn btn-info">View More</button>&nbsp;
        <button type="button" className="btn btn-success">Success</button>&nbsp;
        <button type="button" class="btn btn-danger">Danger</button>
      </div>
    </div>
  </div>
    {/* <Card className='mt-2'>
      <CardBody>
        <CardTitle tag="h5">
          {details.first_name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6">
          {details.last_name}
          <i>{details.email}</i>
        </CardSubtitle>
        <CardText>
            <img src={details.avatar} />
            <h1>hello</h1>
        </CardText>
        <Button onClick={handleConfirm}> Confirm </Button>
      </CardBody>
    </Card> */}
  {/* Model Jsx Component */ }
  <ModelComponent toggleModel={toggalModel} details={details} />
  </>
  )
}

CardView.defaultProps = defaultProps;
CardView.propTypes = {
  details: PropTypes.object,
  toggalModel: PropTypes.func
}
export default CardView