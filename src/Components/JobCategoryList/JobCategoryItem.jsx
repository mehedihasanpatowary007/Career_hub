import PropTypes from 'prop-types';
const JobCategoryItem = ({item}) => {
    const {logo, title, caption} = item
    return (
      <div className="w-[250px] bg-violet-100 rounded-md p-5 flex flex-col gap-4">
        <div className='size-[70px] bg-violet-200 flex justify-center items-center rounded-md'>
          <img src={logo} alt="" />
        </div>
        <div>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='text-sm font-thin text-gray-500'>{caption}</p>
        </div>
      </div>
    );
};

export default JobCategoryItem;

JobCategoryItem.propTypes = {
    item: PropTypes.object.isRequired,
}