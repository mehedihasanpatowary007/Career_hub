import JobCategoryItem from "./JobCategoryItem";
import { JobCateGoryItems } from "./JobCategoryItems";

const JobCateGoryList = () => {
    return (
      <div className="my-10 w-[90%] mx-auto">
        <div className="flex flex-col items-center gap-5 mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-center">
              Job Category List
            </h1>
            <p className="text-[15px] text-gray-400 text-center">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className=" w-full">
            <div className="flex lg:justify-between justify-center items-center flex-wrap gap-4">
              {JobCateGoryItems.map((item) => (
                <JobCategoryItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobCateGoryList;