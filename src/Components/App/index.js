import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';


function App() {
  return (
    <div className="App">
    <Header title='tour de France'  />
    <Main article='maillot jaune' sujet='jallabert est tombé' />
    <Footer />
   
    </div>
  );
}

export default App;
