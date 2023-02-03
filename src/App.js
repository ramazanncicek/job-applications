import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import PostCard from './PostCard';
// import FilterJobs from './FilterJobs';
import AddJobApply from './Components/AddJobApply';
import JobNavbar from './Components/JobNavBar';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <JobNavbar></JobNavbar>
          <Routes>
          <Route path="/add" element={<AddJobApply></AddJobApply>} />
          </Routes>
          {/* <FilterJobs></FilterJobs>
          <PostCard companyName="String" role="String" location="String parsed by ," date="String parsed by -" minYears={3}/> */}
          {/* <AddJobApply></AddJobApply> */}
        </div>
      </BrowserRouter>
  );
}

export default App;
