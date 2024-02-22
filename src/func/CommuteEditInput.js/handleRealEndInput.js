const handleRealEndInput = (selectedDates, dateStr, value, setValue, format) => {
  const time = format + `${dateStr}`;

  setValue({
    storeId: value.storeId,
    employeeId: value.employeeId,
    realStartTime: value.realStartTime,
    calStartTime: value.calStartTime,
    realEndTime: time,
    calEndTime: value.calEndTime,
  });
};

export default handleRealEndInput;
