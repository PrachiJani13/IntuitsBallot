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


console.log(splitQuestions("hello,world,how,are,yu"));

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
        <div  label="New Election"  className='.center'>
            <form> 
                <label  htmlFor="electionname">
                    <p> Election name:</p>
                </label>
                <input type="text" name="electionname"  value={newElectionName}  onChange={handleNameChange} />
            <p>
            <label htmlFor="questions">List of questions here(Please seperate questions with comma): </label>
            </p>
            <textarea type="text" name="electionquestions"  value={newElectionQuestions}  onChange={handleQuestionsChange}/>
            <p>
            <button type="button" onClick={() => {save()} }>Save</button>
            </p>

            </form>
        </div>)    
        }
