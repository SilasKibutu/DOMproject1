document.addEventListener("DOMContentLoaded", () => {
  const updateTotal = () => {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
      const price = parseFloat(item.querySelector(".item-price").textContent);
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    document.getElementById("total-price").textContent = total.toFixed(2);
  };

  // Handle quantity increase
  document.querySelectorAll(".plus").forEach(button => {
    button.addEventListener("click", () => {
      const quantityElement = button.parentElement.querySelector(".quantity");
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
      updateTotal();
    });
  });

  // Handle quantity decrease
  document.querySelectorAll(".minus").forEach(button => {
    button.addEventListener("click", () => {
      const quantityElement = button.parentElement.querySelector(".quantity");
      let currentQty = parseInt(quantityElement.textContent);
      if (currentQty > 1) {
        quantityElement.textContent = currentQty - 1;
        updateTotal();
      }
    });
  });

  // Handle item deletion
  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".cart-item").remove();
      updateTotal();
    });
  });

  // Handle liking items
  document.querySelectorAll(".like").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
      button.textContent = button.classList.contains("liked") ? "❤️" : "♡";
    });
  });

  // Initial total update
  updateTotal();
});
