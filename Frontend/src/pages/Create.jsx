import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PinData } from "../context/PinContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const [file, setFile] = useState("");
  const [filePrev, setFilePrev] = useState("");
  const [title, setTitle] = useState("");
  const [pin, setPin] = useState("");
  const { addPin } = PinData();

  const changeFileHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFilePrev(reader.result);
      setFile(file);
    };
  };

  const navigate = useNavigate();

  const addPinHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("pin", pin);
    formData.append("file", file);

    addPin(formData, setFilePrev, setFile, setTitle, setPin, navigate);
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-80 h-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            {filePrev && <img src={filePrev} alt="" />}
            <div
              className="flex flex-col items-center justify-center h-full cursor-pointer"
              onClick={handleClick}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={changeFileHandler}
              />
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-200 rounded-full">
                <FaPlus />
              </div>
              <p className="text-pink-700 font-serif font-bold">Choose a file</p>
            </div>
            <p className="mt-4 text-sm text-pink-800">
              We recomment .jpg files less than 10mb
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center bg-blue-300">
            <form
              className="w-full max-w-lg p-6 bg-gray-50 rounded-lg shadow-lg"
              onSubmit={addPinHandler}
            >
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-serif font-semibold text-pink-700"
                >
                  Caption
                </label>
                <input
                  type="text"
                  id="title"
                  className="common-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pin"
                  className="block text-sm font-serif font-semibold text-pink-700"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="pin"
                  className="common-input"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                />
              </div>
              <button className="common-btn">ADD</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;