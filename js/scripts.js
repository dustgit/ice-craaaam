$(document).ready(function() {
  $("#icecreamflavors").submit(function(event) {
    event.preventDefault();

    var flavors = ["Chocolate", "HazelNut", "ButterPecan", "PeanutButter"];
    console.log(flavors);
    flavors.forEach(function(flavor) {
        alert("I like " + flavor + ".");

      // console.log(flavors);

});
      // $("#list").append("<li>" + #[0] + "</li>" + "<li>" + #[1] + "</li>");
  });
});
