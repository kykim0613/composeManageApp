import { DatePicker, TimePicker } from "antd";
import type { DatePickerProps } from "antd";
import { useState } from "react";
import styled from "styled-components";

const { RangePicker } = DatePicker;

const DateRangeInput = () => {
    const [dateRange, setDateRange] = useState([])
    const now = new Date(Date.now())
    const handleDateChange = (dates) => {
        setDateRange(dates)
    }
    console.log(dateRange)
    return (
        <>
        <RangePicker value={dateRange} onChange={handleDateChange} />
        </>
    )
}

export default DateRangeInput;