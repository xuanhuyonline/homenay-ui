//import logo from '../images/Logo.svg';
//import logo from '../../images/Logo.svg';
import Menu from './Menu';
import TopHeader from './TopHeader';

// cd .. = ../  lui lại 2 bước

const Header = () => {
    return <>
        <div className='container'>
            <TopHeader/>
            <Menu/>
        </div>
    </>
}

export default Header;