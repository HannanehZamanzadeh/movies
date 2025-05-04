import SearchIcon from "../../assets/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Stack>
  );
}

const Navigation = () => {
  return (
    <nav>
      <div className="bg-black h-40 flex items-center">
        <div className="text-white">
          <ul className="flex gap-5 ml-50 ">
            <li className="mt-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="mt-2">
              <NavLink to="/genre">Genre</NavLink>
            </li>
            <li className="mt-2">
              <NavLink to="/country">Country</NavLink>
            </li>
            <li className=" relative">
              <input
                type="search"
                placeholder="search movies..."
                className="bg-white rounded-2xl text-black w-[416px] h-[40px] font-bold pl-5 pb-1.5"
              />
              <img src={SearchIcon} className="absolute right-3 top-2 " />
            </li>
            <li className="mt-2">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="mt-2">
              <NavLink to="/series">Series</NavLink>
            </li>
            <li className="mt-2">
              <NavLink to="/animations">Animations</NavLink>
            </li>
            <li className="mt-2">
              <NavLink to="/signin">LogIn/</NavLink>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
            <ImageAvatars />
            <li className="mt-2">
              <NavLink to="/notification">
                <NotificationsOutlinedIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
