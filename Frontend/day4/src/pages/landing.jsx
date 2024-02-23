// LandingPage.jsx

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'E:/advApp/job-app/src/assets/css/landing.css';
const LandingPage = () => {
  useEffect(() => {
    const featuresSection = document.getElementById('features');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    const socialMediaSection = document.getElementById('social-media');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isInViewport(featuresSection)) {
        featuresSection.classList.add('visible');
      }

      if (isInViewport(aboutSection)) {
        aboutSection.classList.add('visible');
      }

      if (isInViewport(contactSection)) {
        contactSection.classList.add('visible');
      }

      if (isInViewport(socialMediaSection)) {
        socialMediaSection.classList.add('visible');
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="auth-link"><Link to="/registration">Register</Link></li>
          <li className="auth-link"><Link to="/signin">SignIn</Link></li>
        </ul>
      </nav>

      {/* Welcome Section with Images */}
      <section id="welcome">
        <div className="welcome-content">
          {/* Add your image or carousel component here */}
          <h2>Welcome to Our Website</h2>
          <p>Discover amazing features and services...</p>
        </div>
      </section>

      {/* Main Section */}
      <main>
        {/* Features Section */}
        <section id="features">
  <h2>Features</h2>

  <div className="content-box feature-item">
    <h3 className="feature-subtitle">Job Search</h3>
    <p>Explore a vast database of job opportunities tailored to your skills and preferences.</p>
  </div>

  <div className="content-box feature-item">
    <h3 className="feature-subtitle">Resume Builder</h3>
    <p>Create a professional resume using our intuitive resume builder tool to stand out to employers.</p>
  </div>

  <div className="content-box feature-item">
    <h3 className="feature-subtitle">Apply Easily</h3>
    <p>Effortlessly apply to jobs with just a few clicks, making the application process quick and simple.</p>
  </div>

  {/* Add more feature items as needed */}
</section>

        {/* About Section */}
        <section id="about">
          <h2>About Us</h2>
          <p>Share information about your company or project.</p>
          {/* Add more content as needed */}
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Provide contact information or a contact form here.</p>
          {/* Add more content as needed */}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <section id="social-media">
          <h2>Follow Us</h2>
          {/* Add social media icons and links here */}
        </section>
      </footer>
    </div>
  );
};

export default LandingPage;
