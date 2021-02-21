import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Particles
        className="particle-js"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
        }}
        params={{
          particles: {
            color: {
              value: '#2b8a9d',
            },
            size: {
              value: '2',
            },
            number: {
              value: '150',
            },
            line_linked: {
              enable: {
                auto: true,
              },
              distance: '150',
              color: '#2b8a9d',
              opacity: '0.4',
              width: '1',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Link className="hero-cta" to="about" smooth duration={1000}>
            <p>
              <span className="cta-btn cta-btn--hero">{cta || 'Know more'}</span>
            </p>
          </Link>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
