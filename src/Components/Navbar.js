const Navbar=()=> {
    const mystyle = {
     zIndex:"1",
     position:"Fixed",
     width:"100vw",
      top: 0
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-secondary " style={mystyle}>
  <div className="container-fluid">
    <a className="navbar-brand " href="/">News Monk</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link " href="/About">About</a></li>
           <li><a className="nav-link" href="/Business">Business</a></li>
           <li><a className="nav-link" href="/Entertainment">Entertainment</a></li>
           <li><a className="nav-link" href="/General">General</a></li>
           <li><a className="nav-link" href="/Health">Health</a></li>
           <li><a className="nav-link" href="/Science">Science</a></li>
           <li><a className="nav-link" href="/Sports">Sports</a></li>
           <li><a className="nav-link" href="/Technology">Technology</a></li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
}
export default Navbar