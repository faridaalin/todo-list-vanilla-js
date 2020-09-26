const displayDate = () => {
  const dateContainer = document.querySelector(".date");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let today = new Date();
  const date = today.getDate();
  const day = days[today.getDay()];
  const year = today.getFullYear();
  const month = months[today.getMonth()];

  dateContainer.innerText = `${day} ${date} ${month} ${year}`;
};

export default displayDate;
