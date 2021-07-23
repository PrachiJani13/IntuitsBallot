import { useState } from 'react';


function QuestionRow({ election, question }) {
  
    let result = question.result.yes >= question.result.no ? ("Yes") : ("No")
    
    let [label, setLabel] = useState("View Result");

    function clickHandler() {
        setLabel(result);
    }
    
  return (
    <tr>
      <td>{election.id}</td>
      <td>{election.electionname}</td>
      <td >{question.id}</td>
      <td>{question.question}</td>
      <td> <button onClick={clickHandler}>{label}</button></td>

    </tr>
    )}

export default QuestionRow;