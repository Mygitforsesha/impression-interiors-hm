import React from 'react';
import './Portfolio.css';

/* Replace image URLs with your WebP project images. Use 4:5 or 3:4 aspect for Instagram-style vertical. */
const projects = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    imageWebP: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
  },
  {
    id: 2,
    title: 'Minimal Bedroom',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    imageWebP: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
    imageWebP: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
  },
  {
    id: 4,
    title: 'Scandinavian Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    imageWebP: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
];

const ProjectCard = ({ project }) => (
  <article className="portfolio-card">
    <a href="#contact" className="portfolio-card-link">
      <div className="portfolio-card-image-wrap">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="portfolio-card-image"
        />
        <div className="portfolio-card-overlay" aria-hidden />
      </div>
      <div className="portfolio-card-info">
        <span className="portfolio-card-category">{project.category}</span>
        <h3 className="portfolio-card-title">{project.title}</h3>
      </div>
    </a>
  </article>
);

const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <div className="container">
      <h2 className="portfolio-heading">Our Work</h2>
      <p className="portfolio-sub">Selected interior projects</p>
      <div className="portfolio-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
