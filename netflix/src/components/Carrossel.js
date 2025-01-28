import './Carrossel.js'
import flash from '../img/Flahposter.webp'
import arrow from '../img/Arrow.jpg'
import gossio from '../img/gossio.jpg'
import greys from '../img/greys.jpg'
import pll from '../img/pll.jpg'

function Carrossel(){
    return(
      <div className='tudo'>
        <div className='carrossel'>
          <div className='texto'>
            <a> Séries estrangeiras dubladas em português</a>
          </div>
          <div className='series'>
            <img className='fotos' src='Flahposter.webp' />
            <img className='fotos' src='Arrow.jpg' />
            <img className='fotos' src='gossio.jpg' />
            <img className='fotos' src='greys.jpg' />
            <img className='fotos' src='pll.jpg' />

          </div>
        </div>
      </div>
    )

}
export default Carrossel