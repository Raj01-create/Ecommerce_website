
let cartCount = localStorage.getItem("cartCount") || 0;

      const cartLink = document.querySelector("nav a:nth-child(4)");
      cartLink.textContent = `Cart 🛒 (${cartCount})`;

      const buttons = document.querySelectorAll("section:last-of-type button");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          cartCount++;
          localStorage.setItem("cartCount", cartCount);

          cartLink.textContent = `Cart 🛒 (${cartCount})`;

          alert("✅ Product added to cart!");
        });
      });
