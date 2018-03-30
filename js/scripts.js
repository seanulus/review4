function Pizza(size, meats, veggies, price) {
  this.size = size;
  this.meat = [];
  this.veggie = [];
  this.price = price;
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

Pizza.prototype.totalPrice = function() {
  return (this.meat.length + (this.veggie.length / 2)) + this.price;
};

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    //debugger;
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
    var pizza = new Pizza(size, meats, veggies, price);
    console.log(meats);
    var userTotal = pizza.totalPrice;

  });
});
