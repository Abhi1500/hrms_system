import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default function Modalalert(props) {
    let details = props.details
    const [toggalAlert, settoggalAlert] = useState(false);
    useEffect(() => {
        (props.toggleAlert != null) &&
            settoggalAlert(!toggalAlert);
        // console.log(toggalAlert);
    }, [props.toggleAlert])

    const DeleteUser = (id, e) => {
        axios.delete(`https://0121-103-62-237-69.ngrok.io/students/delete?${id}`)
            .then((res) => {
                props.fetchUserList()
                settoggalAlert(!toggalAlert)
                console.log('deleted', res)
            })
            .catch(err => console.log('hhhhhh', err))
    }

    return (
        <div>
            <Modal isOpen={toggalAlert} toggle={() => settoggalAlert(!toggalAlert)}  >
                <ModalHeader toggle={() => settoggalAlert(!toggalAlert)} >
                   <b>Do You Want To Delete it Really?</b>
                </ModalHeader>
                <ModalBody>
                    <b>Id:</b>{props.details.id}<br/>
                    <b>Name:</b>{props.details.name}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={(e) => DeleteUser(details.id, e)}
                    >
                        YES
                    </Button>
                    
                    <Button onClick={() => settoggalAlert(!toggalAlert)} >
                        NO
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
