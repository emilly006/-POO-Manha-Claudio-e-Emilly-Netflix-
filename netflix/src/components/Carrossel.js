import './Carrossel.css'
import flash from '../img/Flahposter.webp'
import arrow from '../img/Arrow.jpg'
import gossio from '../img/gossio.jpg'
import greys from '../img/greys.jpg'
import pll from '../img/pll.jpg'

function Carrossel(){
    return(
      <div className='tudo'>
        <div className='carrossel'>
            <a className='texto'> Séries estrangeiras dubladas em português</a>
          <div className='series'>
          <img className='logotipo' src={flash} />
            <img className='fotos' src={arrow} />
            <img className='fotos' src={gossio} />
            <img className='fotos' src={greys} />
            <img className='fotos' src={pll} />
          </div>
        </div>
      </div>
    )

}

export default Carrossel;