import './Meio.css'
import { RiNetflixFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoIosInformationCircleOutline } from "react-icons/io";


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
            <div className='butao'>
                <FaPlay />
                <a className='textbuton'> Assistir </a>
            </div>
            <div className='buton2'>
                <IoIosInformationCircleOutline />
                <a className='textbuton'> Mais informações</a>
            </div>
                <RxSpeakerLoud/>
                <a> </a>
        </div>
    )
}

export default Meio;