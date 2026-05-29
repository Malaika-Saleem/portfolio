import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAchievementsSection = styled.section`
  max-width: 1000px;

  .achievement-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-gap: 24px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(180px, 1fr));
    }

    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
  }

  .achievement-card {
    position: relative;
    padding: 30px;
    border-radius: var(--border-radius);
    background: rgba(11, 24, 45, 0.9);
    box-shadow: 0 20px 60px rgba(4, 12, 28, 0.45);
    border: 1px solid rgba(77, 229, 255, 0.12);
    transition: var(--transition);
    overflow: hidden;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 28px 80px rgba(77, 229, 255, 0.22);
      background: rgba(11, 24, 45, 1);
    }

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(77, 229, 255, 0.16), transparent 25%);
      opacity: 0.75;
      pointer-events: none;
    }

    h3 {
      position: relative;
      margin-bottom: 15px;
      font-size: clamp(20px, 2vw, 24px);
      color: var(--white);
      z-index: 1;
    }

    p {
      position: relative;
      z-index: 1;
      margin: 0;
      color: var(--light-slate);
      font-size: var(--fz-md);
      line-height: 1.7;
    }
  }
`;

const achievements = [
  {
    title: 'Gold Medalist',
    description: 'Awarded top academic honors in Bachelor of Science in Artificial Intelligence.',
  },
  {
    title: 'Bronze Medalist',
    description: 'Recognized for exceptional project performance and academic achievement.',
  },
  {
    title: 'Rector’s List of Honor',
    description: 'Maintained outstanding academic excellence at FAST University.',
  },
  {
    title: 'Dean’s List of Honor',
    description: 'Sustained a high CGPA while balancing research and internships.',
  },
  {
    title: 'Ambassador',
    description: 'Represented Inspiring Women Pakistan in AI mentorship and outreach programs.',
  },
];

const Achievements = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAchievementsSection id="achievements" ref={revealContainer}>
      <h2 className="numbered-heading">Achievements</h2>
      <div className="achievement-grid">
        {achievements.map(({ title, description }, i) => (
          <div key={i} className="achievement-card">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </StyledAchievementsSection>
  );
};

export default Achievements;
