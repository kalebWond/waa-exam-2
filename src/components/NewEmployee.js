import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './NewEmployee.css';

const NewEmployee = (props) => {
    const formRef = useRef()
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const form = formRef.current;
        const body = {
            name: form["name"].value,
            salary: form["salary"].value
        }
        axios.post('http://localhost:8080/api/v1/employees', body)
            .then(() => navigate("/employees"))
            .catch(err => console.log(err))
    }


    return (
        <div className="NewProduct">

            <form ref={formRef} onSubmit={onSubmitHandler}>
                <h1>Add Employee</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>Salary</label>
                <input type="text"
                    label={'salary'}
                    name={'salary'}
                />
                <button>Add Employee </button>
            </form>

        </div>
    );

}

export default NewEmployee;