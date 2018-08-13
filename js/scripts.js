$(document).ready(function() {
  $("#icecreamflavors").submit(function(event) {
    event.preventDefault();

    var flavors = ["Chocolate","HazelNut","ButterPecan","PeanutButter"];
    console.log(flavors);
    flavors.forEach(function(flavor) {
        $("#list").append("<li>" + flavor + "</li>");
        // alert("I like " + flavor + ".");

      // console.log(flavors);

});

  });
});
