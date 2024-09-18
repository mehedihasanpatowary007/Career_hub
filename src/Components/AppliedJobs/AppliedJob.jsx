import { useEffect, useState } from "react";
import img1 from "../../assets/images/bg1.png";
import img2 from "../../assets/images/bg2.png";
import { useAuth } from "../../Provider/JobsProvider";
import SingleApplied from "./SingleApplied";

const AppliedJob = () => {
  const { appliedJobs } = useAuth();
  const [displayFilterJobs, setDisplayFilterJobs] = useState([]);
  const [selectSortName, setSelectSortName] = useState("all");


  
  useEffect(() => {
    if (selectSortName === "all") {
      setDisplayFilterJobs(appliedJobs);
    } else if (selectSortName === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite == "Remote"
      );
      setDisplayFilterJobs(remoteJobs);
    } else if (selectSortName === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite == "Onsite"
      );
      setDisplayFilterJobs(onsiteJobs);
    }
  }, [selectSortName, appliedJobs]);

  return (
    <div className="flex-grow">
      <div className="bg-violet-100 flex justify-center pb-5 md:p-0 md:justify-between items-center">
        <img className="hidden md:block" src={img1} alt="" />
        <h1 className="text-2xl  font-semibold">Applied Jobs</h1>
        <img className="hidden md:block" src={img2} alt="" />
      </div>
      <div className="w-[90%] mx-auto my-20">
        <div className="flex justify-end mb-7">
          <div className="bg-slate-200 inline-block rounded">
            <select
              className="outline-none bg-transparent p-3 mr-3"
              name="options"
              value={selectSortName}
              onChange={(e) => setSelectSortName(e.target.value)}
            >
              <option value="all">All</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {displayFilterJobs.map((applied) => (
            <SingleApplied key={applied.id} applied={applied} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
