const handleRealStartInput = (selectedDates, dateStr, value, setValue, format) => {
  const time = format + `${dateStr}`;

  setValue({
    storeId: value.storeId,
    employeeId: value.employeeId,
    realStartTime: time,
    calStartTime: value.calStartTime,
    realEndTime: value.realEndTime,
    calEndTime: value.calEndTime,
  });
};

export default handleRealStartInput;
