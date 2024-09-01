import './Header.scss'
import { Link } from 'react-router-dom'
import headerLogo from '../../assets/logo/BrainFlix-logo.svg'
import headerImg from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'
import searchIcon from '../../assets/icons/search.svg'

const Header = () => {
    return (
        <>
            <div className="header__container">
                <Link to="/">
                    <img className='header__logo' src={headerLogo} alt="The company logo of BrainFlix" />
                </Link>

                <div className="header__inner-container">
                    <div className="header__input-wrapper">
                        <input className='header__search-input demi' type="text" name="" id="" placeholder='Search' />
                        <img className="header__search-icon" src={searchIcon} alt="search icon" />
                    </div>
                    <img className='header__img' src={headerImg}></img>
                </div>

                <div className="header__button-wrapper">
                    <Link to="/upload">
                    <button type='submit' className='header__button bold'> <img className="header__upload-icon" src={uploadIcon} alt="upload icon" /> Upload</button>
                    </Link>
                </div>

                <img className='header__img hide-mobile' src={headerImg}></img>
            </div>
        </>
    )
}

export default Header