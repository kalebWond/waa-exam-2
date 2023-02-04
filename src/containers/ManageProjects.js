import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Project from "../components/Project";


function ManageProjects() {



    return <div>


        <br />
        <div>

            Name: <input type="text" /> <br />
            Location: <input type="text" />
            <button > Filter</button>

        </div>
        <div className="Spec" >
            <button> Back</button>
        </div>
    </div>
}

export default ManageProjects;