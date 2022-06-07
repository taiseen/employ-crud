
const Header = ({ setIsAdding }) => {

  return (
    <div>
      <h1>Employee Management System</h1>

      <button onClick={() => setIsAdding(true)}>Add Employee</button>

    </div>
  )
}

export default Header