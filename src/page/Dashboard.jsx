import { Add, Edit, Header, List } from '../components';
import { employeeData } from '../data/data';
import { useState } from 'react';
import sweetAlert from 'sweetalert2';


const Dashboard = () => {

    const [employees, setEmployees] = useState(employeeData);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmploy, setSelectedEmploy] = useState({});
    const [employSearch, setEmploySearch] = useState('');


    // Local Function For Event Listener | Event Trigger
    const employEdit = (employObj) => {
        setIsEditing(true); // for open <Edit /> <Component />
        setSelectedEmploy(employObj); // send clicked employ object for editing/updating...
    }


    // employ delete functionality
    const employDelete = async (employObj) => {

        // get confirmation from user for delete or not?
        const { value } = await sweetAlert.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!.",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        });

        if (value) {

            sweetAlert.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `${employObj.firstName} ${employObj.lastName}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 2000,
            });

            // Finally delete/remove that specific employ from employees database
            setEmployees(employees.filter(person => person.id !== employObj.id));
        }
    }


    
    return (
        <div className='container'>
            {
                // Default Display ==> Header + Employ List <Component />
                !isAdding &&
                !isEditing && (
                    <>
                        <Header
                            setIsAdding={setIsAdding} // for open <Add /> <Component />
                            setEmploySearch={setEmploySearch}
                        />

                        <List
                            employSearch={employSearch}
                            employees={employees} // for displaying all employees info
                            employEdit={employEdit} // get employ id for edit | Bind Local Function
                            employDelete={employDelete} // get employ id for delete | Bind Local Function
                        />
                    </>
                )
            }

            {
                // Display Employ ==> Add <Component />
                isAdding &&
                <Add
                    setIsAdding={setIsAdding} // for close this <Component />
                    setEmployees={setEmployees} // for adding new employ
                />
            }

            {
                // Display Employ ==> Edit <Component />
                isEditing &&
                <Edit
                    setIsEditing={setIsEditing} // for close this <Component />
                    setEmployees={setEmployees} // for update total employees database
                    selectedEmploy={selectedEmploy} // for update this specific user object...
                    setEmploySearch={setEmploySearch} // for clearing search value...
                />
            }
        </div>
    )
}

export default Dashboard;