import React from 'react';
import { motion } from 'framer-motion';
import { RiCloseCircleFill } from 'react-icons/ri';
import {IoIosCheckmarkCircle} from "react-icons/io"
import {BiSolidTimeFive} from "react-icons/bi"

const PopUp = ({ isOpen, closePopUp }) => {
    const hourOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const minuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  return isOpen ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <motion.div
        initial={{ y: "-8vh" }}
        animate={{
          y: "0vh",
          transition: { duration: 0.5, type: "spring" },
        }}
        exit={{
          y: "0vh",
          transition: { duration: 0.5, type: "spring" },
        }}
      >
        <div className="bg-black p-8 rounded-2xl shadow relative text-white flex flex-col items-center">
          <RiCloseCircleFill
            style={{ fontSize: "175%" }}
            className="absolute top-2 right-2 hover:text-red-700 hover:scale-125 transition-all cursor-pointer"
            onClick={closePopUp}
          />

        <h2 className="text-xl text-tan font-bold mb-4">New Event</h2>
          <input
            className="w-64 p-2 text-black bg-white-700 border-4 rounded-xl mb-4"
            placeholder="Title"
          />
          <div className="w-64 p-2 flex items-center justify-center space-x-2">
            <BiSolidTimeFive className="text-tan" style={{ fontSize: "150%", marginRight:"auto"}}/>
            <select className="text-black bg-gray-200 px-2 py-1 rounded-lg focus:outline-none">
              {hourOptions.map((hour) => (
              <option key={hour} value={hour}>
                {hour < 10 ? `0${hour}` : hour}
              </option>
              ))}
            </select>
            <span class="text-white text-2xl font-bold">:</span>
            <select className="text-black bg-gray-200 px-2 py-1 rounded-lg focus:outline-none">
              {minuteOptions.map((minute) => (
              <option key={minute} value={minute}>
                {minute < 10 ? `0${minute}` : minute}
              </option>
              ))}
            </select>
            <select className="text-black bg-gray-200 px-2 py-1 rounded-lg focus:outline-none">
              <option value="am">am</option>
            <option value="pm">pm</option>
            </select>
          </div>
          <input
            className="w-64 p-2 text-black bg-white-700 border-4 rounded-xl mb-4 mt-4"
            placeholder="Link"
          />
          <IoIosCheckmarkCircle style={{ fontSize: "200%" }}
            className="mt-4 hover:text-green-700 hover:scale-125 transition-all cursor-pointer"
            onClick={closePopUp}/>
        </div>
      </motion.div>
    </div>
  ) : null;
};

export default PopUp;
