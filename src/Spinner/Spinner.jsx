import { Audio } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="flex-grow flex justify-center items-center">
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
