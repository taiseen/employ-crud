

const List = ({ employees, employEdit, employDelete }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: null
  });

  
  return (
    <section className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className='text-center'>Action</th>
          </tr>
        </thead>

        <tbody style={{ cursor: 'pointer' }}>
          {
            employees.length > 0
              ? (
                employees.map((person, i) => (
                  <tr key={person?.id}>
                    <td>{i + 1}</td>
                    <td>{person?.firstName}</td>
                    <td>{person?.lastName}</td>
                    <td>{person?.email}</td>
                    <td>{formatter.format(person?.salary)}</td>
                    <td>{person?.date}</td>
                    <td className="text-right">
                      <button
                        className='muted-button'
                        onClick={() => employEdit(person)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="text-left">
                      <button
                        className='muted-button'
                        onClick={() => employDelete(person?.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )
              : (
                <tr>
                  <td colSpan={7}>No Employ</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </section>
  )
}

export default List