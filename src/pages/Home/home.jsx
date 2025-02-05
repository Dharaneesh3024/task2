
function Home() {
  return (
    <>
      {/* Hero Section */}
      <div style={{
        backgroundColor: "black",
        padding: "150px 20px",
        textAlign: "center"
      }}>
        <p style={{
          color: "white",
          marginBottom: "20px",
          fontSize: "60px",
          fontWeight: "bold"
        }}>
          Get 15% Off on All Products!
        </p>
        
      </div>

      {/* Info Section */}
      <div style={{
        backgroundColor: "powderblue",
        padding: "75px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px", marginBottom: "15px" }}>Exclusive Deals</h2>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
          Discover amazing discounts on a wide range of products. Limited time only!
        </p>
      </div>
    </>
  );
}

export default Home;