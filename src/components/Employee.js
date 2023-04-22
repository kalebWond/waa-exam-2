import { Link } from "react-router-dom";


function Employee({ id, name }) {

    return (
        <Link to={"/employees/"+id}>
            <div className="Content" >
                <h1>{id}</h1>
                <div className="Info">
                    <div className="Author">{name}</div>
                </div>
                <br />
            </div>
        </Link>
    )

}

export default Employee;