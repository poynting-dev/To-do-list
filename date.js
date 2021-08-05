
// console.log(module);
//return an object containing all information about this module


exports.getDate = function () {
      const today = new Date();

      const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
      };

      return day = today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
      const today = new Date();

      const options = {
            weekday: 'long',
      };

      return day = today.toLocaleDateString("en-US", options);
}
