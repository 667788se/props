import logo from './logo.svg';
import './App.css';
import prettyFormat from 'pretty-format';
import FullName from './component/Profile/FullName';
import Address from './component/Profile/Address';
import Profilephoto from './component/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
      <br/>

      <Profilephoto/>
      <br/>
      <FullName/>
      <br/>
      <Address/>
    </div>
  );
}

export default App;
