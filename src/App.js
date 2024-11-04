import logo from './logo.svg';
import './App.css';
import MainContent from './componets/MainContent';
import Footer from './componets/Footer';
import RightSidebar from './componets/RightSidebar';
import FirstComponent from './componets/FirstComponent';
import Heder from './componets/Header/Heder';
import UseStatePage from './componets/UseState';

function App() {
  const myname = 'React';
  const obj = { 
    name: 'React',
    age: 18,
    city: 'Beijing'
   };
  return (
    <div className="Root">
      {/* <Heder myname={myname} city={'Mumbai'} />
      <RightSidebar /> */}
      <MainContent />
      {/* <Footer myobj={obj} />
      <FirstComponent age="100" />
      <UseStatePage /> */}
    </div>
  );
}

export default App;
