import Menu from './Components/menu/Menu';
import Skills from './Components/skills/Skills';
import ContactMe from './Components/contactMe/ContactMe';
import Home from './Components/home/Home';
import About from './Components/about/About';
import ProfileTable from './Components/profileTable/ProfileTable';
import AboutImg from './assets/Me.jpeg';
import ProjectsInterests from './Components/ProjsandIntrest/ProjectsInterests';
import Services from './Components/services/Services';
import Ref from './Components/references/Ref';
import './App.css';

function App() {
  
  return (
    <> 
      <Menu />
      <main className='main'>
        <div className='content-container container'>
          <ProfileTable
            className = 'whoiam'
            name="Malik Eddy"
            image={AboutImg}
            birthday="February 7, 1995"
            birthplace="Oakland, CA, USA"
            occupation="Software Developer"
            website="http://www.malleddy.com"
          />
     
      
      <section className='home_section' id = 'home'><Home/></section>
      <section className='aboutMe_section' id = 'about'><About/></section>
      <section className='skills_section' id = 'skills'><Skills/></section>
      <section className='services_section' id = 'services'><Services/></section>
      <section className='project_section' id = 'projects'><ProjectsInterests/></section>
      <section className='contact_section' id = 'contact'><ContactMe/></section>
      <section className='refs_section' id = 'refs'><Ref/></section>

        </div>
        </main>
    </>
  );
};

export default App;