import React from 'react';

const Votes = (props) => {

    const {
        handleCheckBoxChange,
        handleCastVote,
        currentBallot,
        checkBoxState
    } = props;
    return (
        <div>
            <div>
                <h2>Cast your votes</h2>
                <h3>{currentBallot.electionname}</h3>
                <form onSubmit={handleCastVote}>
                    {
                        currentBallot.questions.map(({ question, id }, index) => (
                            <label>
                                {question}
                                <input
                                    type="checkbox"
                                    key={index}
                                    id={id}
                                    name={question}
                                    value={question}
                                    checked={checkBoxState[index]}
                                    onChange={() => handleCheckBoxChange(index)}/>
                            </label>
                        ))
                    }
                    <input type="submit" value="Cast Vote"/>
                </form>
            </div>
        </div>
    )
}

export default Votes;