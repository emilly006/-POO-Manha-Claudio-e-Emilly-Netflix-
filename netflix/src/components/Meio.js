import './Meio.css'
import { RiNetflixFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TbNumber16Small } from "react-icons/tb";



function Meio() {
    return (
        <div className='meio'>
            <div className='logoN'>
                <RiNetflixFill color='red' />
                <a className='link1'> S É R I E </a>
            </div>
            <div className='textG'>
                <a> T H E R E S I D E N T </a>
            </div>
            <div className='tudo'>
                <div className='botaos'>
                    <div className='butao'>
                        <FaPlay size={20} />
                        <a className='textbuton'> Assistir </a>
                    </div>
                    <div className='buton2'>
                        <IoIosInformationCircleOutline size={30} color='#ffff' />
                        <a className='textbuton2'> Mais informações</a>
                    </div>
                </div>s
                <div className='ponta'>
                    <div className='som'>
                    <RxSpeakerLoud size={30} color=' #6d6d6d'/>
                    </div>
                    <a className='barra'> |</a>
                    <div className='ponta1'>
                        <TbNumber16Small size={40} color='black' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meio;