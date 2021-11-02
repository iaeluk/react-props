import './style.css'

const Header = () => {

    return (
        <>
        <header className="App-header">
          <img className="logo-netflix" src="https://netflix-clone-iaeluk.netlify.app/logo.png" alt=""/>
          <ul>
            <li>Home</li>
            <li>Kids</li>
            <li><img className="logo-user" src="https://netflix-clone-iaeluk.netlify.app/user.png" /></li>
          </ul>
      </header>
        </>
    )
}

export default Header

