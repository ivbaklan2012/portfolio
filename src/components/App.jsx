import "../styles.css";
import Header from "./Header";
import Card from "./Card";
import Hero from "./Hero";
import experience from "../experience";
import skills from "../skills";
import projects from "../projects";

function cardList(card, index) {
  return <Card key={index} id={index} title={card.title} text={card.text} />;
}

export default function App() {
  return (
    <div className="App">
      <Header />

      <Hero />

      <section id="skills">
        <h2>Skills</h2>
        {skills.map(cardList)}
      </section>
      <section id="experience">
        <h2>Experience</h2>
        {experience.map(cardList)}
      </section>
      <section id="projects">
        <h2>Projects</h2>
        {projects.map(cardList)}
      </section>
    </div>
  );
}
