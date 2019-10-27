import React from 'react'
import {Link} from 'react-router-dom';

const Track = (props) => {
    const {track} =props
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm ">
                <div className="card-body">
                    <h5>{track.employee_name}</h5>
                    <p className="card-text">
                        <strong><i class="fa fa-money-bill-alt"></i>Salary</strong>:{track.employee_salary}
                    </p>
                    <Link to={`employee/${track.id}`} className="btn btn-dark">
                        View Employee
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track;
