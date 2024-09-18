import UserImg from '../../assets/images/user.png'
const Banner = () => {
    return (
      <div className=" flex-grow bg-violet-100 pt-10 mb-16 pb-5 lg:p-0">
        <div className="w-[90%]  mx-auto flex flex-col-reverse items-center lg:flex-row gap-6">
          <div className="flex flex-col items-start justify-center gap-3 lg:w-[50%]">
            <h1 className="font-bold md:text-3xl text-2xl lg:text-5xl flex flex-col gap-2 text-balance lg:w-[70%]">
              One Step Closer To Your
              <span className="text-violet-500">Dream Job</span>
            </h1>
            <p className="text-gray-500 text-[15px] lg:w-[50%]">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded text-white font-semibold">
              Get Started
            </button>
          </div>
          <div className="lg:w-[50%]">
            <img src={UserImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;