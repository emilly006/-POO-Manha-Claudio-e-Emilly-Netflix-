import './Carrossel.css'
import flash from '../img/FLASHPOSTER.jpeg'
import arrow from '../img/Arrow.jpg'
import gossio from '../img/gossio.jpeg'
import greys from '../img/greys.jpg'
import pll from '../img/pll.jpeg'
import th from '../img/th.jpg'
//
import acao from '../img/acao.jpg'
import kitty from '../img/kitty.jpeg'
import louca from '../img/louca.jpg'
import solteiros from '../img/SID.webp'
import luta from '../img/fe.jpg'
import auto from '../img/auto.jpg'
//
import ad from '../img/ad.jpg'
import brook from '../img/brook.jpg'
import resident from '../img/resident.webp'
import rebel from '../img/rebel.jpeg'
import prison from '../img/prison.jpeg'
//
import xo from '../img/xo.jpeg'
import round from '../img/round.jpg'
import saka from '../img/saka.jpeg'
import terra from '../img/terra.webp'
import perfilFalso from '../img/perfilFalso.jpeg'

function Carrossel() {
  return (

    <div className='tela2'>
      <div className='tudo2'>
        <div className='carrossel'>
          <a className='texto'> Séries estrangeiras dubladas em português</a>
          <div className='serie'>
            <img className='fotos' src={flash} />
            <img className='fotos' src={arrow} />
            <img className='fotos' src={gossio} />
            <img className='fotos' src={greys} />
            <img className='fotos' src={pll} />
            <img className='fotos' src={th} />

          </div>
        </div>

        <div className='carrossel'>
          <div className='texto2'>
            <a className='texto'> Novidades na Netflix</a>
            <a className='barrinhas'>-------------</a>
          </div>
          <div className='serie'>
            <img className='fotos' src={acao} />
            <img className='fotos' src={kitty} />
            <img className='fotos' src={louca} />
            <img className='fotos' src={solteiros} />
            <img className='fotos' src={luta} />
            <img className='fotos' src={auto} />


          </div>
        </div>
      <div className='carrossel'>
        <div className='texto3'>
          <a className='texto'> Descubra suas próximas histórias</a>
          <a className='barrinhas'>-------------</a>
        </div>
        <div className='serie'>
          <img className='fotos' src={ad} />
          <img className='fotos' src={brook} />
          <img className='fotos' src={resident} />
          <img className='fotos' src={rebel} />
          <img className='fotos' src={prison} />
      </div>  

        </div>
        <div className='carrossel'>
          <div className='texto2'>
            <a className='texto'> Brasil: top 10 em séries hoje</a>
            <a className='barrinhas'>--</a>
          </div>
          <div className='serie2'>
            <span className='numero'> 1</span>
            <img className='fotos2' src={xo} />
            <span className='numero'> 2</span>
            <img className='fotos2' src={round} />
            <span className='numero'> 3</span>
            <img className='fotos2' src={saka} />
            <span className='numero'> 4</span>
            <img className='fotos2' src={terra} />
            <span className='numero'> 5</span>
            <img className='fotos2' src={perfilFalso} />
            <span className='numero'> 6</span>

          </div>
          </div>
        </div>
      </div>
  )

}

export default Carrossel;