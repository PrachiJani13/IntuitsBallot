import React from 'react';

const Ballot = (props) => {
    const {
        handleChange,
        handleSubmit,
        dropDownValue,
        elections,
        handleVoterIdChange,
        voterId,
    } = props;

    return (
        <div>
            <div>
                <h2>Select a ballot</h2>
                {/*<form onSubmit={handleSubmit}>*/}
                <form className="ballot-form">
                    <label>
                        <h3>Please Select Ballot From Dropdown:</h3>
                        <select value={dropDownValue} onChange={e => handleChange(e)}>
                            <option value="" selected disabled>Select A Ballot</option>
                            {
                                elections.map(election => (
                                    <option
                                        key={election.id}
                                        id={election.id}
                                        value={election.electionname}>
                                        {election.electionname}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <label>
                        <h3>Enter Your User ID:</h3>
                        <input className="ms-textbox" type="text" name="voterId" value={voterId} onChange={handleVoterIdChange}/>
                    </label>
                    <button className="ms-button" type="button" onClick={handleSubmit}>Vote</button>
                </form>
            </div>
        </div>
    )
}

export default Ballot;