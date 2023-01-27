import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound.jsx';
import About from './Components/About';
import PatientList from './Components/PatientList';
import axios from 'axios';
import PatientCreate from './Components/PatientCreate';
import PatientInformation from './Components/PatientInformation';
import HandRegistration from './Components/HandRegistration';
import EdemaRegistration from './Components/EdemaRegistration';
import ElbowRegistration from './Components/ElbowRegistration';
import ClinicHistoryRegistration from './Components/ClinicHistoryRegistration';
import ClinicHistoryInformation from './Components/ClinicHistoryInformation';
import FirstFingerRegistration from './Components/FirstFingerRegistration';
axios.defaults.baseURL = 'http://localhost:3001/'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Coworking in progress</h1>
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route exact path= '/home' component= {Home}/>
        <Route exact path= '/patientcreate' component= {PatientCreate}/>
        <Route exact path= '/patientinformation/:dni' component= {PatientInformation}/>
        <Route exact path= '/clinichistoryinformation/:dni' component= {ClinicHistoryInformation}/>
        <Route path="/patientlist" component={PatientList} />
        <Route path="/handregistration" component={HandRegistration} />
        <Route path="/edemaregistration" component={EdemaRegistration} />
        <Route path="/ElbowRegistration" component={ElbowRegistration} />
        <Route path="/FirstFingerRegistration" component={FirstFingerRegistration} />
        <Route path="/clinichistoryregistration" component={ClinicHistoryRegistration} />
        <Route path="/about" component={About} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
