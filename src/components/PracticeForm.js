import * as React from 'react';

const PracticeForm = () => {
    
    const [form, setForm ] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setForm({
            email: '',
            password: '',
        });
        alert(form.email + ' ' + form.password);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' value={form.email} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' value={form.password} onChange={handleChange}></input>
            </div>
            <button type='submit'>
                Submit
            </button>
        </form>
    );
};

export { PracticeForm };