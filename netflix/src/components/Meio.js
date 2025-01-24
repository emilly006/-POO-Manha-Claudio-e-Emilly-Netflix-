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
                <div className='botaos'>
            <div className='butao'>
                <FaPlay />
                <a className='textbuton'> Assistir </a>
            </div>
            <div className='buton2'>
                <IoIosInformationCircleOutline size={25}color='#ffff'/>
                <a className='textbuton2'> Mais informações</a>
            </div>
            <div className='ponta'>
                <RxSpeakerLoud/>
                <a> |</a>
                <div className='ponta1'>
                <a className='a'> A</a>
                <TbNumber16Small size={30} color='black'/>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Meio;