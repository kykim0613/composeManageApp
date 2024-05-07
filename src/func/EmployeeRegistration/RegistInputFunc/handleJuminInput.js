const handleJuminInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    // let filteredValue = value.replace(/[^0-9]/g, '')

    // if (filteredValue.length >= 6) {
    //     filteredValue = filteredValue.replace(/^(\d{6})(\d{0,7})/, '$1 $2');
    //   }

    setPersonalInfo({
        ...personalInfo,
        jumin: value
    })
}

export default handleJuminInput;