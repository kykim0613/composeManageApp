const handleNameInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value

    setPersonalInfo({
        ...personalInfo,
        name: value
    })
}

export default handleNameInput;