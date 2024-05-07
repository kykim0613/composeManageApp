import { atom } from "recoil";

export const store = atom({
  key: "store",
  default: {},
});

export const toggle = atom({
  key: "toggle",
  default: false,
});

export const format = {
  "1. 이름": "",
  "2. 성별": "",
  "3. 주민번호": "",
  "4. 주소": "",
  "5. 번호": "",
  "6. 이메일": "",
  "7. 계좌": "",
};

export const clickedEmployee = atom({
  key: "employee",
  default: {
    storeId: 1,
    name: "",
    phone: "",
    gender: false,
    jumin: "",
    address: "",
    email: "",
    bankName: "",
    bankAccount: "",
    memo: "",
    hourlyWage: 0,
    startDate: "",
    retiredDate: "",
    mediDate: "",
    rank: "CEO",
    retired: false,
  }
});

export const user = atom({
  key: "user",
  default: {},
});

export const hovered = atom({
  key: "hovered",
  default: false
})

export const editState = atom({
  key: "edit",
  default: false
})

export const editBoxIndex = atom({
  key: "index",
  default: 0
})