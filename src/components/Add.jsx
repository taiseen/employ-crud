import { useEffect, useRef, useState } from "react"
import { personInputField } from "../data/data";
import { v4 as uuidv4 } from 'uuid';
import sweetAlert from 'sweetalert2';


const Add = ({ setIsAdding, setEmployees }) => {

  const firstNameRef = useRef();

  const [personInfo, setPersonInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: '',
  });


  // collect all input data from input field's...
  const handleChange = e =>
    setPersonInfo(pre => ({ ...pre, [e.target.id]: e.target.value.trim() }));


  // only handle 'Add Employ' submit functionality
  const handleSubmit = e => {
    e.preventDefault(); // prevent browser default GET behavior 

    // null || empty input value checking...
    if (!personInfo.firstName
      || !personInfo.lastName
      || !personInfo.email
      || !personInfo.salary
      || !personInfo.date
    ) {
      return sweetAlert.fire({ // 🟥 for show error alert message
        icon: 'error',
        title: 'Error',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    // adding new employ in employees database
    setEmployees(pre => ([...pre, { ...personInfo, id: uuidv4() }]));

    // hide this JSX form UI
    setIsAdding(false);

    // 🟩 for show success alert message
    sweetAlert.fire({
      icon: 'success',
      title: 'Added',
      text: `${personInfo.firstName} ${personInfo.lastName}'s data has been added.`,
      showConfirmButton: false,
      timer: 2500
    });
  }


  // after rendering JSX, focus on 1st input field 
  useEffect(() => firstNameRef.current.focus(), []);


  return (
    <section className="small-container">

      <form onSubmit={handleSubmit}>
        <h1>Add Employ</h1>

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

              {
                field.label === 'First Name'
                  ? <input {...field} onChange={handleChange} ref={firstNameRef} />
                  : <input {...field} onChange={handleChange} />
              }
            </div>
          ))
        }

        <div style={{ marginTop: '25px' }}>

          <input type='submit' value='Add Employ' />
          <input type='button' value='Cancel'
            className="muted-button"
            style={{ marginLeft: '12px' }}
            onClick={() => setIsAdding(false)}
          />

        </div>
      </form>

    </section>
  )
}

export default Add;