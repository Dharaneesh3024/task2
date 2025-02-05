import React from 'react';

function Contact() {
  const styles = {
    container: { textAlign: "center", padding: "30px", maxWidth: "600px", margin: "0 auto" },
    input: { width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" },
    button: { padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" required style={styles.input} />
        <input type="email" placeholder="Your Email" required style={styles.input} />
        <textarea placeholder="Your Message" required style={styles.input} rows="4" />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
