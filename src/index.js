function alertTime(event) {
  if (event.target.value === "paris") {
    alert(`It is ${parisTime} in Paris, France.`);
  }
  if (event.target.value === "tokyo") {
    alert(`It is ${tokyoTime} in Tokyo, Japan.`);
  }
  if (event.target.value === "sydney") {
    alert(`It is ${sydneyTime} in Sydney, Australia.`);
  }
}

let parisTime = moment()
  .tz("Europe/Paris")
  .format(`dddd, MMMM Do, YYYY h:mm a `);
let tokyoTime = moment().tz("Asia/Tokyo").format(`dddd, MMMM Do, YYYY h:mm a `);
let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format(`dddd, MMMM Do, YYYY h:mm a `);

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", alertTime);
