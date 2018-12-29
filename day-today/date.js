let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);

function mapping(variable, i_min, i_max, o_min, o_max) {
  return (variable - i_min) * (o_max - o_min) / (i_max - i_min) + o_min;
}

