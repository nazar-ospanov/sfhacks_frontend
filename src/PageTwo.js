// src/AccessibilityPage.js
import React from 'react';
import './App.css'; // Use the consolidated CSS (which includes accessible-mode overrides)

function PageTwo() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Accessibility Guidelines</h1>
      </header>

      <section className="page-section">
        <p>
          Ensuring your website is accessible means creating a digital space where every user—regardless of abilities or disabilities—can interact with and understand your content. The guidelines below are based on the principles outlined by the&nbsp;  
          <a 
            href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" 
            target="_blank" 
            rel="noopener noreferrer">
            W3C Web Accessibility Initiative Fundamentals
          </a> and serve as a roadmap to building inclusive web experiences.
        </p>
      </section>

      <section className="page-section">
        <h2>1. Perceivable</h2>
        <p>
          Information and user interface components must be presented in ways that can be perceived by all users. When content is perceivable, users can receive the information through sight, sound, or touch.
        </p>
        <ul>
          <li>
            <strong>Text Alternatives:</strong> Provide descriptive alt text for images, icons, charts, and other non-text content so that assistive technologies, such as screen readers, can convey meaning to users who are visually impaired.
          </li>
          <li>
            <strong>Captions and Transcripts:</strong> Offer captions for videos and transcripts for audio content to support users who are deaf or hard of hearing.
          </li>
          <li>
            <strong>Flexible Presentation:</strong> Allow users to change text sizes, colors, and layouts without breaking the content. High contrast options and resizable text improve readability for those with visual impairments.
          </li>
          <li>
            <strong>Visual Hierarchy:</strong> Use headings, lists, and other semantic elements to structure content clearly. This helps users navigate and understand the relationships between different pieces of information.
          </li>
        </ul>
        <p>
          By ensuring all content is perceivable, you make it possible for users to obtain the necessary information using their preferred modes of interaction.
        </p>
      </section>

      <section className="page-section">
        <h2>2. Operable</h2>
        <p>
          A website should be easy to navigate and interact with, regardless of the user's input method. Operability ensures that users can perform all necessary actions without barriers.
        </p>
        <ul>
          <li>
            <strong>Keyboard Navigation:</strong> Ensure that all interactive elements such as links, buttons, and forms can be accessed and operated using a keyboard alone, catering to users who cannot use a mouse.
          </li>
          <li>
            <strong>Consistent Navigation:</strong> Implement clear, predictable navigation menus and focus indicators so that users always know where they are and where to go next.
          </li>
          <li>
            <strong>Adjustable Timing:</strong> Provide users with control over timed content. For example, allow them to pause, stop, or extend time limits on interactive elements and content that moves automatically.
          </li>
          <li>
            <strong>Avoiding Triggers:</strong> Minimize the use of flashing or blinking content to prevent seizures or other adverse reactions for users with photosensitive conditions.
          </li>
        </ul>
        <p>
          When your site is operable, all users can navigate it effectively—whether they are using a keyboard, a touchscreen, or other assistive devices.
        </p>
      </section>

      <section className="page-section">
        <h2>3. Understandable</h2>
        <p>
          Your website should be designed so that its content and operation are easy to comprehend. Clear, predictable, and consistent interfaces help users navigate with confidence.
        </p>
        <ul>
          <li>
            <strong>Clear Language:</strong> Write in plain language and avoid overly complex vocabulary. This makes your content more accessible to users with cognitive disabilities or those who speak English as a second language.
          </li>
          <li>
            <strong>Consistent Layout:</strong> Use uniform layouts, colors, and fonts throughout your website so that users quickly learn where to find information.
          </li>
          <li>
            <strong>Instructions and Feedback:</strong> Provide clear instructions for completing tasks and offer immediate feedback when users make errors. Label form fields, provide examples, and use error messages that guide users on how to correct mistakes.
          </li>
          <li>
            <strong>Readable Content:</strong> Ensure that text is legible by using appropriate font sizes, line heights, and contrast. This not only benefits users with visual impairments but also enhances the reading experience for everyone.
          </li>
        </ul>
        <p>
          By making content understandable, you reduce the cognitive load for your users and help them interact with your site more intuitively.
        </p>
      </section>

      <section className="page-section">
        <h2>4. Robust</h2>
        <p>
          Robustness means that your website’s content is reliable and works well across different devices, browsers, and assistive technologies. This not only helps current users but also ensures long-term accessibility.
        </p>
        <ul>
          <li>
            <strong>Standards Compliance:</strong> Write code that adheres to modern web standards (HTML5, CSS3, and JavaScript best practices). This improves compatibility with a wide range of user agents and assistive technologies.
          </li>
          <li>
            <strong>Semantic Markup:</strong> Use semantic HTML elements to add meaning to your content. Semantic tags like <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;aside&gt;</code> provide better context for screen readers and search engines.
          </li>
          <li>
            <strong>Cross-Browser and Device Testing:</strong> Regularly test your website on multiple browsers and devices to catch and resolve compatibility issues. This includes mobile devices, tablets, and desktop environments.
          </li>
          <li>
            <strong>Progressive Enhancement:</strong> Start with a baseline that supports all users, then layer on advanced features for those with browsers that support them. This ensures a consistent experience regardless of technology.
          </li>
        </ul>
        <p>
          Focusing on robustness helps future-proof your website by ensuring it continues to function well as new devices and technologies emerge.
        </p>
      </section>

      <section className="page-section">
        <p>
          By following these guidelines, you create a more inclusive web environment that benefits everyone—from users with disabilities to those who prefer different devices or assistive technologies. For more detailed recommendations and resources, please refer to the&nbsp; 
          <a 
            href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" 
            target="_blank" 
            rel="noopener noreferrer">
            official W3C WAI Accessibility Fundamentals
          </a> page.
        </p>
      </section>
    </div>
  );
}

export default PageTwo;
