import React, { useEffect } from 'react'
import about from './img/about.jpg'
import p3 from './img/p3.jpeg'

const Blog = () => {

    useEffect(() => {
        document.title = 'Aranya - Blogs'
    })

    return (
        <>
            <div className="container my-2">
                <h1 className="text-center mp-5">Aranya</h1>
                <img src={p3} className="img-fluid" alt="..." />
            </div>

            <div className="container-fluid my-2">
                <h1 className="text-center text-light bg-dark py-3">Our Blogs</h1>
            </div>

            <div className="container my-3">
                <div className="row mt-4">
                    <div className="col">
                        <img src={about} className="rounded float-start" alt="Aranya" width="320rem" height="250rem" />
                    </div>
                    <div className="col">
                        <h1 className="font-weight-bold, font-italic pt-2" >Trip1</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores voluptatum vitae eius quas quasi ullam saepe similique harum, cum eum suscipit culpa explicabo soluta adipisci consectetur at reiciendis itaque?</p>
                        <p>Nobis veritatis impedit veniam, soluta tempore adipisci modi exercitationem aut molestias minus. Quisquam, dolores! Iusto dolorum sed, recusandae pariatur tempora consectetur obcaecati ad vero molestiae cumque. Placeat, animi ab! Illo.</p>
                        <p className="card-title" style={{
                            fontSize: 'small'
                        }} >On 9/9/2023</p>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row mt-4">
                    <div className="col">
                        <img src={about} className="rounded float-start" alt="Aranya" width="320rem" height="250rem" />
                    </div>
                    <div className="col">
                        <h1 className="font-weight-bold, font-italic pt-2" >Trip2</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores voluptatum vitae eius quas quasi ullam saepe similique harum, cum eum suscipit culpa explicabo soluta adipisci consectetur at reiciendis itaque?</p>
                        <p>Nobis veritatis impedit veniam, soluta tempore adipisci modi exercitationem aut molestias minus. Quisquam, dolores! Iusto dolorum sed, recusandae pariatur tempora consectetur obcaecati ad vero molestiae cumque. Placeat, animi ab! Illo.</p>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row mt-4">
                    <div className="col">
                        <img src={about} className="rounded float-start" alt="Aranya" width="320rem" height="250rem" />
                    </div>
                    <div className="col">
                        <h1 className="font-weight-bold, font-italic pt-2" >Trip3</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores voluptatum vitae eius quas quasi ullam saepe similique harum, cum eum suscipit culpa explicabo soluta adipisci consectetur at reiciendis itaque?</p>
                        <p>Nobis veritatis impedit veniam, soluta tempore adipisci modi exercitationem aut molestias minus. Quisquam, dolores! Iusto dolorum sed, recusandae pariatur tempora consectetur obcaecati ad vero molestiae cumque. Placeat, animi ab! Illo.</p>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row my-4">
                    <div className="col">
                        <img src={about} className="rounded float-start" alt="Aranya" width="320rem" height="250rem" />
                    </div>
                    <div className="col">
                        <h1 className="font-weight-bold, font-italic pt-2" >Trip4</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores voluptatum vitae eius quas quasi ullam saepe similique harum, cum eum suscipit culpa explicabo soluta adipisci consectetur at reiciendis itaque?</p>
                        <p>Nobis veritatis impedit veniam, soluta tempore adipisci modi exercitationem aut molestias minus. Quisquam, dolores! Iusto dolorum sed, recusandae pariatur tempora consectetur obcaecati ad vero molestiae cumque. Placeat, animi ab! Illo.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
