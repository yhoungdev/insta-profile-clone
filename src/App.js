//import logo from './logo.svg';
import topNav from './components/top';
import './App.css';
import Top from './components/top';
import './style/bootstrap.min.css';
import Edit from './components/edit';

function App() {
  return (
    <div className="App">
      
       <div className='container'>
          <Top/>
          <Edit/>
         
       </div>
    </div>
  );
}

export default App;
