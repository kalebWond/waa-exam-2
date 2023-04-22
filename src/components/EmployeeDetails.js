import { useState, useEffect, Fragment, useRef } from "react";
import { useParams, redirect, useNavigate, Link } from "react-router-dom"
import axios from "axios";
import Project from "./Project";
import './EmployeeDetails.css'


function EmployeeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employeeDetail, setEmployeeDetail] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/employees/' + id)
            .then(res => setEmployeeDetail(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete('http://localhost:8080/api/v1/employees/' + id)
            .then(() => navigate("/employees"))
            .catch(err => console.log(err))
    }

    const toManagePage = () => {
        navigate("/manage-projects", { state: { id: id } })
    }

    return (
        <div className="ProductDetail">
            <div >
                <div>
                    <h3> Employee Info </h3>
                </div>
                Name: {employeeDetail.name}<br />
                ID: {employeeDetail.id}
                {employeeDetail.projectList && employeeDetail.projectList.length > 0
                    ? <>
                        <p>Projects</p>
                        {employeeDetail.projectList.map(pro => (
                            <Project key={pro.id} pId={pro.id} pName={pro.name} />
                        ))}
                    </>
                    : <h5>No projects assigned</h5>}
                <div>
                    <p onClick={toManagePage} className="Spec">Manage Projects</p>
                </div>
                <div><button onClick={deleteHandler}>Delete</button></div>
                <Link to="/employees">Back</Link>
            </div>
        </div>
    );



}

export default EmployeeDetails;