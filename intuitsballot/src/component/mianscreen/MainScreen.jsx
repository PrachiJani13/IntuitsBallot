import React, { useEffect, useState } from 'react';
import Ballot from './ballot/Ballot';
import Votes from './vote/Votes';
import checkHttpStatus from '../../utils/checkHttpStatus';

const MainScreen = () => {
    const [ dropDownValue, setDropdownValue ] = useState('')
    const [ voterId, setVoterId ] = useState('');
    const [ electionResponse, setElectionResponse ] = useState([])
    const [ isValidUser, setIsValidUser ] = useState(false);
    const [ userResponse, setUserResponse ] = useState([])
    const [ currentBallot, setCurrentBallot ] = useState([]);
    const [ checkBoxState, setCheckBoxState ] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3060/elections')
            .then(checkHttpStatus)
            .then(response => response.json())
            .then(setElectionResponse);
    }, []);

    useEffect(() => {
        fetch('http://localhost:3060/users')
            .then(checkHttpStatus)
            .then(response => response.json())
            .then(setUserResponse);
    }, [])


    const handleChange = (event) => {
        setDropdownValue(event.target.value);
        console.log(dropDownValue)
    }

    const handleVoterIdChange = (event) => {
        setVoterId(event.target.value);
        console.log(voterId);
    }

    const showAlert = (message) => {
        alert(message);
    }

    const handleSubmit = (event) => {

        const currentElection = electionResponse.filter(election => election.electionname === dropDownValue);
        if(!currentElection.length > 0){
            return showAlert(`Please Select a valid ballot`);
        }
        const currentUser = userResponse.filter(user => user.id === parseInt(voterId));
        if(!currentUser.length > 0){
            return showAlert(`User: ${voterId}, is not found`);
        }
        const isValid = !currentUser[0].votedElectionIDs.includes(currentElection[0].id);
        if(!isValid){
            return showAlert(`User with Voter ID: ${voterId}, has already voted in ${currentElection[0].electionname}`)
        }
        //create questions state
        setCheckBoxState(new Array(currentElection[0].questions.length).fill(false))
        setCurrentBallot(currentElection[0]);
        setIsValidUser(isValid);
        console.log(`the checked box states: ${checkBoxState}`)
        console.log(checkBoxState);
        event.preventDefault();
    };

    const handleCheckBoxChange = (position) => {
        const updatedCheckedState = checkBoxState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckBoxState(updatedCheckedState);

    }

    const handleCastVote = () => {
        alert('Your vote has been casted')
    }

    return (
        <div>
            <h1>Main Screen</h1>
            <Ballot
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                dropDownValue={dropDownValue}
                elections={electionResponse}
                handleVoterIdChange={handleVoterIdChange}
                voterId={voterId}
            />
            {dropDownValue && isValidUser &&
            <Votes
                handleCheckBoxChange={handleCheckBoxChange}
                handleCastVote={handleCastVote}
                currentBallot={currentBallot}
                checkBoxState={checkBoxState}
            />
            }

        </div>

    );
}

export default MainScreen;