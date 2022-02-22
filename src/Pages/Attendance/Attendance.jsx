import React, { useEffect, useState } from 'react'
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap'

export default function Attendance(props) {
 
 
  const [detail, setDetail] = useState(props.details)
  useEffect(() => {
    // console.log(props.details);
    setDetail(props.details)
  }, [props.details])
  
  const [popover, setPopover] = useState(false)
  return (
    <div>
  
  <Popover placement='bottom' flip target="Popover1" isOpen={popover} toggle={() => setPopover(!popover)} >
            <PopoverHeader>
              Attendance
            </PopoverHeader>
            {/* <PopoverBody> */}
              
            {detail && detail.map(({month, days})=>
            <PopoverBody>{month}:{days}
              </PopoverBody>
            )}

            
          </Popover>
          
</div>
  )
}
