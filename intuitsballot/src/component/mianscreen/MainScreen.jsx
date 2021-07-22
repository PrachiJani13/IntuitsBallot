import React,{useState} from 'react';

const MainScreen = () =>{
    const [selectedValue, setSelectedValue] = useState('')
    const [ formState, setFormState ] = useState({ isGoing:false,  numberOfGuests:0});



   const handleChange=(event)=> {
        setSelectedValue(event.target.value);
    }

    const handleSubmit=(event)=> {
        alert('Your favorite flavor is: ' + selectedValue);
        event.preventDefault();
    }

    const handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const handleCastVote = () =>{
       alert('Your vote has been casted')
    }

    return (
        <div>
            <h1>Main Screen</h1>
            <div>
                <h2>Select a ballot</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Pick your favorite flavor:
                        <select value={selectedValue} onChange={handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <label>
                        Enter User ID:
                        <input type="text"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <h2>Cast your votes</h2>
                <form onSubmit={handleCastVote}>
                    <label>
                        Is going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={formState.isGoing}
                            onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={formState.numberOfGuests}
                            onChange={handleInputChange} />
                    </label>
                    <input type="submit" value="Cast Vote2"/>
                </form>
            </div>
            {/*<button onClick={handleCastVote}>Cast Vote</button>*/}
        </div>

    );
}

export default MainScreen;