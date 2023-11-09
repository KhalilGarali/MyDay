import React from 'react';
import {SlOptionsVertical} from "react-icons/sl"

const EventDisplay = ({ eventTitle, eventTime }) => {
  return (
    <div className="w-full flex pr-4 pt-4 pb-4 pl-2 rounded-lg mt-2 transition-transform transform hover:bg-beigeHover" style={{ boxShadow: '-3px 3px 0px 0px rgba(0, 0, 0, 0.2)' }}>
      <SlOptionsVertical style={{ marginTop: "3px", cursor:"pointer" }} />
      <div>
        {eventTitle}
      </div>
      <div className="ml-auto">
        {eventTime}
      </div>
    </div>
  );
};

export default EventDisplay;