import React, { useState } from "react";

const EmployeeForm = props => {

    const [formInfo, setFormInfo] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = event => {
        setFormInfo({
            ...formInfo, [event.target.name]: event.target.value
        });
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        props.addEmployee({
            ...formInfo,
            id: Date.now()
        });

        setFormInfo({
            name: "", 
            email: "",
            role: ""
        })
    };

    return (
        <form onSubmit={ formSubmitHandler }>
            <label htmlFor="Name"> Name: </label>
            <input
                type="text"
                name="name"
                value={formInfo.name}
                onChange={changeHandler}
                placeholder="Enter Your Name!"
            />

            <label htmlFor="userEmail"> Email: </label>
            <input
                type="email"
                name="email"
                value={formInfo.email}
                onChange={changeHandler}
                placeholder="Enter Your Email!"
            />

            <label htmlFor="role"> Role: </label>
            <textarea
                type="text"
                name="role"
                value={formInfo.role}
                onChange={changeHandler}
                placeholder="Enter Your Role!"
            />
            <button type="submit"> Submit </button>
        </form>
    )
}

export default EmployeeForm;