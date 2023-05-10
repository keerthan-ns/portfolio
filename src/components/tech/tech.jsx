import "./tech.css"

const Members = () => {
  const langs=["Java","Html5","CSS","C","Scss/Sass","Javascript","Php","Python"];
  const frameworks=["TailwindCSS","Bootstrap","React","Laravel","Django"];
  const tools=["GIMP","Github","Inkscape","Scenebuilder","QT designer","Blender","MySQL"];
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
