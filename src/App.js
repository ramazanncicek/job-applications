import 'bootstrap/dist/css/bootstrap.min.css';
// import PostCard from './PostCard';
// import FilterJobs from './FilterJobs';
// import AddJobApply from './AddJobApply';
import JobNavbar from './Components/JobNavBar';

function App() {
  return (
    <div className="App">
      <JobNavbar></JobNavbar>
      {/* <FilterJobs></FilterJobs>
      <PostCard companyName="String" role="String" location="String parsed by ," date="String parsed by -" minYears={3}/> */}
      {/* <AddJobApply></AddJobApply> */}
    </div>
  );
}

export default App;
