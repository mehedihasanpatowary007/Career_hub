import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const SingleApplied = ({applied}) => {
    const {
        id,
      logo,
      company_name,
      job_title,
      remote_or_onsite,
      job_type,
      salary,
      location,
    } = applied ?? {};
    return (
      <div className="border p-6 rounded flex md:justify-between gap-3 items-center flex-col md:flex-row">
        <div className="flex gap-3 items-center justify-center flex-col md:flex-row">
          <div>
            <img className="bg-gray-200 py-14 px-5 rounded" src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-3 md:items-start items-center">
            <h1>{job_title}</h1>
            <h3>{company_name}</h3>
            <div className="flex gap-3 text-violet-400">
              <span className="border border-violet-400 px-4 py-1 font-semibold rounded">
                {remote_or_onsite}
              </span>
              <span className="border border-violet-400 px-4 py-1 font-semibold rounded">
                {job_type}
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 gap-3">
              <div className="flex gap-1">
                <span className="text-violet-500 text-xl">
                  <IoLocationOutline />
                </span>

                <span>{location}</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-violet-500 text-xl">
                  <RiMoneyDollarCircleLine />
                </span>
                <span>
                  {salary}
                  <sub>
                    <small>/mon</small>
                  </sub>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/jobs/${id}`}>
            <button className="text-white px-4 py-2 bg-violet-500 rounded font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default SingleApplied;

SingleApplied.propTypes = {
    applied:PropTypes.object,
}