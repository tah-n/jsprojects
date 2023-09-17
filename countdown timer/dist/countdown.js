const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll(".deadline-format h4");
 // console.log(items);

 //remember months start from 0 to 11
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();


  let futureDate = new Date(tempYear, tempMonth, tempDay + 10 , 11, 30);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDay()];


  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}`;

  function getRemainingTime() {
    //future time in ms
    const futureTime = futureDate.getTime();
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 1000*60*60*24;
    const oneHour = 1000*60*60;
    const oneMin = 1000*60;

    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min
    // 1day = 24hr
    const days = Math.floor(t/oneDay);
    const hours = Math.floor((t % oneDay)/ oneHour);
    const mins = Math.floor((t % oneHour)/ oneMin);
    const secs = Math.floor((t % oneMin)/ 1000);

    //set value array
    const values = [days, hours, mins, secs];

    function format(item) {
        if(item < 10) {
            return (item = `0${item}`)
        }
        return item;
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    })

    if(today > futureTime) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, the giveaway has expired.</h4>`
    }

  }

  let countdown = setInterval(getRemainingTime,1000);
  
  getRemainingTime();