
const styles = {
    nav: 'text-white bg-blue-600 fixed top-0 left-0 z-50 w-full transition-all duration-200 ease-in-out',
    navBar: 'flex justify-between w-full h-full px-6 lg:px-10',
    listSection: 'items-center hidden flex-grow-default lg:flex',
    logoSection: 'mr-12 lg:justify-center md:flex',
    buttonSection: 'items-center justify-end hidden space-x-4 lg:flex',

}

const Header = () => {
    return (
        <header className={styles.nav}>
            <div className={styles.navBar}>
                <div className={styles.listSection}>
                    <nav className='items-center justify-start hidden lg:flex'>
                        <li className='relative block py-4 list-none'>
                            <a href='#' className='flex items-center justify-between pr-6 text-lg transition-colors duration-200 ease-in-out xl:pr-8 '>
                                <span className='text-sm'>Home</span>
                            </a>
                        </li>
                        <li className='relative block py-4 list-none'>
                            <a href='#' className='flex items-center justify-between pr-6 text-lg transition-colors duration-200 ease-in-out xl:pr-8 '>
                                <span className='text-sm'>About</span>
                            </a>
                        </li>
                        <li className='relative block py-4 list-none'>
                            <a href='#' className='flex items-center justify-between pr-6 text-lg transition-colors duration-200 ease-in-out xl:pr-8 '>
                                <span className='text-sm'>Testimonials</span>
                            </a>
                        </li>
                        <li className='relative block py-4 list-none'>
                            <a href='#' className='flex items-center justify-between pr-6 text-lg transition-colors duration-200 ease-in-out xl:pr-8 '>
                                <span className='text-sm'>Contact</span>
                            </a>
                        </li>
                    </nav>
                </div>
                <div className={styles.logoSection}>
                    <div className="inline-flex items-center h-16 md:justify-between md:h-20">
                        <a className="block w-32 contain" href="#">
                            <img className="h-full" src="https://via.placeholder.com/80" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <a href="#" className="w-auto py-3 mr-5 font-semibold whitespace-pre hover:underline">Log In</a>
                    <button className="bg-white w-auto px-6 py-3 rounded-lg">
                        <div>
                            <span className="text-black text-sm ">Sign Up</span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header