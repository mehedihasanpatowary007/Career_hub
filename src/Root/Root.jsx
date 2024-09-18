import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar/Navbar";

import Spinner from '../Spinner/Spinner'
const Root = () => {
  const navigation = useNavigation()
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        {navigation.state === 'loading' ? <Spinner/> : <Outlet />}
        <Footer />
    </div>
  );
};

export default Root;
