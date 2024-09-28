const Highlights = () => {
  return (
    <>
      <section className="specials">
        <div className="specials-header">
          <h2>Specials</h2>
          <button className="btn online-menu">Online Menu</button>
        </div>

        <div className="specials-grid">
          <div className="specials-item">
            <img src="greeksalad.jpg" alt="greeksalad" />
            <h3>Greek salad</h3>
            <p>$12.99</p>
            <p>The famous greek salad of lettucces</p>
            <button className="btn">Order Delivery</button>
          </div>
          <div className="specials-item">
            <img src="bruschetta" alt="bruschetta" />
            <h3>Bruschetta</h3>
            <p>$5.99</p>
            <p>The famous Bruschetta</p>
            <button className="btn">Order Delivery</button>
          </div>
          <div className="specials-item">
            <img src="LemonDesssort.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>$15.00</p>
            <p>The famous Lemon Dessert</p>
            <button className="btn">Order Delivery</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights
