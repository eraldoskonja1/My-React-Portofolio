import logo from './logo.svg';
import './App.css';
import { NavBar } from './componentes/NavBar';
import { Banner } from './componentes/Banner';
import { Skills } from './componentes/Skills';
import { Projects } from './componentes/Projects';
import { ProjectCard } from './componentes/ProjectCard';
import { Contact } from './componentes/Contact';
import { Footer } from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ProjectCard />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
