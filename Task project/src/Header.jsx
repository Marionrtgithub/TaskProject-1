import Logo from'../assets/Logo.jpg';
function Header (){
    return(
        <header>
            <img src={Logo} alt="" />
            <a className='home' href="/">Home</a>
        </header>
    )
}
export default Header ;
