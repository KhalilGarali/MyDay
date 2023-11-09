import { motion } from "framer-motion";
import { generateDate, months } from "../CalendarUtil/generateDate";
import cn from "../CalendarUtil/cn";
import EventDisplay from "../CalendarUtil/eventDisplay";
import PopUp from "../CalendarUtil/popUp";
import { useState } from "react";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {MdAddCircle} from "react-icons/md"


const CalendarComponent = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelecteState] = useState(currentDate);
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => {
    setPopUp(!popUp)
  }
  

  return (
    <>
    <PopUp isOpen={popUp} closePopUp={togglePopUp} ></PopUp>
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
            <MdAddCircle onClick={togglePopUp} className="hover:scale-125 transition-all cursor-pointer" style={{fontSize:"175%"}}/>
          </div>
          <p className="text-gray-600">No meetings for today</p>
          <EventDisplay eventTitle="352 Exam" eventTime="8:30 am"></EventDisplay>
          <EventDisplay eventTitle="352 Exam" eventTime="8:30 am"></EventDisplay>
          
        </div>
      </div>
      
    </motion.div>
    </>
  );
};

export default CalendarComponent;
