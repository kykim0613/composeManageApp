const handleMemoInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    setPersonalInfo({
        ...personalInfo,
        memo: value
    })
}

export default handleMemoInput;