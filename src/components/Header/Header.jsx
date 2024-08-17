import './Header.scss'
import headerLogo from '../../assets/logo/BrainFlix-logo.svg'
import headerImg from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'
import searchIcon from '../../assets/icons/search.svg'

const Header = () => {
    return (
        <>
            <div className="header__container">
                <img className='header__logo' src={headerLogo} alt="The company logo of BrainFlix" />

                <div className="header__inner-container">
                    <div className="header__input-wrapper">
                        <input className='header__search-input demi' type="text" name="" id="" placeholder='Search' />
                        <img className="header__search-icon" src={searchIcon} alt="search icon" />
                    </div>
                    <img className='header__img' src={headerImg}></img>
                </div>
                
                <button type='submit' className='header__button bold'> <img src={uploadIcon} alt="upload icon" /> Upload</button>
                <img className='header__img hide-mobile' src={headerImg}></img>
            </div>
        </>
    )
}

export default Header