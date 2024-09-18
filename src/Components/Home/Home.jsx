import Banner from "../Banner/Banner";
import JobCateGoryList from "../JobCategoryList/JobCateGoryList";
import Jobs from "../Jobs/Jobs";


const Home = () => {
    return (
        <div className='flex-grow'>
        <Banner/>
        <JobCateGoryList/>
        <Jobs/>
      </div>
    );
};

export default Home;