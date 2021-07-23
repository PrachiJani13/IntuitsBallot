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
            <hr className="solid" />
            <div>
                <h2>Cast your votes</h2>
                <h3>Ballot: {currentBallot.electionname}</h3>
                <form onSubmit={handleCastVote}>
                    {
                        currentBallot.questions.map(({ question, id }, index) => (
                            <div key={index}>
                                <input
                                    className="left-section ms-checkbox"
                                    type="checkbox"
                                    key={`checkbox-${index}`}
                                    id={id}
                                    name={question}
                                    value={question}
                                    checked={checkBoxState[index]}
                                    onChange={() => handleCheckBoxChange(index)}
                                />
                                <label className="checkbox-label">{question}</label>
                            </div>
                        ))
                    }
                    <input type="submit" value="Cast Vote" className='ms-button'/>
                </form>
            </div>
        </div>
    )
}

export default Votes;