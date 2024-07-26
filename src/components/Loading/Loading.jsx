import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Loading() {
    document.body.style.cssText = `background-image:url('${require("../../back.jpg")}')`
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-light" style={{ width: '10rem', height: '10rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading