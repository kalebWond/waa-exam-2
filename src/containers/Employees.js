import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Employee from "../components/Employee";

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/employees')
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="Product">
            { employees.map(emp => <Employee id={emp.id} name={emp.name} key={emp.id} />) }
        </div>
    );
}

export default Employees;