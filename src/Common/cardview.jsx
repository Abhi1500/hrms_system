import React, { useState } from 'react'
import { Button } from 'reactstrap';
import ModelComponent from './collapse';

import PropTypes from 'prop-types';
import Attendance from '../Pages/Attendance/Attendance';
import { Link } from 'react-router-dom';
import Modalalert from './modalalert';


const defaultProps = {
  details: {},
  toggalModel: () => null
}

function CardView(props) {
  const details = props.details;

  const [toggalModel, setToggalModel] = useState(null);
  const [toggalAlert, setToggalAlert] = useState(null);


  const handleConfirm = () => {

    setToggalModel(!toggalModel);
    console.log('sddd', toggalModel);
  }
  const DeleteUser = (id, e) => {
    setToggalAlert(!toggalAlert);
  }
  return (<>
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 m-auto d-flex  py-20 h-40" >
      <div style={{ width: '15%' }}>
        <img className="w-sm" src={details.avatar} style={{ width: '-webkit-fill-available',height:'175px' }} alt="Not Available" />
      </div>
      <div className="px-6 py-2 d-flex justify-content-lg-start" style={{ width: '40%', fontSize: '15px' }}>
        <div className="font-bold text-xl mb-2 " style={{ width: '65%', textAlign: 'left' }}>
          <p className="text-gray-700 text-base ">
            <b>Id : </b>{details.id}<br />
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
          <Attendance details={details.attendance} />
        </div>
        <div style={{ width: '70%', placeSelf: 'flex-end' }}>
          <button type="button" onClick={handleConfirm} className="btn btn-info">View More</button>&nbsp;
          <button type="button" className="btn btn-success" ><Link state={{ details }} style={{textDecoration:'none',color:'black'}} to="../updateStudent" >Update</Link></button>&nbsp;
          <button type="button" className="btn btn-danger" onClick={(e) => DeleteUser(details.id, e)}>Delete</button>
        </div>
      </div>
    </div>

    <ModelComponent toggleModel={toggalModel} setToggleModel={setToggalModel} details={details} />
    <Modalalert toggleAlert={toggalAlert} setToggleAlert={setToggalAlert} details={details} fetchUserList={props.fetchUserList} />
  </>
  )
}

CardView.defaultProps = defaultProps;
CardView.propTypes = {
  details: PropTypes.object,
  toggalModel: PropTypes.func
}
export default CardView