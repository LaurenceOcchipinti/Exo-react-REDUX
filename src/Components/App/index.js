import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';


function App() {
  
  return (
    <div className="App">
    <Header title='Pif et Hercule' sujet="Adrien n'est pas encore né" date={1999} /> 
    <Main article='Diffusion sur Antenne 2' sujet="Adrien est jeune" />
    <Footer techno="Javascript" user="Adrien" date={2021}/>
   
    </div>
  );
}

export default App;


// date={2002} - > accolades pour les number dans react