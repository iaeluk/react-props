import './style.css'

function Footer ({made, children}) {

    return (
        <>
        <p className="footer">{made} {children}</p>
        </>
    )
}

export default Footer