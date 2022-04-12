
import './App.css';
import Candidates from './components/Candidates/Candidates';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import Header from './components/Header/Header';
import Jobs from './components/Jobs/Jobs';
import JobTypes from './components/JobTypes/JobTypes';
import SearchJob from './components/SearchJob/SearchJob';
import StartSearching from './components/StartSearching/StartSearching';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <SearchJob />
        <div className="row">
          <div className='col-md-8'>
            <Jobs />
          </div>
          <div className='col-md-4'>
            <StartSearching />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className='col-md-8'>
            <JobTypes />
          </div>
          <div className='col-md-4'>
            <FeaturedJobs />
          </div>
        </div>
      </div>
      <Candidates />
    </div>
  );
}

export default App;
