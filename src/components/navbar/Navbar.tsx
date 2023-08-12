import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>BkAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://media.licdn.com/dms/image/C5603AQEyQvSemx4Qqg/profile-displayphoto-shrink_200_200/0/1623645542025?e=1697068800&v=beta&t=kNegQuCUJ4mxlgGUw06leXNZasR4WGtbkcm0wfeRYlA" alt="" />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar