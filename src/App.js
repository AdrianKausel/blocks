
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';


function App() {
  return(
    <div>
      <Header/>
      <div className='container2'>
      <Navigation />
        <Main ></Main>
      </div>
        
    </div>
  )
}

export default App;
