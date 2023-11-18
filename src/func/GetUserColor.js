const GetUserColor = (employees) => {
  const hsvToRgb = (hue, saturation, value) => {
    const rgbToHex = (rf, gf, bf) => {
      const r = Math.floor(rf * 255 + 0.5);
      const g = Math.floor(gf * 255 + 0.5);
      const b = Math.floor(bf * 255 + 0.5);
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    const h = Math.floor(hue * 6);
    const f = hue * 6 - h;
    const p = value * (1 - saturation);
    const q = value * (1 - f * saturation);
    const t = value * (1 - (1 - f) * saturation);

    switch (h) {
      case 0:
        return rgbToHex(value, t, p);
      case 1:
        return rgbToHex(q, value, p);
      case 2:
        return rgbToHex(p, value, t);
      case 3:
        return rgbToHex(p, q, value);
      case 4:
        return rgbToHex(t, p, value);
      case 5:
        return rgbToHex(value, p, q);
      default:
        return "#fff";
    }
  };

  const range = Math.floor(200 / employees.length)
  const userColorMap = new Map()
  let num = 0;
  for(const element of employees) {
    const color = hsvToRgb(range * num / 360, 0.12, 0.98)
    userColorMap.set(element, color)
    num++;
  }



  const array = [];

  for(let i = 0; i < employees.length; i++){
    employees[i].backgroundColor = Array.from(userColorMap.values())[i]
    array.push(employees[i])
  }

  return array

};

export default GetUserColor;
