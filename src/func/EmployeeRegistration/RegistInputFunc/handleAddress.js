const handleAddressInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    setPersonalInfo({
        ...personalInfo,
        address: value
    })
}

export default handleAddressInput;