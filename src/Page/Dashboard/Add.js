import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2'

function Add(props) {

    const { setisAdding, employees, setEmployees } = props


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [date, setDate] = useState('')

    const textInput = useRef(null)

    useEffect(() => {
        textInput.current.focus()
    }, [])

    const handleAdd = (e) => {
        e.preventDefault()

        //validation--> checking all entries are filled or not
        if (!firstName || !lastName || !salary || !email || !date) {
            return Swal.fire({
                icon: "error",
                title: "Error",
                text: "All fields must be filled up",
                showconfirmButton: true
            })

        }

        //CREATING NEW EMPLOYEE

        const id = employees.length + 1

        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee)
        setEmployees(employees)
        setisAdding(false)
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${newEmployee.firstName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 2000
        });


    }
    return (
        <div className='small-container'>
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>

                {/* first name */}

                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' ref={textInput} value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />

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

                <button type='submit'>Add</button>
                <button style={{ marginLeft: "12px" }} type='button' onClick={() => { setisAdding(false) }} className='muted-button'>Cancel</button>

            </form>

        </div>
    )
}

export default Add