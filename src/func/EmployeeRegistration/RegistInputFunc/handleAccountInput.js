const handleAccountInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    setPersonalInfo({
        ...personalInfo,
        bankAccount: value
    })
}

export default handleAccountInput;