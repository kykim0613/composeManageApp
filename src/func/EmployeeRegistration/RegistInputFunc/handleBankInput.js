const handleBankInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    setPersonalInfo({
        ...personalInfo,
        bankName: value
    })
}

export default handleBankInput;