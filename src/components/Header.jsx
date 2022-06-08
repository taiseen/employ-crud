const Header = ({ setIsAdding }) => {

  return (
    <header>
      <h1>Employ Management System</h1>

      <button
        className="round-button"
        onClick={() => setIsAdding(true)}
      >
        Add Employ
      </button>

    </header>
  )
}

export default Header;