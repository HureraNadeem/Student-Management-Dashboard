import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"

function Navbar() {
    return (
        <>


        <div className="mycontainer d-flex flex-row justify-content-around">
            <div className="firsthalf d-flex">
                <h1>Student Management </h1>
            </div>
            <div className="seconfhalf">
                <button type="button" class="btn btn-primary">Logout</button>
            </div>
            
        </div>
        <hr />
            
        </>

    )
}

export default Navbar
