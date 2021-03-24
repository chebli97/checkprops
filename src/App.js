
import { findByLabelText } from '@testing-library/dom';
import './App.css';
import Profile from './profile/Profile';

function App() {

  const mystyle = {
    color: "white",
    letterSpacing:" .15em",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    margin: "16px",
    fontFamily: "Arial",
    borderTop:" 1px solid lightcoral",
    boxShadow:"2px 2px 2px 2px rgb(194, 190, 190)"
  };
   const btnStyle = {
     background:"none",
     padding:"16px",
    
   };
  return (

    
    <div className="App" style={mystyle}>
      <Profile fullName="Saif Chebli" bio="Helloooo!!!!" profession="etudiant">
       
       <img src="./robot.png"  style={btnStyle} alt=""/>
       
      </Profile>
     
    </div>
  );
}

export default App;
