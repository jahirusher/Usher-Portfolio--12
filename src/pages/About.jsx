import profilePic from "../assets/profile.jpeg";

function About() {
    return (
      <section>
        <h2>About Me</h2>
        <img src= {profilePic} alt="JaHir Usher" 
        style={{ width: "150px", height: "160px", borderRadius: "50%", objectFit: "cover" }} />
        <p>Meet JaHir Usher, a North Carolinian with a passion for real estate and web development. His journey started in real estate, where his love for architecture and property management earned him the title “King of Rentals” at his previous company. But over time, his interest in technology grew, leading him to explore web development and design.

<p>Now, JaHir specializes in front-end development, building sleek and responsive websites using React and Vite. He enjoys creating clean, user-friendly interfaces and bringing ideas to life through code. His portfolio features a mix of projects, from weather dashboards to interactive portfolios, showcasing both creativity and technical skill.,</p>

Outside of coding and real estate, JaHir enjoys keeping his space organized, listening to music, reading, and always looking for ways to grow. Whether he’s helping clients find their perfect home or developing smooth, engaging web experiences, his goal is always the same—making things work beautifully.

</p>
      </section>
    );
  }
  
  export default About;
  