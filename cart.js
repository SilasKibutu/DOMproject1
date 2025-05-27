document.addEventListener("DOMContentLoaded", () => {
  const updateTotal = () => {
    let total = 0;
    document.querySelectorAll(".card").forEach(card => {
      const priceText = card.querySelector(".unit-price").textContent;
      const price = parseFloat(priceText.replace("$", "").trim());
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    document.querySelector(".total").textContent = total + " $";
  };

  // Handle plus button click
  document.querySelectorAll(".fa-plus-circle").forEach(plusBtn => {
    plusBtn.addEventListener("click", () => {
      const quantitySpan = plusBtn.parentElement.querySelector(".quantity");
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });
  });

  // Handle minus button click
  document.querySelectorAll(".fa-minus-circle").forEach(minusBtn => {
    minusBtn.addEventListener("click", () => {
      const quantitySpan = minusBtn.parentElement.querySelector(".quantity");
      let currentQty = parseInt(quantitySpan.textContent);
      if (currentQty > 0) {
        quantitySpan.textContent = currentQty - 1;
        updateTotal();
      }
    });
  });

  // Handle trash icon click (delete item)
  document.querySelectorAll(".fa-trash-alt").forEach(trashBtn => {
    trashBtn.addEventListener("click", () => {
      const cardBody = trashBtn.closest(".card-body");
      cardBody.remove();
      updateTotal();
    });
  });

  // Handle heart icon click (like)
  document.querySelectorAll(".fa-heart").forEach(heartIcon => {
    heartIcon.addEventListener("click", () => {
      heartIcon.classList.toggle("liked");
      heartIcon.style.color = heartIcon.classList.contains("liked") ? "red" : "black";
    });
  });

  // Initial total
  updateTotal();
});

