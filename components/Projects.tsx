const projects = [
  {
    title: "Canadian Youth Labour Market Analysis",
    description: "Data analysis project using Statistics Canada data to uncover trends in youth employment and wage disparities.",
    date: "May 2026 - June 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Python", "pandas", "Matplotlib", "Statistics Canada"],
    highlights: [
      "Cleaned and transformed a real-world Statistics Canada dataset with pandas.",
      "Performed trend analysis on youth employment rates, wage gaps, and regional labour market disparities across 6 visualizations.",
      "Built a reproducible analysis pipeline with clear documentation and published it to GitHub for non-technical insight communication."
    ]
  },
  {
    title: "F1 Points Predictor",
    description: "Machine learning project to predict Formula 1 driver championship points from race and qualifying data.",
    date: "May 2026 - Present",
    image: "https://images.unsplash.com/photo-1541773367336-d14f17909395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Python", "scikit-learn", "pandas", "Kaggle"],
    highlights: [
      "Built a regression model with scikit-learn Linear Regression on a Kaggle F1 dataset.",
      "Engineered features across qualifying times, grid positions, and historical performance metrics.",
      "Applied iterative model evaluation and experimentation to track accuracy and optimize predictive results."
    ]
  },
  {
    title: "F1 Apex Pit Optimizer",
    description: "Simulation-focused F1 strategy project using object-oriented design and containerized workflows.",
    date: "March 2026 - April 2026",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Python", "OOP", "Docker", "Matplotlib"],
    highlights: [
      "Built an object-oriented race and pit strategy simulator in Python.",
      "Containerized the workflow with Docker for reproducible execution.",
      "Visualized race strategy outcomes with Matplotlib to compare optimization scenarios."
    ]
  },
  {
    title: "F1 Performance Analytics",
    description: "Ongoing analytics project for Formula 1 performance trends across drivers and teams.",
    date: "March 2026 - Present",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["SQL", "Excel", "DataGrip"],
    highlights: [
      "Created SQL-driven analysis workflows to track team and driver performance metrics.",
      "Used DataGrip for querying, schema exploration, and iterative data validation.",
      "Built Excel summaries to communicate race-by-race insights clearly."
    ]
  },
  {
    title: "RecallAI",
    description: "Chrome extension project built around spaced repetition, now archived.",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["JavaScript", "Chrome MV3", "Qwen API", "SM-2 Algorithm"],
    highlights: [
      "Implemented a Chrome MV3 extension architecture for active recall workflows.",
      "Integrated Qwen API-assisted interactions with SM-2 scheduling logic.",
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={index} className="overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 pb-0">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.date}</p>
                <p className="mt-2 text-gray-700">{project.description}</p>
              </div>
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
