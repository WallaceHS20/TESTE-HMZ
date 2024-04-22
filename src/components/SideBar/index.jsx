import './sideBar.css'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";

export default function SideBar() {

    return (
        <div className="sidebar">

            <div className='top-title'>
                <span>suplychain</span>
                
                <button>
                    <RxHamburgerMenu  size={24} />
                </button>
            </div>

            <Link to={''}>
                <span>Usuários</span>
                <MdArrowForwardIos size={24} />
            </Link>
        </div>
    )
}