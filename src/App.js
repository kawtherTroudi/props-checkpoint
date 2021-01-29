import './App.css';
import Profile from './profile/Profile';
import profile from './profile.png'

function App() {
  let fullName ='Kawther Troudi';
  const handleName =()=>{
    alert ("Welcome "+fullName);
  }
  return (
    <>
 
    <Profile handleName={handleName} fullName = {fullName} profession='Developer'>
      <img src ={profile} alt=''/>
    </Profile>
    
    </>
  );
}
export default App;
