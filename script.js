$(document).ready(function () {
  function Pizza(type, size, topping, crust) {
    this.type = type;
    this.size = size;
    this.topping = topping;
    this.crust = crust;

  }
  var customerOrder = [];
  var customerName = "";

  var totalCost = 0;

  var customerOrder = [];

  var estate = "";
  var houseNumber = "";

  Pizza.prototype.pizzaPrice = function () {
    return this.crustPrice() + this.toppingPrice() + this.typePrice();
  };

  Pizza.prototype.toppingPrice = function () {
    if (this.size === "Large") {
      if (this.topping === "Pepperoni") {
        return 150;
      } else if (this.topping === "Mushrooms") {
        return 120;
      } else if (this.topping === "Onions") {
        return 120;
      } else {
        return 180;
      }
    } else if (this.size === "Medium") {
      if (this.topping === "Pepperoni") {
        return 100;
      } else if (this.topping === "Mushrooms") {
        return 80;
      } else if (this.topping === "Onions") {
        return 80;
      } else {
        return 140;
      }
    } else {
      if (this.topping === "Pepperoni") {
        return 80;
      } else if (this.topping === "Mushrooms") {
        return 50;
      } else if (this.topping === "Onions") {
        return 50;
      } else {
        return 100;
      }
    }
  };
  Pizza.prototype.typePrice = function () {
    if (this.size === "Large") {
      if (this.type === "Hawaaian Pizza") {
        return 1100;
      } else if (this.type === "Periperi Pizza") {
        return 1200;
      } else if (this.type === "Margerita Pizza") {
        return 1300;
      } else if (this.type === "Bbq Chicken Pizza") {
        return 1150;
      } else if (this.type === "Chicken Tikka") {
        return 1000;
      } else {
        return 1250;
      }
    } else if (this.size === "Medium") {
      if (this.type === "Hawaaian Pizza") {
        return 850;
      }
      else if (this.type === "Periperi Pizza") {
        return 1000;
      } else if (this.type === "Margerita Pizza") {
        return 1100;
      } else if (this.type === "Bbq Chicken Pizza") {
        return 950;
      } else if (this.type === "Chicken Tikka") {
        return 750;
      } else {
        return 850;
      }
    } else {
      if (this.type === "Hawaaian Pizza") {
        return 600;
      } else if (this.type === "Periperi Pizza") {
        return 750;
      } else if (this.type === "Margerita Pizza") {
        return 950;
      } else if (this.type === "Bbq Chicken Pizza") {
        return 600;
      } else if (this.type === "Chicken Tikka") {
        return 500;
      } else {
        return 550;
      }
    }
  };

  Pizza.prototype.crustPrice = function () {
    if (this.crust === "thick") {
      return 100;
    } else if (this.crust === "thin") {
      return 80;
    } else {
      return 120;
    }
  };

  $("#order-form").submit(function (e) {
    e.preventDefault();
    var newFlavor = $("#flavor").val();
    var newSize = $("#size").val();
    var newTopping = $("#topping").val();
    var newCrust = $("#crust").val();
    var customerPizza = new Pizza(newFlavor, newSize, newTopping, newCrust);
    console.log(customerPizza.type);

    customerOrder.push(customerPizza);
    $("#flavor").val("");
    $("#size").val("");
    $("#topping").val("");
    $("#crust").val("");
    totalCost = 0;




    for (let i = 0; i < customerOrder.length; i++) {
      totalCost += customerOrder[i].pizzaPrice();
    }
    $("#order-summary").append(
      "<tr>" +
      '<th scope="row">' +
      customerPizza.type +
      " (" +
      customerPizza.size +
      ") - " +
      customerPizza.typePrice() +
      "</th>" +
      "<td>" +
      customerPizza.topping +
      " - " +
      customerPizza.toppingPrice() +
      "</td>" +
      "<td>" +
      customerPizza.crust +
      " - " +
      customerPizza.crustPrice() +
      "</td>" +
      "<td>" +
      customerPizza.pizzaPrice() +
      "</td>" +
      "</tr>"
    );

    if (customerOrder.length > 0) {
      $("#form-title").empty();
      $("#form-title").append("Add Another Order");
    }
    $("#sum").empty();
    $("#sum").append(totalCost);
    $(".sum").show();
  });

  $("#checkout").click(function () {
    $(".checkout-options").show();
  });

  $("#checkout-form").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var deliveryOption = $("#delivery-option").val();
    customerName = name;
    console.log(name);
    console.log(deliveryOption);
    $("#name").val("");
    $("#delivery-option").val("");
    $(".checkout-options").hide();
    if (deliveryOption === "deliver") {
      $(".location").show();
      $(".delivery-cost").show();
      $("#delivery-amount").append(200);
      totalCost += 200;
      $("#sum").empty();
      $("#sum").append(totalCost);
    } else {
      alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 2 hours");
    }

    $("#location-form").submit(function (e) {
      e.preventDefault();
      var estateEntered = $("#estate").val();
      var houseNumberEntered = $("#house-number").val();
      estate = estateEntered;
      houseNumber = houseNumberEntered;
      console.log(estate);
      console.log(houseNumber);
      $(".location").hide();
      alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next 2 hours");
    });
  });
  $("#user-form").submit(function (event) {
    event.preventDefault();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var location = $("#location").val();
    alert(email);
  })
});