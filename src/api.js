import axios from "axios";

export const employeeRegisterApi = `https://152.67.219.74/api/employee`;

export const storeApi = `https://152.67.219.74/api/store/list`

export const fetchEmployeesList = async (obj) => {
    try {
      const res = await axios.get(`https://152.67.219.74/api/employee/list?storeId=${obj.id}&isRetired=Y`);

      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  };

export const fetchDeleteEmployee = async (id, setDeleteMode, obj, setEmployees) => {
  try{
    const deleteApi = await axios.delete(`https://152.67.219.74/api/employee?employeeId=${id}`);
    const res = await axios.get(`https://152.67.219.74/api/employee/list?storeId=${obj.id}&isRetired=Y`);
    setEmployees(res.data.data)
    return setDeleteMode(false)
  } catch (error) {
    console.error(error)
  }
}

export const fetchLogin = async (username, password, setUserObj) => {
    const url = `https://152.67.219.74/api/user/authentication`
    try {
      const res = await axios.post(
        url,
        {
          username: username,
          password: password,
        }
      );
      return setUserObj(res.data.data)

    } catch (err) {
      console.error(err);
    }
  };

  export const fetchSelectedStoreCommuteList = async () => {
    try {
      const res = await axios.get(
        `https://152.67.219.74/api/commute?storeId=1&year=2024&month=1`);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };