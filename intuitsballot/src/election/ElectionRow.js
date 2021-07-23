import QuestionRow from "./QuestionRow";

function electionRow({ election }) {
    let questionRows = election.questions.map((question) =>
        (
        <QuestionRow key={question.id} question={question}  election={election}/>
        )
    );;
  return (
    (questionRows)
      
  );
}

export default electionRow;