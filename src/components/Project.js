import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";


function Project(props) {




    return (
        <div className='Review'>
            {"Id: " + props.pId + " - Project Name: " + props.pName}

            <div>

            </div>
        </div>
    )
}

export default Project;