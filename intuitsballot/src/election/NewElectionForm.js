import { useState } from 'react';
import './Election.css';

function splitQuestions(questions) {
    let uid = 0;
    let questionsArr = questions.toString().split(',');
    let questionsObj = questionsArr.map(function(q) {
        return {
            id: uid++,
            question: q
        }
    })

    return questionsObj;
}


console.log(splitQuestions("hello,world,how,are,yu"));

export default function  NewElectionForm({ onSave }) {
    // const emptyElectionForm = {
    //     electionname: '',
    //     questions: [
    //     {
    //       id:0,
    //        question: '',
    //        result: {
    //            yes: 0,
    //            no: 0,
    //        }
    //     }],
    // };

    const emptyElectionName = '';

    const emptyElectionQuestions = {
          id:0,
          question: '',
          result: {
            yes: 0,
            no: 0,
          }
    };


    let [newElectionName, setNewElectionName] = useState(emptyElectionName);
    let [newElectionQuestions, setNewElectionQuestions] = useState(emptyElectionQuestions);

    function handleNameChange(e) {
        setNewElectionName(newElectionName);
    }
    
    function handleQuestionsChange(e) {
        setNewElectionQuestions({
        ...newElectionQuestions,
        [e.target.name]: e.target.value,
        });
    }

    function save(newElectionForm) {
        onSave(newElectionForm);
        setNewElectionName(emptyElectionName);
        setNewElectionQuestions(emptyElectionQuestions);
    }
    
    console.log(newElectionName);
    console.log(newElectionQuestions);

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
            <textarea type="text" name="questions"  value={newElectionQuestions}  onChange={handleQuestionsChange}/>
            <p>
            <button type="button" onClick={() => save(emptyElectionName, emptyElectionQuestions)}>Save</button>
            </p>

            </form>
        </div>
    )}
