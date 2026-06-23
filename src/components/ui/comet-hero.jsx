import React from 'react';

const styles = `
.circle-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  perspective: 1500px;
}

.circle-wrapper {
  position: absolute;
  transform-style: preserve-3d;
  pointer-events: none;
}

.circle1 {
  transform: rotateX(60deg) rotateY(20deg) rotateZ(5deg);
  top: 0;
  left: -15%;
  width: 75%;
  height: 75%;
}

.circle2 {
  transform: rotateX(-60deg) rotateY(20deg) rotateZ(5deg);
  top: -10%;
  left: 25%;
  width: 100%;
  height: 100%;
}

.circle3 {
  transform: rotateX(60deg) rotateY(-20deg) rotateZ(5deg);
  top: 20%;
  left: -5%;
  width: 80%;
  height: 80%;
}

.circle4 {
  transform: rotateX(-60deg) rotateY(-20deg) rotateZ(5deg);
  top: 15%;
  left: 20%;
  width: 100%;
  height: 100%;
}
`;

export function CometHero() {
  return (
    <>
      <style>{styles}</style>
      <div className="circle-container">
        {/* Circle 1 - Primary Olive */}
        <div className="circle-wrapper circle1">
          <svg viewBox="0 0 600 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8d9f70" stopOpacity="1" />
                <stop offset="100%" stopColor="#0f291e" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="300" cy="300" r="250" fill="none" stroke="url(#grad1)" strokeWidth="0.75"
                    strokeDasharray="520 1050" strokeDashoffset="20">
              <animate attributeName="stroke-dashoffset" from="20" to="1590" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Circle 2 - Deep Green */}
        <div className="circle-wrapper circle2">
          <svg viewBox="0 0 800 800" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="-20%" stopColor="#0f291e" stopOpacity="0.05" />
                <stop offset="80%" stopColor="#0f291e" stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="300" fill="none" stroke="url(#grad2)" strokeWidth="0.75"
                    strokeDasharray="900 985" strokeDashoffset="0">
              <animate attributeName="stroke-dashoffset" from="0" to="-1885" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Circle 3 - Light Olive */}
        <div className="circle-wrapper circle3">
          <svg viewBox="0 0 600 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9AAF42" stopOpacity="1" />
                <stop offset="100%" stopColor="#8d9f70" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="300" cy="300" r="150" fill="none" stroke="url(#grad3)" strokeWidth="0.75"
                    strokeDasharray="400 542" strokeDashoffset="60">
              <animate attributeName="stroke-dashoffset" from="60" to="1002" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Circle 4 - Soft Contrast */}
        <div className="circle-wrapper circle4">
          <svg viewBox="0 0 800 800" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="-20%" stopColor="#f6f5f2" stopOpacity="0.05" />
                <stop offset="80%" stopColor="#8d9f70" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="200" fill="none" stroke="url(#grad4)" strokeWidth="0.75"
                    strokeDasharray="500 756" strokeDashoffset="300">
              <animate attributeName="stroke-dashoffset" from="300" to="-956" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </>
  );
}
