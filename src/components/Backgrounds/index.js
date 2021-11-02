import './style.css'
import Info from '../Info'


const background = ["", "https://www.themoviedb.org/t/p/original/sSBZmW5zBUtmSyJmIoo5eb0GX8j.jpg", "https://www.themoviedb.org/t/p/original/s8FCnET7R0Y1eImRWLjbRWdZrTD.jpg", "https://www.themoviedb.org/t/p/original/fuuZFPc8x6gQ8mLGoBp9vrmcQMT.jpg", "https://www.themoviedb.org/t/p/original/tDYwYktjFmpj92S2Qn4T3BcRgL.jpg", "https://www.themoviedb.org/t/p/original/md0gAOGqBf8RhTP5oC4o85TIC2l.jpg", "https://www.themoviedb.org/t/p/original/wqdIz5pNFDhxn6133lVKmMa0dLt.jpg", ""]

function random () {
    let posicao = Math.floor(Math.random() * (6 - 1) + 1);

    return posicao
}

function Backgrounds() {
    return (
      <>
      <div className="backgrounds" style={{
        background: 'rgb(0,0,0)',
        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.972) 30%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%), url("${background[random()]}")`,
        backgroundSize: 'cover',
      }}>
      <Info info="Laurie é levada às pressas para o hospital com ferimentos graves, acreditando que ela finalmente matou seu torturador ao longo da vida. Mas quando Michael consegue se livrar da armadilha de Laurie, seu ritual de banho de sangue recomeça.">
      <a target="_blank" href="https://www.youtube.com/watch?v=Ljhe6DHyPVA">Assistir</a>
      <a>+ Minha Lista</a>
      </Info>
      </div>
      </>
    );
  }

export default Backgrounds
