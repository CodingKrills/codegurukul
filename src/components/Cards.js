import React from 'react'

export default function Cards() {
    return (
        <div>
            <div className="container">
                <div className="card-deck">
                    <div className="card shadow">
                        <img className="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
