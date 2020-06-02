import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddDate = () => {
    const [item, setItem] = useState([{startDate: new Date()}]);

    const handleChange = date => {
      setItem({
        startDate: date
      });
    }    

    return (
      <DatePicker className="date"
        selected={item.startDate}
        dateFormat="EEE, dd MMMM yyyy"
        onChange={handleChange}
        placeholderText="Add Date"/>
    );
}
export default AddDate;