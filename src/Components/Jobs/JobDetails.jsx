/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../../assets/images/bg1.png";
import img2 from "../../assets/images/bg2.png";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoBagRemoveOutline, IoLocationOutline } from "react-icons/io5";
import { useAuth } from "../../Provider/JobsProvider";
import { loadJobs } from "../../../api/jobApi";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";

const JobDetails = () => {
  const { jobs, setJobs, appliedJobs, setAppliedJobs } = useAuth();
  console.log(appliedJobs);
  const { id } = useParams();
  const navigate = useNavigate();

  const findJob = jobs.find((job) => job.id == id);

  const filterAppliedJobsId = appliedJobs.find(
    (appliedJob) => appliedJob.id === findJob.id
  );

  const handleAppliedJobId = (findJob) => {
    if (filterAppliedJobsId) {
      return toast("Already Applied", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      return setAppliedJobs([...appliedJobs, findJob]);
    }
  };

  useEffect(() => {
    if (jobs?.length === 0) {
      loadJobs()
        .then((data) => setJobs(data))
        .catch((err) => console.log(err));
    }
  }, []);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = findJob ?? {};
  const { phone, email, address } = contact_information ?? {};
  return (
    <div className="flex-grow">
      <div className="bg-violet-100 flex justify-center pb-5 md:p-0 md:justify-between items-center">
        <img className="hidden md:block" src={img1} alt="" />
        <h1 className="text-2xl  font-semibold">Job Details</h1>
        <img className="hidden md:block" src={img2} alt="" />
      </div>
      <div className=" lg:w-[80%] md:w-[90%] w-[95%] mx-auto flex md:flex-row flex-col gap-8 my-20">
        <div className="lg:w-[65%] flex flex-col gap-7">
          <h1 className="text-justify">
            <span className="font-semibold">Job Description: </span>{" "}
            <span>{job_description}</span>
          </h1>
          <h2 className="text-justify">
            <span className="font-semibold">Job Responsibility</span>
            <span>{job_responsibility}</span>
          </h2>
          <h5 className="flex flex-col gap-3">
            <span className="font-semibold">Education Requirement:</span>
            <span>{educational_requirements}</span>
          </h5>
          <h6 className="flex flex-col gap-3">
            <span className="font-semibold">Experiences: </span>
            <span>{experiences}</span>
          </h6>
        </div>
        <div className="lg:w-[35%] flex flex-col gap-3">
          <div className=" bg-violet-100 p-5">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[18px]">Job Details</h2>
              <hr className="border border-gray-400" />
              <div className="flex flex-col gap-2">
                <p className="flex gap-2">
                  <span className="text-violet-500 text-xl">
                    <IoBagRemoveOutline />
                  </span>
                  <span className=" font-semibold">JobTitle:</span>
                  <span>{job_title}</span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className="text-violet-500 text-xl">
                    <RiMoneyDollarCircleLine />
                  </span>
                  <span className="font-semibold">Salary:</span>
                  <span>
                    {salary}
                    <sub>
                      <small>/mon</small>
                    </sub>
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <h3 className="font-bold text-[18px]">Contact Information</h3>
              <hr className="border border-gray-400" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-violet-500 text-xl">
                    <LuPhone />
                  </span>
                  <span className="font-semibold">Phone:</span>
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-violet-500 text-xl">
                    <AiOutlineMail />
                  </span>
                  <span className="font-semibold">E-mail:</span>
                  <span>{email}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-violet-500 text-xl">
                    <IoLocationOutline />
                  </span>
                  <span className="font-semibold">Address:</span>
                  <span>{address}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              disabled={filterAppliedJobsId ? true : false}
              onClick={() => {
                return (
                  handleAppliedJobId(findJob),
                  navigate("/applied"),
                  toast.success("Job Apply Successfully!!", {
                    position: "top-center",
                    autoClose: 2000,
                  })
                );
              }}
              className={`text-white font-semibold py-2 bg-violet-600 w-full rounded ${
                filterAppliedJobsId ? "opacity-50" : "opacity-100"
              }`}
            >
              {filterAppliedJobsId ? "Already Applied" : "Apply Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
