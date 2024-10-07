import { useEffect, useState } from "react";

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoded, setIsLoded] = useState(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoded("loaded");
    });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 700);

    return () => clearTimeout(timer);
  });
  return (
    showLoader && (
      <div id="preloader" className={`preloader ${isLoded}`}>
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="G" className="letters-loading">
              G
            </span>
            <span data-text-preloader="Y" className="letters-loading">
              Y
            </span>
            <span data-text-preloader="A" className="letters-loading">
              A
            </span>
            <span data-text-preloader="N" className="letters-loading">
              N
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="D" className="letters-loading">
              D
            </span>
            <span data-text-preloader="A" className="letters-loading">
              A
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
