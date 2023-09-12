import React, { useEffect } from 'react'
import banner from './img/banner.png'
import about from './img/about.jpg'
import user1 from './img/user1.jpg'
import user2 from './img/user2.jpg'

const About = () => {

    useEffect(() => {
        document.title = 'Aranya - About us'
    })

    return (
        <>
            <div className="container my-2">
                <h1 className="text-center mp-5">Aranya</h1>
                <img src={banner} className="img-fluid" alt="..." />
            </div>

            <div className="container-fluid my-2">
                <h1 className="text-center text-info bg-secondary py-3">About Us</h1>
            </div>

            <div className="container my-3">
                <div className="p-3 bg-light rounded-3">
                    <div className="row mt-4">
                        <div className="col">
                            <h1 className="font-weight-bold, font-italic" >Aranya</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores voluptatum vitae eius quas quasi ullam saepe similique harum, cum eum suscipit culpa explicabo soluta adipisci consectetur at reiciendis itaque?</p>
                            <p>Nobis veritatis impedit veniam, soluta tempore adipisci modi exercitationem aut molestias minus. Quisquam, dolores! Iusto dolorum sed, recusandae pariatur tempora consectetur obcaecati ad vero molestiae cumque. Placeat, animi ab! Illo.</p>
                        </div>
                        <div className="col">
                            <img src={about} className="rounded float-start" alt="Aranya" width="320rem" height="250rem" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-2">
                <h1 className="text-center mp-5">Advisers</h1>
            </div>

            <div className="container">
                <div className="row m-4 text-center">
                    <div className="col pb-4">
                        <img src={user1} alt="uploading" className="bd-placeholder-img rounded-circle" width="140" height="140" />
                        <h2>User name</h2>
                        <p>One line about you</p>
                        <h4 className="text-danger">Position</h4>    <a className="link-dark" href="mailto: parthtrivedi0612@iittp.ac.in" target='blank' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                        </svg>
                        </a>
                    </div>
                    <div className="col">
                        <img src={user2} alt="uploading" className="bd-placeholder-img rounded-circle" width="140" height="140" />
                        <h2>User name</h2>
                        <h4 className="text-danger">Position</h4>
                    </div>
                    <div className="col">
                        <img src={user1} alt="uploading" className="bd-placeholder-img rounded-circle" width="140" height="140" />
                        <h2>User name</h2>
                        <h4 className="text-danger">Position</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
