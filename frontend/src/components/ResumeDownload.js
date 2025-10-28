import './ResumeDownload.css';
import Resume from '../public/resume/resume.pdf';  // ← 修正路径（两个 ..）

function ResumeDownload() {
  return (
    <a 
      href={Resume}
      className="resume-download-button"
      download="Zhichen_Xu_Resume.pdf"  // ← 添加 download 属性
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="resume-icon">📄</span>
      <div className="resume-text">
        <span className="resume-title">DOWNLOAD</span>
        <span className="resume-subtitle">RESUME</span>
      </div>
      <span className="download-arrow">↓</span>
    </a>
  );
}

export default ResumeDownload;