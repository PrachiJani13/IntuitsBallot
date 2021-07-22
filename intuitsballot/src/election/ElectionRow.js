import QuestionRow from "./QuestionRow";

function electionRow({ election }) {


    let questionRows = election.questions.map((question) =>
        (
        <QuestionRow key={question.id} question={question} />
        )
    );;
  return (
    <tr>
      <td>{election.id}</td>
      <td>{election.electionname}</td>
      {questionRows}
    </tr>
      
  );
}

export default electionRow;