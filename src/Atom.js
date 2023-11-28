import { atom } from "recoil";

export const format = {
  "1. 이름": "",
  "2. 성별": "",
  "3. 주민번호": "",
  "4. 주소": "",
  "5. 번호": "",
  "6. 이메일": "",
  "7. 계좌": ""
}

export const clickedEmployee = atom({
  key: "employee",
  default: {}
})

