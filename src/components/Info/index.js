import './style.css'


function Info ({info, children}) {

    return (

        <div className="info">
        <h1>Halloween Kills: <br/>O Terror Continua</h1>
        <ul>
            <li>9.8 pontos</li>
            <li>2021</li>
            <li>Terror</li>
        </ul>
        <p>{info}</p>
        {children}
        
        </div>
      
    )
}

export default Info