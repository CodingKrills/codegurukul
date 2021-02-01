import React from 'react'

import { SideBar } from "../components/admin/SideBar";

export const AdminHome = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-md-2">
                    <div>
                        <SideBar />
                    </div>
                </div>

                <div className="col col-md-10">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
