import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 60px;
    align-items: start;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  p {
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.85;
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-gap: 12px;
    padding: 0;
    margin: 30px 0 0 0;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(140px, 1fr));
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    li {
      position: relative;
      padding: 18px 20px;
      border-radius: var(--border-radius);
      background: rgba(77, 229, 255, 0.08);
      border: 1px solid rgba(77, 229, 255, 0.12);
      color: var(--white);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      font-weight: 500;
      transition: var(--transition);

      &:hover {
        background: rgba(77, 229, 255, 0.16);
        transform: translateY(-2px);
      }

      &:before {
        content: '';
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 360px;
  margin: 0 auto;

  @media (max-width: 900px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: calc(var(--border-radius) * 1.25);
    background: linear-gradient(180deg, rgba(77, 229, 255, 0.08), rgba(173, 101, 255, 0.1));
    overflow: hidden;
    border: 1px solid rgba(77, 229, 255, 0.18);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-6px, -6px);

      &:after {
        transform: translate(10px, 10px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: calc(var(--border-radius) * 1.25);
      mix-blend-mode: multiply;
      filter: grayscale(80%) contrast(1.05) brightness(0.92);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: calc(var(--border-radius) * 1.25);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background: radial-gradient(circle at top left, rgba(77, 229, 255, 0.18), transparent 22%);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid rgba(77, 229, 255, 0.3);
      top: 16px;
      left: 16px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'PyTorch',
    'TensorFlow',
    'Computer Vision',
    'NLP',
    'LangChain',
    'LlamaIndex',
    'Agentic AI',
    'Vision-Language Models',
    'RAG',
    'Generative AI',
    'GANs',
    'n8n',
    'Flask',
    'Node.js',
    'SQL',
    'AI Automation',
    'Multi-Agent Systems',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! I'm Malaika Saleem, a Gold Medalist Artificial Intelligence undergraduate with a
              CGPA of 3.5 and a strong passion for developing intelligent systems that solve
              real-world problems. Throughout my academic journey, I have gained hands-on experience
              in machine learning, deep learning, computer vision, and natural language processing
              by working on various AI-based projects and applications.
            </p>

            <p>
              I enjoy transforming ideas into practical solutions and continuously exploring new
              technologies to enhance my skills. Along with my technical background, I value
              teamwork, creativity, and problem-solving, and I strive to build impactful and
              user-focused AI solutions that can make everyday tasks smarter and more efficient.
            </p>

            <p>
              I’m passionate about building generative AI, multi-agent systems, and automation
              pipelines that empower teams, accelerate insights, and create safer, more efficient
              environments.
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Malaika Saleem"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
