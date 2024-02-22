const handleWageInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    setPersonalInfo({
        ...personalInfo,
        hourlyWage: value
    })
}

export default handleWageInput;