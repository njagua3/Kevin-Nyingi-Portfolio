import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import mediumLight from '../../assets/medium-light.png';
import mediumDark from '../../assets/medium-dark.png';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light'? githubLight : githubDark;
    const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark;
    const mediumIcon = theme === 'light'? mediumDark : mediumLight;
    
    return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of kevin" 
            />
            <img 
            className={styles.colorMode}
            src={themeIcon} 
            alt="toggle color mode" 
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>Kevin
                <br />
                Nyingi
            </h1>
            <h2>Full-stack Web Developer</h2>
            <span>
                <a href="https://x.com/Nj4gua" target='_blank'>
                <img src={twitterIcon} alt="X icon" />
                </a>
                <a href="https://github.com/njagua3" target='_blank'>
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://linkedin.com/in/kevin-nyingi" target='_blank'>
                <img src={linkedinIcon} alt="twitter icon" />
                </a>
                <a href="https://medium.com/@njaguanyingikevin" target='_blank'>
                <img src={mediumIcon} alt="medium icon" />
                </a>
            </span>
            <p className={styles.description}>
                I craft visually compelling web experiences that empower businesses to engage users and achieve their goals.
            </p>
           <a href={CV} download>
            <button className='hover'>
                Resume
            </button>
            </a> 
        </div>
    </section>
  )
}

export default Hero