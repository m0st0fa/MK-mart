let total = 0;

// Function to get item details and update total
function getbtn(data) {
  const card = data.closest(".box");
  const itemsName = card.querySelector('.box-info h5').innerText;
  const selectedBox = document.getElementById("selected-box");
  const createLi = document.createElement("li");
  createLi.innerText = itemsName;
  selectedBox.appendChild(createLi);
  const itemPrice = card.querySelector('.box-info h6').innerText.split(" ")[0];
  total = total + parseInt(itemPrice, 10);
  setInnerText("total", total);
}

// Function to set inner text
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// Function to apply coupon and enable button
function applyCoupon() {
  const couponCode = document.getElementById("coupon-code").value;
  if (couponCode === "SELL200") {
    const discountedAmount = total * 0.2;
    const netTotal = total - discountedAmount;
    
    // Display the discount and grand total with two decimal places
    setInnerText("discount", discountedAmount.toFixed(2));
    setInnerText("grand-total", netTotal.toFixed(2));

    // Enable the open modal button
    enableButton();
  } else {
    alert("Invalid coupon. Please try again.");
  }
}

// Function to enable the button
function enableButton() {
  var openModalButton = document.getElementById("openModalButton");
  openModalButton.removeAttribute("disabled");
}
