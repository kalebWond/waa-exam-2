import { useState, useEffect, Fragment, useRef } from "react";
import { useParams, redirect, useNavigate } from "react-router-dom"
import axios from "axios";
import Project from "./Project";
import './EmployeeDetails.css'


function EmployeeDetails() {

    const [employeeDetail, setEmployeeDetail] = useState({});
   

    return (
        <div className="ProductDetail">
            <div >
                <div>
                    <h3> Employee Info </h3>
                </div>
                Name: {employeeDetail.name}<br />
                ID: {employeeDetail.id}
                
                
            </div>
        </div>
    );



}

export default EmployeeDetails;