import React, {Component} from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div>
          <span>
              <img className="logo" src="/LandingPage/assets/givly@3x.png" alt="Givly"/>
          </span>
          <span>
            <h4>About</h4>
            <ul>
              <li><a>Privacy Policy</a></li>
              <li><a>Terms of Service</a></li>
              <li><br/><small>Copyright © 2019 Givly</small></li>
            </ul>
          </span>
          <span>
            <h4>Help</h4>
            <ul><li><a>Contact</a></li></ul>
            
          </span>
          <span className="footer-icons">
            <img src="/LandingPage/assets/app-store@3x.png" alt="App Store"/>
            <span> </span>
            <img src="/LandingPage/assets/google-play@3x.png" alt="Google Play"/>
          </span>
          <span className="footer-icons">
            <img src="/LandingPage/assets/facebook@3x.png" alt="Facebook"/>
            <span> </span>
            <img src="/LandingPage/assets/twitter@3x.png" alt="Twitter"/>
          </span>
        </div>
    </footer>
    );
  };
};

export default Footer;