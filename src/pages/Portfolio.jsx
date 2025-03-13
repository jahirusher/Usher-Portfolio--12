import Project from "../components/Project";



function Portfolio() {
  const projects = [
    {
      title: "ReadME Generator",
      image: "/path-to-image.jpg",
      deployedLink: "http://drive.google.com/file/d/1-sZTcFiYc4S0dkv7auYwG1OVh3XDX6l0/view",
      githubLink: "https://github.com/jahirusher/challenge-7-README"
    },
    // Add more projects as needed
    {
        title: "Vehicle Builder",
        image: "/path-to-image.jpg",
        deployedLink: "https://drive.google.com/file/d/1AUDVY5H6dMS6IHMr5oLFQDAiESk-2toK/view",
        githubLink: "http://github.com/jahirusher/Module-8-Challenge"
    }
  ];

  return (
    <section>
      <h2>My Work</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <Project key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
