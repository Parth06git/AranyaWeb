import React from 'react'
import caf from './img/cafeteria.png'

const Events = () => {
    return (
        <>
            <div className="container my-4 mx-auto">
                <div className="d-flex justify-content-around">
                    <div className="row my-3">
                        <div className="col py-2">
                            <div className="card" style={{
                                width: '21rem'
                            }}>
                                <img src={caf} className="card-img-top" alt="..." width="225rem" height="225rem" />
                                <div className="card-body">
                                    <h4 className="card-title, text-center">Area.</h4>
                                    <p className="card-title" style={{
                                        fontSize: 'small'
                                    }} >On 9/9/2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="col py-2">
                            <div className="card" style={{
                                width: '21rem'
                            }}>
                                <img src={caf} className="card-img-top" alt="..." width="225rem" height="225rem" />
                                <div className="card-body">
                                    <h4 className="card-title, text-center">Area.</h4>
                                    <p className="card-title" style={{
                                        fontSize: 'small'
                                    }} >On 9/9/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="row my-3">
                        <div className="col py-2">
                            <div className="card" style={{
                                width: '21rem'
                            }}>
                                <img src={caf} className="card-img-top" alt="..." width="225rem" height="225rem" />
                                <div className="card-body">
                                    <h4 className="card-title, text-center">Area.</h4>
                                    <p className="card-title" style={{
                                        fontSize: 'small'
                                    }} >On 9/9/2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="col py-2">
                            <div className="card" style={{
                                width: '21rem'
                            }}>
                                <img src={caf} className="card-img-top" alt="..." width="225rem" height="225rem" />
                                <div className="card-body">
                                    <h4 className="card-title, text-center">Area.</h4>
                                    <p className="card-title" style={{
                                        fontSize: 'small'
                                    }} >On 9/9/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events
