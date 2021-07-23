import { useState } from 'react';
import './Election.css';

function splitQuestions(questions) {
    let uid = 0;
    let questionsArr = questions.toString().split(',');
    let questionsObj = questionsArr.map(function(q) {
        return {
            id: uid++,
            question: q,
            result: {Yes: 0, No: 0}
        }
    })

    return questionsObj;
}


export default function  NewElectionForm({ onSave }) {

    const [newElectionName, setNewElectionName] = useState("");
    const [newElectionQuestions, setNewElectionQuestions] = useState("");

    function handleNameChange(e) {
        setNewElectionName(e.target.value);
    }
    
    function handleQuestionsChange(e) {
       setNewElectionQuestions(e.target.value);
    }

    function save() {
        const electionObj = {
            electionname: newElectionName,
            questions: splitQuestions(newElectionQuestions),
        }
        onSave(electionObj);
        setNewElectionName("");
        setNewElectionQuestions("");
    }

    return (
        <div  label="New Election"  className='main-wrapper'>
            <form className='main-content' > 
                <label  htmlFor="electionname">
                    <h3> Election name:</h3>
                </label>
                <input type="text" name="electionname"  value={newElectionName}  onChange={handleNameChange} />
            <h3>
            <label htmlFor="questions">List of questions here(Please seperate questions with comma): </label>
            </h3>
            <textarea type="text" name="electionquestions" classname="ms-textbox" value={newElectionQuestions}  onChange={handleQuestionsChange}/>
            <h3>
            <button type="button"  className='ms-button' onClick={() => {save()} }>Save</button>
            </h3>

            </form>
        </div>)    
        }
