import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './NewEmployee.css';

const NewEmployee = (props) => {



    return (
        <div className="NewProduct">

            <form >
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