import React from 'react'

export default function SingleCard() {
    return (
        <div className="container">
            <div class="card my-4 shadow">
                <img src="https://dummyimage.com/1200x300/000/fff" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}
