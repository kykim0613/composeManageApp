import axios from "axios";

export const fetchLogin = async (userinfo, setUserObj, nav) => {
  try {
    const res = await axios.post(
      `https://152.67.219.74/api/user/authentication`,
      userinfo
    );
    setUserObj(res.data.data);
    return nav('/select');

  } catch (err) {
    console.error(err);
  }
};

export const fetchGetStoreList = async () => {
  const storeApi = `https://152.67.219.74/api/store/list`;
  try {
    const res = await axios.get(storeApi)
    const storeArray = res.data.data
    const storeList = storeArray?.map((store) => store)?.sort((a, b) => a.id - b.id);

    return storeList
  } catch(err) {
    console.error(err)
  }
}

export const fetchEmployeesList = async (obj) => {
    try {
      const res = await axios.get(`https://152.67.219.74/api/employee/list?storeId=${obj.id}&isRetired=Y`);

      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const RegisterFetch = async (personalInfo, nav) => {
    const employeeRegisterApi = `https://152.67.219.74/api/employee`;
    try {
      const response = await axios.post(employeeRegisterApi, personalInfo);
      console.log(response);
      nav("/employee");
    } catch (error) {
      console.error("에러", error);
    }
  };

export const fetchDeleteEmployee = async (id, setDeleteMode, obj, setEmployees) => {
  try{
    await axios.delete(`https://152.67.219.74/api/employee?employeeId=${id}`);
    const res = await axios.get(`https://152.67.219.74/api/employee/list?storeId=${obj.id}&isRetired=Y`);
    setEmployees(res.data.data)
    return setDeleteMode(false)
  } catch (error) {
    console.error(error)
  }
}

  export const fetchSelectedStoreCommuteList = async () => {
    try {
      await axios.get(
        `https://152.67.219.74/api/commute?storeId=1&year=2024&month=1`);

    } catch (err) {
      console.error(err);
    }
  };

  export const fetchChangeStoreName = async (editedStore) => {
    try {
      await axios.put(
        `https://152.67.219.74/api/store`,
        editedStore
      )
    } catch (err) {
      console.error(err)
    }
  }