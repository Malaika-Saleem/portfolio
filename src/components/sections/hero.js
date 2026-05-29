import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  .hero-intro {
    margin: 0 0 20px 4px;
    color: var(--cyan);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 4vw, var(--fz-md));
    letter-spacing: 0.18em;
    text-transform: uppercase;

    @media (max-width: 480px) {
      margin-left: 2px;
    }
  }

  h1,
  h2 {
    margin: 0;
    color: var(--white);
    line-height: 0.9;
  }

  .big-heading {
    font-size: clamp(52px, 8vw, 96px);
    letter-spacing: -0.05em;
    max-width: 820px;
  }

  h3 {
    margin-top: 20px;
    max-width: 720px;
    color: var(--slate);
    font-size: clamp(22px, 3vw, 30px);
    line-height: 1.2;
  }

  p {
    margin: 30px 0 0;
    max-width: 680px;
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.8;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 40px;
  }

  .hero-button {
    ${({ theme }) => theme.mixins.button};
    min-width: 140px;
    padding: 1rem 1.5rem;
    border-radius: 999px;
    font-size: var(--fz-sm);
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-weight: 600;
    background: rgba(77, 229, 255, 0.16);
    border: 1px solid rgba(77, 229, 255, 0.32);
    box-shadow: 0 0 28px rgba(77, 229, 255, 0.08);

    &:hover,
    &:focus-visible {
      background: rgba(77, 229, 255, 0.22);
      transform: translateY(-2px);
      box-shadow: 0 0 32px rgba(77, 229, 255, 0.22);
    }
  }

  .hero-button.secondary {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <p className="hero-intro">AI Engineer · Agentic AI Automation · Computer Vision</p>;
  const two = (
    <h1 className="big-heading" style={{ color: '#4de5ff' }}>
      Malaika Saleem.
    </h1>
  );
  const three = (
    <h2 className="big-heading">
      I build intelligent systems that blend vision, language, and automation for real-world impact.
    </h2>
  );
  const four = (
    <p>
      I am a Gold Medalist Artificial Intelligence undergraduate with a CGPA of 3.5 and a strong
      passion for developing intelligent systems that solve real-world problems. Throughout my
      academic journey, I have gained hands-on experience in machine learning, deep learning,
      computer vision, and natural language processing by working on various AI-based projects and
      applications. I enjoy transforming ideas into practical solutions and continuously exploring
      new technologies to enhance my skills. Along with my technical background, I value teamwork,
      creativity, and problem-solving, and I strive to build impactful and user-focused AI solutions
      that can make everyday tasks smarter and more efficient.
    </p>
  );
  const five = (
    <div className="hero-buttons">
      <a className="hero-button" href="#projects">
        View Projects
      </a>
      <a className="hero-button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
        Resume
      </a>
      <a
        className="hero-button secondary"
        href="https://github.com/Malaika-Saleem"
        target="_blank"
        rel="noreferrer">
        GitHub
      </a>
      <a
        className="hero-button secondary"
        href="https://www.linkedin.com/in/malaika-saleem-07805127b/"
        target="_blank"
        rel="noreferrer">
        LinkedIn
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
