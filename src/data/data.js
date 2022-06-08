import { v4 as uuidv4 } from 'uuid';


export const employeeData = [
    {
        id: uuidv4(),
        firstName: 'Taiseen',
        lastName: 'Azam',
        email: 'taiseen@gmail.com',
        salary: '45000',
        date: '2020-04-15',
    },
    {
        id: uuidv4(),
        firstName: 'Alamin',
        lastName: 'Khondokar',
        email: 'alamin@gmail.com',
        salary: '38000',
        date: '2020-08-25',
    },
    {
        id: uuidv4(),
        firstName: 'Mehadie',
        lastName: 'Hasan',
        email: 'mehedi@gmail.com',
        salary: '40000',
        date: '2020-09-28',
    },
    {
        id: uuidv4(),
        firstName: 'Iqbal',
        lastName: 'Mahamud',
        email: 'iqbal@gmail.com',
        salary: '36000',
        date: '2020-05-18',
    },
];


export const personInputField = [
    {
        id: 'firstName',
        type: 'text',
        name: 'firstName',
        placeholder: 'First Name',
        label: 'First Name',
    },
    {
        id: 'lastName',
        type: 'text',
        name: 'lastName',
        placeholder: 'Last Name',
        label: 'Last Name',
    },
    {
        id: 'email',
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        label: 'Email',
    },
    {
        id: 'salary',
        type: 'number',
        name: 'salary',
        min: 10000,
        placeholder: 'Salary',
        label: 'Salary',
    },
    {
        id: 'date',
        type: 'date',
        name: 'date',
        placeholder: 'DD/MM/YYYY',
        label: 'Date',
    },
]