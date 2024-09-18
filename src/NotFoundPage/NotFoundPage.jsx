import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate()
    return (
      <div className="h-screen flex flex-col gap-10 justify-center items-center">
        <img
          src="https://th.bing.com/th/id/R.953dd785698f1ba1bbb1c42cfafa850b?rik=UDfgtBknLPLyTw&riu=http%3a%2f%2fwww.natun-barta.com%2fimages%2fpage-not-found.png&ehk=jtQ%2b8GJnjgujG6Waf0cqg1dMC0O%2fnfwPtvCv75Hro6Q%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <button className="bg-red-500 text-white px-6 text-2xl py-2 rounded text-semibold capitalize" onClick={()=> navigate(-1)}><FaBackward/></button>
      </div>
    );
};

export default NotFoundPage;