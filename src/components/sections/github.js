import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledGitHubSection = styled.section`
  max-width: 1000px;

  .github-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    grid-gap: 30px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .github-panel,
  .github-card {
    padding: 35px;
    border-radius: var(--border-radius);
    background: rgba(11, 23, 44, 0.95);
    border: 1px solid rgba(77, 229, 255, 0.14);
    box-shadow: 0 20px 60px rgba(4, 12, 28, 0.45);
  }

  .github-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .github-header {
    margin-bottom: 30px;
  }

  .github-header h3 {
    margin-bottom: 16px;
    color: var(--white);
    font-size: clamp(28px, 3vw, 34px);
  }

  .github-header p {
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.75;
  }

  .github-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    grid-gap: 18px;

    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
  }

  .stat-card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: var(--border-radius);
    background: rgba(6, 18, 41, 0.95);
    border: 1px solid rgba(77, 229, 255, 0.08);
    color: var(--lightest-slate);

    span {
      font-size: clamp(22px, 3vw, 26px);
      font-weight: 700;
      color: var(--white);
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      color: var(--light-slate);
      line-height: 1.6;
    }
  }

  .github-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .github-card h3 {
    margin-bottom: 16px;
    color: var(--white);
  }

  .github-card p {
    margin-bottom: 28px;
    color: var(--light-slate);
    line-height: 1.75;
  }

  .github-link {
    ${({ theme }) => theme.mixins.button};
    width: fit-content;
    background: rgba(77, 229, 255, 0.16);
    border-color: rgba(77, 229, 255, 0.4);
    color: var(--white);
  }
`;

const GitHub = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {return;}
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledGitHubSection id="github" ref={revealContainer}>
      <h2 className="numbered-heading">GitHub & Contributions</h2>
      <div className="github-grid">
        <div className="github-panel">
          <div className="github-header">
            <h3>Active AI development and open-source experimentation.</h3>
            <p>
              Explore repositories featuring agentic automation, vision-language systems, and NLP
              pipelines built for real-world decision workflows.
            </p>
          </div>

          <div className="github-stats">
            <div className="stat-card">
              <span>AI Automation</span>
              <p>Connected pipelines and multi-agent workflows for intelligent monitoring.</p>
            </div>
            <div className="stat-card">
              <span>Vision Models</span>
              <p>
                Computer vision systems designed for surveillance, anomaly detection, and counting.
              </p>
            </div>
          </div>
        </div>

        <div className="github-card">
          <h3>View my GitHub profile</h3>
          <p>
            Visit the repository collection for AI engineering work, generative systems, and
            production-ready automation tools.
          </p>
          <a
            className="github-link"
            href="https://github.com/Malaika-Saleem"
            target="_blank"
            rel="noreferrer">
            Open GitHub
          </a>
        </div>
      </div>
    </StyledGitHubSection>
  );
};

export default GitHub;
