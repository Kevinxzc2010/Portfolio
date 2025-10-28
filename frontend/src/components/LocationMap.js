import './LocationMap.css';

function LocationMap() {
  return (
    <div className="location-map-widget creative">
      <div className="map-header">
        <h3>📍 BASED IN</h3>
      </div>
      
      <div className="creative-map">
        <div className="map-bg">
          <div className="location-marker">
            <div className="pulse-dot active"></div>
            <div className="marker-pin">📍</div>
          </div>
          
          <div className="location-label">
            <div className="label-box">
              <span className="city">WINTER PARK</span>
              <span className="state">FLORIDA, USA</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="map-stats">
        <div className="stat-item">
          <span className="stat-value">EST</span>
          <span className="stat-label">TIME ZONE</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">FL</span>
          <span className="stat-label">STATE</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">🌞</span>
          <span className="stat-label">SUNNY</span>
        </div>
      </div>
    </div>
  );
}

export default LocationMap;