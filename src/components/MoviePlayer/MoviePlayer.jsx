import React from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'

const MoviePlayer = (props) => {
    const { idVideo, title, ...rest } = props
    const youtubeUrl = "https://www.youtube.com/watch?v="

    return (
        <Modal
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    style={{ color: "#000000", fontWeight: "bolder" }}
                >
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#000000" }}>
                <ReactPlayer
                    className="container-fluid"
                    url={youtubeUrl + idVideo}
                    playing
                    width="100%"
                />
            </Modal.Body>
        </Modal>
    )
}

export default MoviePlayer
