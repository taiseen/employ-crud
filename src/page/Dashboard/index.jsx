import { Add, Edit, Header, List } from '../../components';
import { employeeData } from '../../data/data';
import { useState } from 'react';
import sweetAlert from 'sweetalert2'


const Dashboard = () => {

    const [employees, setEmployees] = useState(employeeData);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmploy, setSelectedEmploy] = useState(null);

    const employEdit = (employ) => { }
    const employDelete = (employ) => { }

    return (
        <div className='container'>

            {
                !isAdding &&
                !isEditing && (
                    <>
                        <Header
                            setIsAdding={setIsAdding} // for Open/Close
                        />
                        <List
                            employees={employees} // for displaying all employees info
                            employEdit={employEdit} // get employ id for edit 
                            employDelete={employDelete} // get employ id for delete
                        />
                    </>
                )
            }

            {
                isAdding &&
                <Add
                    setIsAdding={setIsAdding} // for Open/Close
                    employ={employees}
                    setEmployees={setEmployees}
                />
            }

            {
                isEditing &&
                <Edit
                    setIsEditing={setIsEditing} // for Open/Close
                    employ={employees}
                    setEmployees={setEmployees}
                    setSelectedEmploy={setSelectedEmploy}
                />
            }
        </div>
    )
}

export default Dashboard