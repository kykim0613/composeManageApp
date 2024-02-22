const handleEmailInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    setPersonalInfo({
        ...personalInfo,
        email: value
    })
}

export default handleEmailInput;