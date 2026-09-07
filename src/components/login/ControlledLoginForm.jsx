import React, { useState } from "react";

const ControlledLoginForm = (props) => {

    const { setValue } = props;

    const [email, setEmail] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email value is - ", email);
        setValue(email);
    };

    return (
        <section className="login-panel">
            <h2>Controlled Login Form</h2>
            <form className="login-form" onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="you@example.com"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default ControlledLoginForm;