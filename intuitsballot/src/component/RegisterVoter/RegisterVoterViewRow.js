function RegisterVoterViewRow({ user, onEdit, onDelete }) {
    return (
      <tr>
        {/* <td>{user.user.id}</td> */}
        <td>{user.user.firstname}</td>
        <td>{user.user.lastname}</td>
        <td>{user.user.address}</td>
        <td>{user.user.city}</td>
        <td>{user.user.birthdate}</td>
        <td>{user.user.email}</td>
        <td>{user.user.phone}</td>
        <td>
          <button type="button" onClick={() => onEdit(user.id)}>
            Edit
          </button>
          <button type="button" onClick={() => onDelete(user)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
  
  export default RegisterVoterViewRow;