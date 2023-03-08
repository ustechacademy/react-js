import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Counter from './components/Counter';
import Form from './components/Form';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
       {/**  
        * <Navbar />
          <Meme />  
          <Counter />
          <Form />
        */}
       <Signup />
    </div>
  );
}

export default App;
