import React, { useEffect } from 'react'
import p1 from './img/p1.jpeg'
import p2 from './img/p2.jpeg'
import p3 from './img/p3.jpeg'
import ResEvents from './ResEvents'

const Home = () => {

    useEffect(() => {
        document.title = 'Aranya'
    })

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={p1} className="d-block w-100" alt="loading" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Aranya Club</h3>
                            <p>Adventure club for IIT Tirupati.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={p2} className="d-block w-100" alt="loading" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Aranya Club</h3>
                            <p>Adventure club for IIT Tirupati.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={p3} className="d-block w-100" alt="loading" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Aranya Club</h3>
                            <p>Adventure club for IIT Tirupati.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="mobileonly">
                <h3>Aranya Club</h3>
                <p>Adventure club for IIT Tirupati.</p>
            </div>

            <ResEvents />

        </>
    )
}

export default Home
