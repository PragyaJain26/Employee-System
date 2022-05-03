import React, { useState } from 'react'
import Swal from 'sweetalert2'

import { employeesData } from '../../data'

import Header from './Header'
import Add from './Add'
import List from './List'
import Edit from './Edit'


function Dashboard() {

    const [employees, setEmployees] = useState(employeesData)
    const [isAdding, setisAdding] = useState(false)
    const [selectedEmployee, setselectedEmployee] = useState(null)
    const [isEditing, setisEditing] = useState(false)

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id)
        setselectedEmployee(employee)
        setisEditing(true)
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter((employee) => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 2000,
                });
                const newList = employees.filter((employee) => employee.id !== id)
                setEmployees(newList);
            }
        });

    }


    return (
        <div className="container">

            {/* // initial rendering */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setisAdding={setisAdding}
                    />
                    <List
                        employees={employees}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                </>
            )}

            {/* showing add form */}
            {isAdding && (
                <>
                    {/* ADD COMPONENT  */}
                    <Add
                        setisAdding={setisAdding}
                        employees={employees}
                        setEmployees={setEmployees}
                    />
                </>
            )}

            {/* Showing edit form */}
            {isEditing && (
                <>
                    {/* edit component */}
                    <Edit
                        setisEditing={setisEditing}
                        selectedEmployee={selectedEmployee}
                        employees={employees}
                        setEmployees={setEmployees}
                    />
                </>
            )}


        </div>
    )
}

export default Dashboard