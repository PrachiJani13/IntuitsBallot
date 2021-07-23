function ToolHeader({ label, slogan}) {
    return (
      <div>
      <header>
        <h1>{label}:{slogan}</h1>
      </header>
      <img alt="mascot" src="./Ballot.png" />
      </div>
    );
  }
  export default ToolHeader;