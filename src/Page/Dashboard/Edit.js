import React, { useState } from 'react'

function Edit(props) {
    const { setisEditing, selectedEmployee, setEmployees, employees } = props

    const [firstName, setFirstName] = useState(selectedEmployee)
    const [lastName, setLastName] = useState(selectedEmployee)
    const [email, setEmail] = useState(selectedEmployee)
    const [salary, setSalary] = useState(selectedEmployee)
    const [date, setDate] = useState(selectedEmployee)

    const id = selectedEmployee.id

    const handleUpdate = (e) => {
        e.preventDefault()//jab bhi submit karte toh page reload hota to stop that we add this

    }

    return (
        <div className='small-container'>
            <form onSubmit={handleUpdate} >
                <h1>Edit Employee</h1>

                {/* first name */}

                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />

                {/* last name */}
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />

                {/* email */}
                <label htmlFor="email">Email</label>
                <input type="email" id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />

                {/* Salary */}
                <label htmlFor="salary">Salary</label>
                <input type="number" id='salary' value={salary} onChange={(e) => { setSalary(e.target.value) }} />

                {/* Date */}
                <label htmlFor="date">Date</label>
                <input type="date" id='date' value={date} onChange={(e) => { setDate(e.target.value) }} />

                <button type='submit'>Update</button>
                <button style={{ marginLeft: "12px" }} type='button' onClick={() => { setisEditing(false) }} className='muted-button'>Cancel</button>


            </form>

        </div>
    )
}

export default Edit