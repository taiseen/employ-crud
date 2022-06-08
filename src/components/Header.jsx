const Header = ({ setIsAdding, setEmploySearch }) => {

  return (
    <header>
      <h1>Employ Management System</h1>

      <div className="parent">

        <button
          className="muted-button customBtn"
          onClick={() => setIsAdding(true)}
        >
          Add Employ
        </button>

        <input
          type="text"
          className="searchInput"
          placeholder="Search Employ..."
          onChange={e => setEmploySearch(e.target?.value?.toLowerCase())}
          // get user typing - input value for searching...
        />
      </div>


    </header>
  )
}

export default Header;