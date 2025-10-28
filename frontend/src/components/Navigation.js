import { NavLink } from "react-router-dom";
import "./Navigation.css";
import SupremeLogo from "../assets/Supreme-Logo.png";
import UCFLogo from "../assets/UCF_Knights_logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState(new Date());

  // 时钟更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 格式化时间
  const formatTime = () => {
    return currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={SupremeLogo}
            alt="Supreme"
            style={{ height: "50px", width: "100px", display: "block" }}
          />
          <span
            style={{
              color: "black",
              fontSize: "1.8rem",
              fontWeight: "200",
              lineHeight: "1",
              margin: "-2px 0",
            }}
          >
            ×
          </span>
          <img
            src={UCFLogo}
            alt="UCF"
            style={{ height: "45px", width: "65px", display: "block" }}
          />
        </div>

        {/* 时钟 - 添加这个！！！ */}
        <div className="nav-clock">
          <span className="nav-clock-icon">🕐</span>
          <span className="nav-clock-time">{formatTime()}</span>
        </div>

        {/* 汉堡菜单 */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 导航链接 */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsOpen(false)}
            end
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsOpen(false)}
          >
            {t("nav.about")}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsOpen(false)}
          >
            {t("nav.contact")}
          </NavLink>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;