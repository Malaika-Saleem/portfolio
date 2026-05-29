import { css } from 'styled-components';

const button = css`
  color: var(--white);
  background: rgba(77, 229, 255, 0.1);
  border: 1px solid rgba(77, 229, 255, 0.45);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1rem 1.5rem;
  transition: var(--transition);
  backdrop-filter: blur(10px);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 30px rgba(77, 229, 255, 0.25);
    transform: translateY(-2px);
    background: rgba(77, 229, 255, 0.16);
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    color: var(--green);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.3em;
      background-color: var(--green);
      opacity: 0.6;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button,

  smallButton: css`
    color: var(--white);
    background: rgba(77, 229, 255, 0.1);
    border: 1px solid rgba(77, 229, 255, 0.45);
    border-radius: var(--border-radius);
    padding: 0.8rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 18px rgba(77, 229, 255, 0.2);
      transform: translateY(-2px);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--white);
    background: rgba(77, 229, 255, 0.12);
    border: 1px solid rgba(77, 229, 255, 0.5);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 24px rgba(77, 229, 255, 0.22);
      transform: translateY(-3px);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 14px 40px -18px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 50px -18px var(--navy-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
