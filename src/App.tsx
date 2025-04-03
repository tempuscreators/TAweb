import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="fluid-shape shape-1"></div>
      <div className="fluid-shape shape-2"></div>
      <div className="fluid-shape shape-3"></div>
      
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <img src="/new_TA_logo-removebg-preview (1).png" alt="Tempus Aedificator" className="logo-image" />
          </div>
          <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li className="cta-button"><a href="#contact" onClick={() => setMenuOpen(false)}>Get Started</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-shape left-shape"></div>
        <div className="hero-shape right-shape"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="animated-text">
              <h1>TEMPUS<br />AEDIFICATOR</h1>
              <div className="gradient-line"></div>
            </div>
            <p>Creating <span className="highlight">tailored software solutions</span> that give business owners their time back</p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore Solutions</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            
            <div className="floating-cube">
              <div className="cube-face face-front"></div>
              <div className="cube-face face-back"></div>
              <div className="cube-face face-right"></div>
              <div className="cube-face face-left"></div>
              <div className="cube-face face-top"></div>
              <div className="cube-face face-bottom"></div>
              
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i} 
                  className="data-point" 
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.5 + Math.random() * 0.5
                  }}
                ></div>
              ))}
              
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i} 
                  className="data-line" 
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${Math.random() * 20}%`,
                    width: `${30 + Math.random() * 50}%`,
                    transform: `rotate(${Math.random() * 360}deg)`
                  }}
                ></div>
              ))}
            </div>
            
            <div className="code-snippet snippet-1">
              {`function createAedificator() {
  const system = new TempusCore();
  system.initialize({
    ai: true,
    analytics: true,
    integration: true
  });
  return system;
}`}
            </div>
            
            <div className="code-snippet snippet-2">
              {`// Intelligent workflow
const process = async (data) => {
  const results = await AI.analyze(data);
  return results.optimize();
}`}
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-header">
          <span className="section-tag">Our Expertise</span>
          <h2>Innovative Solutions</h2>
        </div>
        <div className="services-grid">
          {[
            {
              icon: '⚡',
              title: 'AI Integration',
              description: 'Custom AI solutions that automate complex tasks and decision-making processes, giving you back valuable time.',
              color: 'gradient-1'
            },
            {
              icon: '⚙️',
              title: 'Process Aedificator',
              description: 'Tailored software development that transforms your unique business processes into efficient, automated workflows.',
              color: 'gradient-2'
            },
            {
              icon: '📊',
              title: 'Analytics & Insights',
              description: 'Turn your business data into actionable insights, helping you make faster, smarter decisions with confidence.',
              color: 'gradient-3'
            }
          ].map((service, index) => (
            <div className={`service-card ${service.color}`} key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Learn more →</a>
              <div className="card-blob"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-shape"></div>
        
        <div className="about-container">
          <div className="about-visual">
            <div className="about-image">
              <div className="image-overlay"></div>
            </div>
            <div className="floating-element elem-1"></div>
            <div className="floating-element elem-2"></div>
          </div>
          <div className="about-content">
            <span className="section-tag">Who We Are</span>
            <h2>Your Technology Partner</h2>
            <p>At Tempus Aedificator, we specialize in developing custom software and AI solutions that give business owners their most valuable asset back - time. Our expert team combines deep technical expertise with business acumen to create solutions that automate, innovate, and transform your operations.</p>
            <div className="stats-container">
              <div className="stat-item">
                <h3>95%</h3>
                <p>Time Saved</p>
              </div>
              <div className="stat-item">
                <h3>200+</h3>
                <p>Custom Solutions</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-shape"></div>
        
        <div className="contact-container">
          <div className="contact-content">
            <span className="section-tag">Get In Touch</span>
            <h2>Transform Your Business</h2>
            <p>Ready to reclaim your time and transform your business operations? Contact us today to discover how our tailored software and AI solutions can automate your workflows and boost efficiency.</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-group">
              <textarea id="message" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-wave"></div>
        
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo">
                <img src="/new_TA_logo-removebg-preview (1).png" alt="Tempus Aedificator" className="logo-image footer-logo-image" />
              </div>
              <p>Crafting custom software solutions that create time for what matters</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">AI Integration</a></li>
                  <li><a href="#services">Process Aedificator</a></li>
                  <li><a href="#services">Analytics & Insights</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                  <li>info@tempusaedificator.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>123 Tech Park, Innovation City</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tempus Aedificator. All rights reserved.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">In</a>
              <a href="#" className="social-icon">Tw</a>
              <a href="#" className="social-icon">Fb</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
