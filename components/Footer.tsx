export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-id">
            <b>Yash Rajak</b>
            <span>Software Engineer — Mumbai, India</span>
          </div>
          <div className="foot-links">
            <a href="mailto:hello@yashrajak.dev" data-cursor="TALK">
              Email
            </a>
            <a href="https://github.com/" data-cursor="CODE ↗">
              GitHub
            </a>
            <a href="https://linkedin.com/" data-cursor="CODE ↗">
              LinkedIn
            </a>
            <a href="#hero">Portfolio</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Yash Rajak</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
