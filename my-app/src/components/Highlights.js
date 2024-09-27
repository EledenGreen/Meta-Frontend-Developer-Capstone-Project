const Highlights = () => {
  return (
    <>
      <section class="specials">
        <div class="specials-header">
          <h2>Specials</h2>
          <button class="btn online-menu">Online Menu</button>
        </div>

        <div class="specials-grid">
          <div class="specials-item">
            <img src="greeksalad.jpg" alt="greeksalad" />
            <h3>Greek salad</h3>
            <p>$12.99</p>
            <p>The famous greek salad of lettucces</p>
            <button class="btn">Order Delivery</button>
          </div>
          <div class="specials-item">
            <img src="bruschetta" alt="bruschetta" />
            <h3>Bruschetta</h3>
            <p>$5.99</p>
            <p>The famous Bruschetta</p>
            <button class="btn">Order Delivery</button>
          </div>
          <div class="specials-item">
            <img src="LemonDesssort.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>$15.00</p>
            <p>The famous Lemon Dessert</p>
            <button class="btn">Order Delivery</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights
