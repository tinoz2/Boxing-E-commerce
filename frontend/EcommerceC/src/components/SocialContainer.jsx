import iconEmail from '../img/mail.svg'
import iconGithub from '../img/github.svg'
import iconLinkedin from '../img/Linkedin.svg'
import Social from './Social'

const SocialContainer = () => {

    return (
        <div className='container-a'>
            <Social clase='button' icon={iconLinkedin} iconAlt='link linkedin'
            to="https://www.linkedin.com/in/santinoramosconti"/>
            <Social clase='button button22' icon={iconGithub} iconAlt='link github' to="https://github.com/tinoz2" />
            <Social clase='button button3' icon={iconEmail} iconAlt='link email'
            to="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=NZVHFspblMqLknTZNxCDwprHrFdqpnlWDVphDTrjbdlpnZwBJslbpRSQBLDfNTpCHbSFlq"/>
        </div>
    )
}

export default SocialContainer