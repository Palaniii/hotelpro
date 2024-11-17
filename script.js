document.getElementById("date").addEventListener("change", function() {
  const selectedDate = this.value;
  console.log("Selected Date:", selectedDate);
  // Add any additional functionality you need when a date is selected
});


document.querySelector(".search-button").addEventListener("click", function() {
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const rooms = document.getElementById("rooms").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;

  alert(`Searching for: ${destination}, Date: ${date}, Rooms: ${rooms}, Adults: ${adults}, Children: ${children}`);
});

// search side
function toggleSearchBar() {
  const searchBar = document.getElementById("bookingSearchBar");
  if (searchBar.style.display === "none" || searchBar.style.display === "") {
      searchBar.style.display = "block"; // Show the search bar
  } else {
      searchBar.style.display = "none"; // Hide the search bar
  }
}


// cancel button
document.addEventListener("DOMContentLoaded", function () {
  const cancelButton = document.querySelector(".cancel-button");

  cancelButton.addEventListener("click", function () {
    const bookingSearchBar = document.getElementById("bookingSearchBar");

    if (bookingSearchBar) {
      bookingSearchBar.style.display = "none";
    }
  });
});
