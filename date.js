
// console.log(module);
//return an object containing all information about this module


module.exports.getDate = getDate;

function getDate() {
      let today = new Date();

      let options ={
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
      };

      return day = today.toLocaleDateString("en-US", options);
}

module.exports.getDay = getDay;
function getDay() {
      let today = new Date();

      let options ={
            weekday: 'long',
      };

      return day = today.toLocaleDateString("en-US", options);
}
