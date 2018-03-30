function Pizza(size, meats, veggies, price) {
  this.size = size;
  this.meats = meats;
  this.veggies = veggies;
  this.price = price;
};

var totalPrice = function(meats, veggies, price) {
  return (meats.length + (veggies.length / 2) + price).toFixed(2);
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
    var userTotal = totalPrice(meats, veggies, price);

    $("#order").text(size + " " + meats + " " + veggies + " pizza")
    $("#total").text("$" + userTotal);
  });
});
