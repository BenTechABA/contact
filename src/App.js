import { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
 import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import Logs from './components/logs/Logs'
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux'
import store from './store';
import AddBtn from './components/layout/AddBtn'
import './App.css';
function App() { 
  useEffect(()=>{
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <TechListModal />
        <EditLogModal />
        <AddTechModal />
        <Logs /> 
        </div> 
    </Fragment>
    </Provider>
  );
}

export default App;
