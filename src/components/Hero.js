import React from 'react'

export default function Hero() {
    return (
        <div className='container'>

            <div className="row">

                <div className="col-12 col-md-5">
                    <div style={{ padding: "50% 0" }}>
                        <h1>
                            Code snippets for easier coding
                        </h1>
                        <button type="button" class="btn btn-pink shadow">Primary</button>
                        <button type="button" class="btn btn-gray shadow">Primary</button>

                    </div>

                </div>

                <div className="col-12 col-md-7">
                    <img className='img-fluid' src='https://www.creative-tim.com/bits/assets/images/header_image.png' />
                </div>

            </div>

        </div>
    )
}
