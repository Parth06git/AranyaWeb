import React, { useEffect } from 'react'
import p1 from './img/p1.jpeg'
import Members from './Members'

const CoCordinator = () => {

    useEffect(()=>{
        document.title = 'Aranya - Members'
    })

    return (
        <>
            <div className="container my-2">
                <h1 className="text-center mp-5">Aranya</h1>
                <img src={p1} className="img-fluid" alt="..." />
            </div>

            <div className="container my-2">
                <h2 className="text-center mp-3">Our Co-ordinator</h2>
            </div>
            <Members />

            <div className="container my-2">
                <h2 className="text-center mp-3">Our Core-Members</h2>
            </div>
            <Members />

            <div className="container my-2">
                <h2 className="text-center mp-3">Our Co-Coordinators</h2>
            </div>
            <Members />

        </>
    )
}

export default CoCordinator
