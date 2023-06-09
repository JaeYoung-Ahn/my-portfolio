import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Jay</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Project</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://www.github.com/" className="footer__social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; All right reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer