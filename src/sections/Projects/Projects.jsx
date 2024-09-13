
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard 
           src={viberr} 
           link="https://njagua-bot-battlr.vercel.app/"
           h3= "Battlr Bot"
           p="Battlr Bot App"
          /> 
          <ProjectCard 
           src={freshBurger}  
           link="https://github.com/njagua3/Njagua-Bot-Battlr.git"
           h3= "Battlr Bot"
           p="Movie Streaming App"
          /> 
          <ProjectCard 
           src={hipsster}  
           link="https://github.com/njagua3/Njagua-Bot-Battlr.git"
           h3= "Battlr Bot"
           p="Movie Streaming App"
          /> 
          <ProjectCard 
           src={fitLift}  
           link="https://github.com/njagua3/Njagua-Bot-Battlr.git"
           h3= "Battlr Bot"
           p="Fitness App"
          /> 
        </div>
    </section>
  
)
}

export default Projects