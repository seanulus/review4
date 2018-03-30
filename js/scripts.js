function Pizza(size, meats, veggies, price) {
  debugger;
  this.pizzaSize = size;
  this.pizzaMeats = meats;
  this.pizzaVeggies = veggies;
  this.pizzaPrice = price;
};

Pizza.prototype.totalPrice = function() {
  debugger;
  return (this.pizzaMeats.length + (this.pizzaVeggies.length / 2) + this.pizzaPrice).toFixed(2);
};

var sizePrice = function (size) {
  var price = 0
  if (size === "Small") {
    price = 10;
  } else if (size === "Medium") {
    price = 12;
  } else if (size === "Large") {
    price = 14;
  } else {
    price = 16;
  }
  return price;
};


$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    debugger;
    var size = $("#size").val();
    var meats = [];
    var veggies = [];
    var price = sizePrice(size);
    $("input:checkbox[name=meat-topping]:checked").each(function(){
      var meat = $(this).val();
      meats.push(meat);
    });
    $("input:checkbox[name=veggie-topping]:checked").each(function(){
      var veggie = $(this).val();
      veggies.push(veggie);
    });

    var newPizza = new Pizza(size, meats, veggies, price);
    var userTotal = newPizza.totalPrice();

    $("#order").text(newPizza.pizzaSize + " " + newPizza.pizzaMeats + " " + newPizza.pizzaVeggies + " pizza")
    $("#total").text("$" + userTotal);
  });
});
