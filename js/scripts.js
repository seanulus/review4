function Pizza(size, meat, veggie, price) {
  this.size = size;
  this.meat = [];
  this.veggie = [];
  this.price = [];
};

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var pizza = new Pizza(size, meat, veggie, price);

    $("input:checkbox[name=size]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);
    });

  });
});
