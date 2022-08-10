import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const styles = {
    cornerEllipseWrapper: 'absolute right-[-150px] top-[-150px]',
    midEllipseWrapper: 'absolute left-[-170px] top-[1100px]',
    downloadWrapper: 'absolute w-[200px] h-[90px] right-0 top-[850px] hidden md:block',
    socialBar: 'absolute left-0 top-[652px] px-5 flex flex-col space-y-6 text-white',
}


const Decor = () => {
    return (
        <>
            <div className={styles.cornerEllipseWrapper}>
                <div className='cornerEllipse' />
            </div>
            <div className={styles.downloadWrapper}>
                <a href=""><img src="/download.png" alt='download'></img></a>
            </div>
            <div className={styles.midEllipseWrapper}>
                <div className='middleEllipse' />
            </div>
            <div className={styles.socialBar}>
                <a href='' title='Follow on Facebook'>
                    <FaFacebookF />
                </a>
                <a href='' title='Follow on Instagram'>
                    <FaInstagram />
                </a>
                <a href='' title='Follow on Twitter'>
                    <FaTwitter />
                </a>
                <a href='' title='Follow on Twitter'>
                    <FaLinkedinIn />
                </a>
            </div>
        </>

    )
}

export default Decor