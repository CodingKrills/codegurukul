import React from 'react'

import { Typing } from "typing-effect-reactjs";

export default function Hero() {
    return (
        <div className='container'>

            <div className="row">

                <div className="col-12 col-md-5">
                    <div style={{ padding: "50% 0 30% 0" }}>
                        <h1>
                            <Typing
                                text={[
                                    "Winner of Football World Cup 2018 is France",
                                    "Winner of Football World Cup 2014 is Germany",
                                    "Winner of Cricket World Cup 2019 is England",
                                    "Winner of Cricket World Cup 2015 is Australia",
                                ]}
                                smartBackspace
                                element="h1"
                                typeSpeed={100}
                            />
                        </h1>
                        <br />
                        <button type="button" class="btn btn-pink shadow">Primary</button>
                        <button type="button" class="btn btn-gray shadow">Primary</button>

                    </div>

                </div>

                <div className="col-12 col-md-7">
                    <img className='img-fluid' src='https://www.creative-tim.com/bits/assets/images/header_image.png' alt='hero' />
                </div>

            </div>

        </div>
    )
}
