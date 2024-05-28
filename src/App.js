import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
// import CryptoPrediction from './Components/CryptoPrediction';
import CryptoPrediction from './components/Crypto/CryptoPrediction';
// import Privacy from './Components/Privacy';
import Privacy from './components/Forms/Privacy';
// import Feedback from './Components/Feedback';
import Feedback from './components/Forms/Feedback';
// import Home from './Components/Home';
import Home from './components/Home/Home';
// import Cryptoinfo from './Components/Cryptoinfo';
import Cryptoinfo from './components/Crypto/Cryptoinfo';
// import Reportabug from './Components/Reportabug';
import Reportabug from './components/Forms/Reportabug';
// import FAQ from './Components/FAQ';
import FAQ from './components/Forms/FAQ';
// import Predictions from './Components/Predictions';
import Predictions from './components/Forms/Predictions';
// import Footer from './Components/Footer';
import Footer from './components/Footer/Footer';
// import Table from './Components/Table';
// import News from './Components/News';
// import Userprofile from './Components/Userprofile';
import './components/Forms/Report_a_bug.css';
import './components/Navbar/Navbar.css';
import './components/Home/Home.css'
import './App.css';
import './components/DataTable/Datatbl.css';
import './components/Footer/Footer.css';
import './components/Forms/Privacy.css';
import './components/Forms/Feedback.css';
import './components/Crypto/Card.css';
// import './Userprofile.css';
import './components/Crypto/CryptoGraph.css';
import './components/Crypto/CryptoPrediction.css';



function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route  path='/' element={<Home/>}></Route>
            <Route path='/Home' element={Home}></Route>
            <Route exact path='/cryptoinfo' element={<Cryptoinfo/>}></Route>
            <Route exact path='/predictions' element={<Predictions/>}></Route>
            <Route exact path='/faqs' element={<FAQ/>}></Route> 
            <Route exact path='/report_a_bug' element={<Reportabug/>}></Route>
            <Route exact path='/privacy' element={<Privacy/>}></Route>
            <Route exact path='/feedback' element={<Feedback/>}></Route> 
            <Route exact path='/' element={<CryptoPrediction/>}></Route>
            <Route exact path='/cryptopredictions' element={<CryptoPrediction/>}></Route>
            <Route exact path='/cryptoinfo/:currencyName/:symbolName' element={<CryptoPrediction/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
