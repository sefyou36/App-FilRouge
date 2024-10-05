import React from "react";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_container_box">
          <div className="footer_container_box_logo">
            <Image
              src="/images/icons/logo.png"
              alt="MealSwift"
              width={50}
              height={50}
            />
            <Link href="/">MealSwift</Link>
          </div>
          <p>Give everybody easy access to anything in their city.</p>
          <div className="footer_container_box_social">
            <Link
              href="https://www.facebook.com"
              className="footer_container_box_social_icon"
            >
              <Image
                src="/images/icons/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.twitter.com"
              className="footer_container_box_social_icon"
            >
              <Image
                src="/images/icons/twitter.png"
                alt="Twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.instagram.com"
              className="footer_container_box_social_icon"
            >
              <Image
                src="/images/icons/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>

        <div className="footer_container_box">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer_container_box">
          <h3>Support</h3>
          <ul>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>

        <div className="footer_container_box">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/cookies">Cookies</Link>
            </li>
          </ul>
        </div>

        <div className="footer_container_box">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates.</p>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
