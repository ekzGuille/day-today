class DateCounter {
  constructor() {}

  mapping(variable, i_min, i_max, o_min, o_max) {
    return (variable - i_min) * (o_max - o_min) / (i_max - i_min) + o_min;
  }

  getPercent() {
    const date = new Date();
    const year = date.getFullYear();
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24
    const currentDay = Math.floor(diff / oneDay);
    // const currentDay = 100;
    const minDay = 0;
    const maxDay = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 366 : 365;
    const minPer = 0;
    const maxPer = 100;
    const per = this.mapping(currentDay, minDay, maxDay, minPer, maxPer);
    return ~~(per*100)/100;
  }
}