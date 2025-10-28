import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next"; // ← 添加

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Zhichen Xu</h3>
          <p>{t("footer.position")}</p>
        </div>

        <div className="footer-section">
          <h4>{t("footer.quickLinks")}</h4>
          <div className="footer-links">
            <Link to="/">{t("footer.home")}</Link>
            <Link to="/about">{t("footer.about")}</Link>
            <Link to="/contact">{t("footer.contact")}</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>{t("footer.contactTitle")}</h4>
          <p>zhichenxuucf@gmail.com</p>
          <p>Winter Park, FL</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Zhichen Xu. {t("footer.allRights")}.</p>
      </div>
    </footer>
  );
}

export default Footer;
