import { Route, Routes, Navigate } from "react-router";
import EmployeeDetails from "../../components/EmployeeDetails";
import NewEmployee from "../../components/NewEmployee";
import Employees from "../Employees";
import ManageProjects from "../ManageProjects";



export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="employees" element={<Employees /> } />
            

        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}


