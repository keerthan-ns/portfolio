import "./tech.css"

const Members = () => {
  const langs=["Java","Html5","CSS3","C","Scss/Sass","Javascript","Php","Python","SQL"];
  const frameworks=["TailwindCSS","ReactJS","ExpressJS","NodeJS","Django","Laravel","Bootstrap"];
  const tools=["AppWrite","GIMP","Github","Inkscape","Scenebuilder","QT designer","Blender","MySQL"];
  return (
    <div id="tech" className="container tech-container">
      <h2>
        <span>Technologies I work with</span> 
      </h2>
      <div className="tech">
        <h3>Languages</h3>
        <div className="flex flex-wrap gap-2">
          {langs.map((item,i)=>(
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
      <div className="tech">
        <h3>Frameworks & Libraries</h3>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((item,i)=>(
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
      <div className="tech">
        <h3>Tools & Tech</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((item,i)=>(
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members
