import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from 'reactstrap'

export default function Modalalert(props) {
    let details = props.details
    const [toggalAlert, settoggalAlert] = useState(false);
    const [loader, setLoader] = useState('d-block')
    const [loaderdisplay, setLoaderdisplay] = useState('d-none')
    useEffect(() => {
        (props.toggleAlert != null) &&
            settoggalAlert(!toggalAlert);
        // console.log(toggalAlert);
    }, [props.toggleAlert])

    const DeleteUser = async (id, e) => {
        setLoader('d-none')
        setLoaderdisplay('d-block')
        // console.log(loader);
        await axios.delete(`https://19e5-2405-201-4017-2902-b1f0-a0bb-3300-389b.ngrok.io/students/delete?${id}`)
            .then((res) => {
                props.fetchUserList()
                // setLoader(!loader)
                // console.log(loader);
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
                    <b>Id:</b>{props.details.id}<br />
                    <b>Name:</b>{props.details.name}
                </ModalBody>
                <ModalFooter>
                    <Button className={`${loader}`}
                        color="danger"
                        onClick={(e) => DeleteUser(details.id, e)}
                    >
                        YES
                    </Button>
                    <Button className={`${loaderdisplay}`}
                        color="secondary"

                    >
                        <Spinner
                            color="danger"
                            type="border"
                        >
                            Loading...
                        </Spinner>
                    </Button>

                    <Button onClick={() => settoggalAlert(!toggalAlert)} >
                        NO
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
