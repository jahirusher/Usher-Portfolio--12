function Contact() {
    return (
      <section>
        <h2>Contact Me</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          
          <label>Email:</label>
          <input type="email" required />
          
          <label>Message:</label>
          <textarea required></textarea>
  
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  