import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Project from "../components/Project";


function ManageProjects() {
    const { state } = useLocation();
    const [updateFlag, setUpdateFlag] = useState(true)
    const { id } = state;
    const formRef = useRef()
    const [projects, setProjects] = useState([]);
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        // fetch all projects
        axios.get('http://localhost:8080/api/v1/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        // fetch projects by employee id
        axios.get(`http://localhost:8080/api/v1/employees/${id}/projects`)
            .then(res => setMyProjects(res.data))
            .catch(err => console.log(err))
    }, [updateFlag])


    const applyFilter = (e) => {
        e.preventDefault()
        const form = formRef.current
        const body = {}
        if (form["name"].value) {
            body.name = form["name"].value
        }
        if (form["location"].value) {
            body.location = form["location"].value
        }
        axios.get('http://localhost:8080/api/v1/projects', {
            params: { ...body }
        }).then(res => setProjects(res.data))
            .catch(err => console.log(err))

    }

    const checkIfAdded = (id) => {
        return myProjects.some(proj => proj.id === id)
    }

    const toggleStatus = (pid) => {
        if (checkIfAdded(pid)) {
            // remove
            axios.delete(`http://localhost:8080/api/v1/employees/${id}/projects/${pid}`)
                .then(() => setUpdateFlag(!updateFlag))
                .catch(err => console.log(err))
        } else {
            // add
            axios.put(`http://localhost:8080/api/v1/employees/${id}/projects/${pid}`)
                .then(() => setUpdateFlag(!updateFlag))
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            {projects.map(pro => (
                <div key={pro.id} style={{ display: 'flex' }}>
                    <Project pId={pro.id} pName={pro.name} />
                    <button onClick={() => toggleStatus(pro.id)}>
                        {checkIfAdded(pro.id) ? 'Remove' : 'Add'}
                    </button>
                </div>
            ))}

            <br />
            <form ref={formRef} onSubmit={applyFilter}>

                Name: <input name="name" type="text" /> <br />
                Location: <input name="location" type="text" />
                <button > Filter</button>

            </form>
            <div className="Spec" >
                <button> Back</button>
            </div>
        </div>
    )
}

export default ManageProjects;