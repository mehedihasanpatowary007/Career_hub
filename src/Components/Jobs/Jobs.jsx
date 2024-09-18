/* eslint-disable react-hooks/exhaustive-deps */

import Job from "./Job";
import { useAuth } from "../../Provider/JobsProvider";
import { useEffect, useState } from "react";
import { loadJobs } from "../../../api/jobApi";

const Jobs = () => {
  const { jobs, setJobs } = useAuth();
  const [dataLength, setDataLength] = useState(4)
const length = dataLength >= jobs.length;
  useEffect(() => {
    if (jobs?.length === 0) {
      loadJobs()
        .then((data) => setJobs(data))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="my-20 w-[90%] mx-auto">
      <div className="flex flex-col items-center gap-8">
        <div>
          <h1 className="text-center font-bold text-3xl">Featured Jobs</h1>
          <p className="text-sm font-thin text-gray-500 text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center gap-5">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
        <div><button  onClick={()=> setDataLength(dataLength + 2)} className={`bg-violet-400 text-white font-semibold px-4 py-2 rounded ${length ? 'hidden': ''}`}>Show More Jobs</button></div>
      </div>
    </div>
  );
};

export default Jobs;
