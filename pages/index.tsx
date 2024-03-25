import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import { projects } from '@/app/constants';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio of Gaurav</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <header className={styles.header}>
        <h1>Welcome to Portfolio of Gaurav </h1>
        <p>
          Hi, I&apos;m Gaurav, a frontend developer passionate about creating
          awesome web experiences.
        </p>
      </header>

      <section className={styles.projectsSection}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div key={project.id} className={styles.project}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link href={project.demoLink}>View Demo</Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </section>

      <section className={styles.contactSection}>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email at{' '}
          <a href="mailto:sahgauravk@gmail.com">sahgauravk@gmail.com</a>.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Gaurav. No rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
