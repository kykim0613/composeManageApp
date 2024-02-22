const handleStartInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value
    
    setPersonalInfo({
        ...personalInfo,
        startDate: value
    })
}

export default handleStartInput;