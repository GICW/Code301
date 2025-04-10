import { useEffect, useState } from 'react';
import axios from 'axios';//axios ; fetching  data from backend, axios is our library to help us to do.
//cors- cross origin ; fire walls 
//express- framwork, same as react for front end
//dotenv - hiddent flie

//all the aboves are libraries 

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const API = 'http://localhost:3001';//3001 usually the server hosting number; 
      const jobs = await axios.get(`${API}/jobs`);
      setJobs(jobs.data);
    } 
    getJobs();  
  }, []);

  return (
    <>
      {jobs.length && jobs.map((job, idx) => (
        <div key={idx}>
          <h3>Vault Tec</h3>
          <h2><a href={job.url}>{job.name}</a></h2>
          <p>{job.description}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </>
  )
}

export default Jobs;
