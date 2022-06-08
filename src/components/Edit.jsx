import { personInputField } from "../data/data";
import { useState } from "react";
import sweetAlert from 'sweetalert2';


const Edit = ({ setIsEditing, setEmployees, selectedEmploy, setEmploySearch }) => {

  const [editedEmploy, setEditedEmploy] = useState(selectedEmploy);


  // collect all input data from input field's... & edit/update it...
  const handleChange = e =>
    setEditedEmploy(pre => ({ ...pre, [e.target.id]: e.target.value.replace(/\s\s+/g, ' ') }));


  const handleSubmit = e => {
    e.preventDefault(); // prevent browser default GET behavior 

    // null || empty input value checking... 
    if (!editedEmploy.firstName
      || !editedEmploy.lastName
      || !editedEmploy.email
      || !editedEmploy.salary
      || !editedEmploy.date
    ) {
      return sweetAlert.fire({ // 🟥 for show error alert message
        icon: 'error',
        title: 'Error',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    // employ info edit/update 
    setEmployees(prev => prev.map(person =>
      person.id === editedEmploy.id
        ? { ...editedEmploy }
        : person
    ));

    setIsEditing(false); // close this JSX || <Component />

    setEmploySearch(''); // clear searching value...

    // 🟩 for show success alert message
    sweetAlert.fire({
      icon: 'success',
      title: 'Updated',
      text: `${editedEmploy.firstName} ${editedEmploy.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 2500
    });
  }


  return (
    <section className="small-container">

      <form onSubmit={handleSubmit}>
        <h1>Edit Employ</h1>

        {
          personInputField.map(field => (
            <div key={field.id}>
              <label htmlFor={field.id}>
                {
                  field.label === 'Salary'
                    ? `${field.label} ($)`
                    : field.label
                }
              </label>

              <input {...field} value={editedEmploy[field.id]} onChange={handleChange} />

            </div>
          ))
        }

        <div style={{ marginTop: '25px' }}>

          <input type='submit' value='Edit Employ' />
          <input type='button' value='Cancel'
            className="muted-button"
            style={{ marginLeft: '12px' }}
            onClick={() => setIsEditing(false)}
          />

        </div>
      </form>

    </section>
  )
}

export default Edit