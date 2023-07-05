import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_3.jpg`} alt="" />
      </Link>
      <header>
        <h2>TAESEOP PARK</h2>
        <p><a href="mailto:tspark408@naver.com">tspark408@naver.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>서강대학교 전자공학과 학사 졸업<a href="https://sogang.ac.kr/">Sogang EE</a>\n
        서강대학교 전자공학과 석사 졸업 in NICE LAB <a href="https://nice.sogang.ac.kr/">NICELAB</a>\n
        서강대학교 전자공학과 박사 과정 in NICE LAB <a href="https://nice.sogang.ac.kr/">NICELAB</a>\n
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; TAESEOP PARK <Link to="/">imsupsup.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
