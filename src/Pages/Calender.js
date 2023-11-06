import { motion } from "framer-motion";
import { generateDate, months } from "../CalendarUtil/generateDate";
import cn from "../CalendarUtil/cn";
import { useState } from "react";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {MdAddCircle} from "react-icons/md"
import {RiCloseCircleFill} from "react-icons/ri"
import {IoIosCheckmarkCircle} from "react-icons/io"
import {BiSolidTimeFive} from "react-icons/bi"

const CalendarComponent = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelecteState] = useState(currentDate);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
  const hourOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  return (
    <>
    {modal && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
        <motion.div
          initial={{ y: "-8vh" }}
          animate={{
            y: "0vh",
            transition: { duration: 0.5, type: "spring" },
          }}
          exit={{
            y: "0vh", // Leaves to the bottom (100%)
            transition: { duration: 0.5, type: "spring" },
          }}
        >
        <div className="bg-black p-8 rounded-2xl shadow relative text-white flex flex-col items-center">
          <RiCloseCircleFill
            style={{ fontSize: "175%" }}
            className="absolute top-2 right-2 hover:text-red-700 hover:scale-125 transition-all cursor-pointer"
            onClick={toggleModal}
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
            onClick={toggleModal}/>
        </div></motion.div>
      </div>
    )}
    <motion.div
      initial={{ y: "-8vh" }}
      animate={{
        y: "0vh",
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        y: "0vh", // Leaves to the bottom (100%)
        transition: { duration: 0.5, type: "spring" },
      }}
    >
      <h1 style={{marginTop:"8vh"}}class="text-6xl font-bold flex items-center justify-center">
        Calender
      </h1>
      <div
        style={{ marginTop: 50 }}
        className="flex mx-auto divide-x-2 gap-10 items-center"
      >
        <div className="w-96 h-96">
          <div className="flex justify-between">
            <h1 className="font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div
              
              className="flex items-center gap-5"
            >
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className="cursor-pointer"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                To Myday
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-7 text-gray-600">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="h-14 grid place-content-center"
                >
                  {day}
                </h1>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="h-14 border-t grid place-content-center text-sm"
                    style={{ borderTopWidth: "2px" }}
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-500",
                        today ? "bg-red-600 text-white" : "",
                        selectDate.toDate().toDateString() ==
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                      )}
                      onClick={() => {
                        setSelecteState(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="h-96 w-96" style={{ paddingLeft: 20 }}>
          <div className="w-full flex justify-between">
            <h1 className="font-semibold">
              Schedule for {selectDate.toDate().toDateString()}
            </h1>
            <MdAddCircle onClick={toggleModal} className="hover:scale-125 transition-all cursor-pointer" style={{fontSize:"175%"}}/>
          </div>
          
          <p className="text-gray-600">No meetings for today</p>
        </div>
      </div>
      
    </motion.div>
    </>
  );
};

export default CalendarComponent;
