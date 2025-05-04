import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/Home";
const RootLayOut = () => {
  return (
    <main>
      <Header />
      <HomePage />
      <Outlet />
    </main>
  );
};
export default RootLayOut;
