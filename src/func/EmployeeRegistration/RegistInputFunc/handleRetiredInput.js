const handleRetiredInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value
    
    setPersonalInfo({
        ...personalInfo,
        retiredDate: value
    })
}

export default handleRetiredInput;