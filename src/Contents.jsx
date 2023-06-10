import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
//import the components we need to display
import EmployeeList from './employeeList.jsx'
import EmployeeReport from "./employeeReport.jsx"
import EmployeeEdit from "./employeeEdit.jsx"

export default function Contents() {
    //handle page paths that don't exist
    const NotFound = () => <h1>Page Not Found</h1> 
    return (
        <Routes>
            <Route path="/employees" element={<EmployeeList/>} />
            <Route path="/edit/:id" element={<EmployeeEdit/>} />
            <Route path="/report" element={<EmployeeReport/>} />
            <Route path="/" element={<Navigate replace to="/employees"/>}/>
            //asterisk is a catch all for paths
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        )
}