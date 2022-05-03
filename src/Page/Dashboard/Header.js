import React from 'react'

function Header(props) {
    const { setisAdding } = props //destructuring
    return (
        <>
            <header>
                <h2>Employee Management System</h2>
                <div>
                    <button className='round-button' onClick={() => {
                        setisAdding(true)
                    }}>Add Employee</button>
                </div>
            </header>
        </>
    )
}

export default Header