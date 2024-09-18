import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job ?? {};
  return (
    <div className="w-[550px] border border-gray-400 p-7 flex flex-col gap-4 rounded items-start">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h2>{job_title}</h2>
        <h3>{company_name}</h3>
        <div className="flex gap-3 text-violet-400">
          <span className="border border-violet-400 px-4 py-1 font-semibold">
            {remote_or_onsite}
          </span>
          <span className="border border-violet-400 px-4 py-1 font-semibold">
            {job_type}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-2">
            <span>
              <IoLocationOutline />
            </span>
            <span>{location}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>
              <RiMoneyDollarCircleLine />
            </span>
            <span>{salary}</span>
          </p>
        </div>
      </div>
      <Link
        className="bg-violet-400 text-white font-semibold px-6 py-2 rounded"
        to={`/jobs/${id}`}
      >
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default Job;
Job.propTypes = {
  job: PropTypes.object.isRequired,
};
