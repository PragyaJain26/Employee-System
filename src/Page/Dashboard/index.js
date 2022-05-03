import React, { useState } from 'react'
import Swal from 'sweetalert2'

import { employeesData } from '../../data'

import Header from './Header'
import Add from './Add'
import List from './List'
import Edit from './Edit'


function Dashboard() {

    const handleEdit = (id) => {
        //todo
    }

    const handleDelete = (id) => {
        //todo
    }

    const [employees, setEmployees] = useState(employeesData)
    const [isAdding, setisAdding] = useState(false)
    const [isEditing, setisEditing] = useState(false)
    const [selectedEmployee, setselectedEmployee] = useState(null)


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