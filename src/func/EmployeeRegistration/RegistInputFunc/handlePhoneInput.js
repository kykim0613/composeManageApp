const handlePhoneInput = (e, personalInfo, setPersonalInfo) => {
    const value = e.target.value
    // let filteredValue = value.replace(/[^0-9]/g, '')
    // .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)

    // console.log(filteredValue)

    // if (filteredValue.length >= 3 && filteredValue.length < 8) {
    //     filteredValue = filteredValue.replace(/(\d{3})(?=\d)/g, '$1 ');
    //   } else if (filteredValue.length >= 8) {
    //     filteredValue = filteredValue.replace(/(\d{3})(\d{4})(?=\d)/g, '$1 $2 ');
    //   }

    setPersonalInfo({
        ...personalInfo,
        phone: value
    })
}

export default handlePhoneInput;