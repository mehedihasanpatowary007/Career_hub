import { useContext, useState } from "react";
import { JobsContext } from "../Components/Context/JobsContext";

// eslint-disable-next-line react/prop-types
const JobsProvider = ({children}) => {
    const [jobs, setJobs] = useState([])
    const [appliedJobs, setAppliedJobs] = useState([])
    return (
        <JobsContext.Provider value={{jobs, setJobs,appliedJobs, setAppliedJobs}}>
            {children}
        </JobsContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=> useContext(JobsContext);
export default JobsProvider;
