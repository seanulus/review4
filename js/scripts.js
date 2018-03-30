function Pizza(size, meat, veggie, price) {
  this.size = size;
  this.meat = [];
  this.veggie = [];
  this.price = [];
};

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    debugger;
    var size = $("#size").val();
    var meats = [];
    var veggies = [];
    var price = [];
    var pizza = new Pizza(size, meats, veggies, price);
    $("input:checkbox[name=meat-topping]:checked").each(function(){
      var meat = $(this).val();
      console.log(meat);
      meats.push(meat);
    });
    $("input:checkbox[name=veggie-topping]:checked").each(function(){
      var veggie = $(this).val();
      console.log(veggie);
      veggies.push(veggie);
    });
  });
});
