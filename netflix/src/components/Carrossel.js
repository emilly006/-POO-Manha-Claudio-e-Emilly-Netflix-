import './Carrossel.css'
import flash from '../img/Flahposter.webp'
import arrow from '../img/Arrow.jpg'
import gossio from '../img/gossio.jpg'
import greys from '../img/greys.jpg'
import pll from '../img/pll.jpg'
import th from '../img/th.jpg'
import acao from '../img/acao.jpg'
import kitty from '../img/kitty.jpg'
import louca from '../img/louca.jpg'
import solteiros from '../img/SID.jpg'
import luta from '../img/fe.jpg'
import auto from '../img/auto.jpg'

function Carrossel(){
    return(
    
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
            
          </div>
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
            
          </div>
      </div>
    </div>
    )

}

export default Carrossel;