const handleCalStartInput = (selectedDates, dateStr, value, setValue, format) => {
  const time = format + `${dateStr}`;

  setValue({
    storeId: value.storeId,
    employeeId: value.employeeId,
    realStartTime: value.realStartTime,
    calStartTime: time,
    realEndTime: value.realEndTime,
    calEndTime: value.calEndTime,
  });
};

export default handleCalStartInput;