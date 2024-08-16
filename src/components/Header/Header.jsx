import './Header.scss'
import headerLogo from '../../assets/logo/BrainFlix-logo.svg'

const Header = () => {
    return (
        <>
            <div className="header__container">
                <img className='header__logo' src={headerLogo} alt="The company logo of BrainFlix" />
                <div className="header__inner-container">
                    <input className='header__search-input' type="text" name="" id="" placeholder='Search'/>
                    <img className='header__img' src='../src/assets/images/Mohan-muruge.jpg'></img>
                </div>
                <button type='submit' className='header__button'>Upload</button>
            </div>
        </>
    )
}

export default Header