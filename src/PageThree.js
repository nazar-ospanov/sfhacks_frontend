// src/PageThree.js
import React from 'react';
import './pageCss.css';

function PageThree() {
  return (
    <div className="page-container">
      <section className="about-section">
      <h1 className="page-heading">About Us</h1>
      <p className="page-description">
        <strong>We are <span className="aina">AIna</span>{' '}

</strong> — an intelligent, AI-powered platform redefining how the web is experienced through the lens of accessibility.
      </p>
      </section>

      <section className="about-section">
        <h2 className="sub-heading">Our Mission</h2>
        <p>
          <span className="aina">AIna</span>{' '}

 is built to empower developers, designers, and everyday users by providing automated, data-rich compliance analysis
          of web accessibility standards. We believe that digital inclusivity is a right, not a feature — and our tools are designed to reflect that.
        </p>
      </section>

      <section className="about-section">
        <h2 className="sub-heading">What We Do</h2>
        <p>
          Using state-of-the-art scraping technologies, <span className="aina">AIna</span>{' '}

 deeply analyzes the structural DNA of any website, extracting HTML elements,
          inline and external CSS stylesheets, and visual design metrics such as color contrast, font pairing, and responsive layout behavior.
        </p>
        <p>
          Our platform evaluates this data using <strong>Google's Gemini AI</strong> and benchmarks it against the <strong>WCAG 2.1</strong> accessibility guidelines —
          providing an intuitive accessibility grade (out of 7) along with a detailed, actionable review.
        </p>
      </section>

      <section className="about-section">
        <h2 className="sub-heading">Who It's For</h2>
        <p>
          Whether you’re a developer refining your site's accessibility footprint or an individual with visual, cognitive, or sensory sensitivities —
          <span className="aina">AIna</span>{' '}

 empowers you to understand a site's accessibility before you ever visit it.
        </p>
        <p>
          From users with epilepsy or motion sensitivity to those affected by low contrast, colorblindness, or screen reader dependence — <span className="aina">AIna</span>{' '}

 helps make the web safer and more predictable.
        </p>
      </section>

      <section className="about-section">
  <h2 className="sub-heading">Why Accessibility Matters</h2>
  <p>
    Over <strong>2.2 billion people</strong> globally have a vision impairment or experience some form of visual disability, according to the <a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank" rel="noopener noreferrer">World Health Organization</a>.
  </p>
  <p>
    Despite this, a 2024 analysis by <a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">WebAIM</a> revealed that <strong>96.3% of the top 1 million websites</strong> still have detectable WCAG 2 failures — most commonly low contrast text, missing alt text, and poor keyboard navigation.
  </p>
  <p>
    For individuals with epilepsy, flashing animations or inconsistent visual cues can trigger dangerous responses. Others with cognitive challenges or low vision often struggle with poor font sizing, unclear layouts, or inaccessible forms.
  </p>
  <p>
    <span className="aina">AIna</span>{' '}

 was built to make the internet safer, smarter, and more human — one accessible website at a time.
  </p>
</section>

      <section className="about-section">
        <h2 className="sub-heading">Open Source Catalog</h2>
        <p>
          All scanned websites are stored in a live, open-access catalog powered by <strong>MongoDB Atlas</strong> and hosted securely on <strong>AWS</strong>.
          This catalog allows anyone — from developers to researchers — to explore accessibility trends and benchmarks across the web.
        </p>
      </section>

      <section className="about-section">
        <h2 className="sub-heading">Coming Soon: Blockchain Certificates</h2>
        <p>
          We're working on a secure, verifiable system to issue blockchain-backed tokens to sites that meet or exceed accessibility standards.
          These tokens act as **immutable proof** that a site has passed accessibility benchmarks — promoting trust, transparency, and innovation in inclusive design.
        </p>
      </section>

      <section className="about-section">
        <h2 className="sub-heading">Our Tech Stack</h2>
        <ul className="tech-list">
          <li>Google Gemini 2.0 Flash AI for natural language evaluation</li>
          <li>React & TypeScript for scalable front-end architecture</li>
          <li>Node.js, Express, and JSDOM for full-stack scraping & processing</li>
          <li>MongoDB Atlas (hosted on AWS) for powerful, secure data storage</li>
          <li>Blockchain (coming soon) for verifiable web accessibility certificates</li>
        </ul>
      </section>

      <section className="about-section">
        <p>
          <strong><span className="aina">AIna</span>{' '}

 isn’t just a scanner — it’s your intelligent ally in building a more accessible digital world.</strong><br />
          Together, we can shape a future where every site is safe, clear, and inclusive for all.
        </p>
      </section>

      <footer className="about-section">
        <p className="footer-text">
          Built at <strong>SFHacks 2025</strong> by <strong>Eldar Hasanov</strong>, <strong>Nazar Ospanov</strong>, and <strong>Nurzhan Abdrassilov</strong>.
        </p>
      </footer>
    </div>
  );
}

export default PageThree;
