
import './App.css';
import Corousel from './Components/Corousel';
import Kids from './Components/Kids';
import Men from './Components/Men';
import MenProduct from './Components/MenProducts';
import Navbar from './Components/Navbar';
import Women from './Components/Women';
import WomenProduct from './Components/WomenProduct';

function App() {
  return (
    <>
    <Women/>
    <Men/>
    <Kids/> 

     {/* <Corousel/>  */}

     {/* <Navbar/> */}

    <WomenProduct/>
    <MenProduct/>
    </>
  );
}

export default App;
