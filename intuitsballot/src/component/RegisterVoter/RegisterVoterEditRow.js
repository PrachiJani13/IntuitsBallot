import { useState } from 'react';

export default function RegisterVoterEditRow(props) {
  let [voterForm, setVoterForm] = useState(props.user);

  function handleChange(e) {
    let editVoterForm = voterForm;
    let users = voterForm.user;
    editVoterForm.user = {...users, [e.target.name]:e.target.value}
    setVoterForm(
      editVoterForm
    );
  }

  function save(voterForm) {
    props.onSave(voterForm);
  }

  function cancel(){
    props.onCancel();
  }
  console.log(voterForm);

  return (
    <tr>
      <td>
      <input
          type="text"
          name="firstname"
          defaultValue={voterForm.user.firstname}
          onChange={handleChange}
      />
      </td>
      <td>
        <input
          type="text"
          name="lastname"
          defaultValue={voterForm.user.lastname}
          onChange={handleChange}
        />
      </td>
      <td>
        <input 
          type="text"
          name="address"
          defaultValue={voterForm.user.address}
          onChange={handleChange}
        />
      </td>
      <td>
        <input 
          type="text"
          name="city"
          defaultValue={voterForm.user.city}
          onChange={handleChange}
        />
      </td>
      <td>
        <input 
          type="text"
          name="birthdate"
          defaultValue={voterForm.user.birthdate}
          onChange={handleChange}
        />
      </td>
      <td>
        <input 
          type="text"
          name="email"
          defaultValue={voterForm.user.email}
          onChange={handleChange}
        />
      </td>
      <td>
        <input 
          type="text"
          name="phone"
          defaultValue={voterForm.user.phone}
          onChange={handleChange}
        />
      </td>
      <td>
        <button type="button" onClick={() => save(voterForm)}>
          Save
        </button>
        <button type="button" onClick={()=> cancel()}>
          Cancel
        </button>
      </td>
    </tr>
  );
}