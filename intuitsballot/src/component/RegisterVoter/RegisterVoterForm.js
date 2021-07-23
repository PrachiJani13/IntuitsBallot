import { useState } from 'react';

export default function RegisterVoterForm( { onComplete }) {
    const emptyRegisterVoterForm = {
        firstname: '',
        lastname: '',
        address: '',
        city:'',
        birthdate: '',
        email: '',
        phone: ''
    }
    const [voterForm, setVoterForm] = useState(emptyRegisterVoterForm); 

    function handleChange(e) {
        setVoterForm({
            ...voterForm,
            [e.target.name]: e.target.value,
        });
    }

    function complete(voterForm) {
        onComplete(voterForm);
        setVoterForm(emptyRegisterVoterForm);
    }

    return (
        <div>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstname"
                    value={voterForm.firstname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text"
                    name="lastname"
                    value={voterForm.lastname}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Address:</label>
                <input type="text"
                    name="address"
                    value={voterForm.address}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>City:</label>
                <input 
                    type="text"
                    name="city"
                    value={voterForm.city}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Birth Date:</label>
                <input 
                    type="text"
                    name="birthdate"
                    value={voterForm.birthdate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="text"
                    name="email"
                    value={voterForm.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Phone:</label>
                <input 
                    type="text"
                    name="phone"
                    value={voterForm.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={() => complete(voterForm)}>Complete Registration</button>
            </div>
        </div>
    );
}
