import React from "react";
import { PinData } from "../context/PinContext";
import PinCard from "../components/PinCard";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";

const Account = ({ user }) => {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = UserData();
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      toast.success(data.message);
      navigate("/login");
      setIsAuth(false);
      setUser([]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { pins } = PinData();

  let userPins;

  if (pins) {
    userPins = pins.filter((pin) => pin.owner === user._id);
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="p-6 w-full">
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
              <span className="text-4xl font-semibold text-pink-800">
                {user.name.slice(0, 1)}
              </span>
            </div>
          </div>

          <h1 className="text-center font-serif text-black text-2xl font-semibold mt-4">{user.name}</h1>
          <p className="text-center font-serif text-gray-700 mt-2">{user.email}</p>
          <p className="flex justify-center items-center text-center gap-3 font-bold text-pink-700 mt-2">
          {user.followers && <p>{user.followers.length} followers</p>}
          {user.following && <p>{user.following.length} followings</p>}
        </p>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={logoutHandler}
              className="bg-pink-700 px-4 py-2 rounded text-white font-semibold"
            >
              LOGOUT
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {userPins && userPins.length > 0 ? (
              userPins.map((e) => <PinCard key={e._id} pin={e} />)
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;