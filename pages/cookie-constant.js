// import React from 'react';
// import CookieConsent from "react-cookie-consent";
// import { X } from 'lucide-react';

// const EnhancedCookieConsent = () => {
//   return (
//     <CookieConsent
//       location="bottom"
//       buttonText="Accept All Cookies"
//       declineButtonText="Decline"
//       enableDeclineButton
//       style={{
//         background: "rgba(0, 0, 0, 0.9)",
//         fontSize: "16px",
//         padding: "20px",
//         alignItems: "center",
//         justifyContent: "space-between"
//       }}
//       buttonStyle={{
//         background: "#2563eb",
//         color: "white",
//         fontSize: "14px",
//         padding: "12px 24px",
//         borderRadius: "6px",
//         fontWeight: "600"
//       }}
//       declineButtonStyle={{
//         background: "transparent",
//         border: "1px solid #ffffff40",
//         color: "white",
//         fontSize: "14px",
//         padding: "12px 24px",
//         borderRadius: "6px",
//         fontWeight: "600"
//       }}
//       contentStyle={{
//         flex: "1 0 300px",
//         margin: "0",
//         padding: "0",
//         color: "white"
//       }}
//       containerClasses="cookie-consent-container"
//       buttonWrapperClasses="cookie-consent-buttons"
//       expires={365}
//       cookieName="gyanoda_cookie_consent"
//       onAccept={() => {
        
//         console.log("Cookies accepted");
//       }}
//       onDecline={() => {
//         console.log("Cookies declined");
//       }}
//     >
//       <div className="flex items-center gap-4">
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
//           <p className="text-sm text-gray-300">
//             We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All Cookies", you consent to our use of cookies.{" "}
//             <a 
//               href="/policy" 
//               className="text-blue-400 hover:text-blue-300 underline"
//             >
//               Read our Cookie Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </CookieConsent>
//   );
// };

// export default EnhancedCookieConsent;

import React from 'react';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const EnhancedCookieConsent = () => {
  // Function to initialize analytics
  const initializeAnalytics = () => {
    // Google Analytics initialization
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      console.log('Analytics initialized');
    }
  };

  // Function to initialize marketing cookies
  const initializeMarketing = () => {
    // Facebook Pixel initialization
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('consent', 'grant');
      console.log('Marketing cookies initialized');
    }
  };

  // Function to initialize functional cookies
  const initializeFunctional = () => {
    // Set functional cookies for user preferences
    document.cookie = "theme=light; max-age=31536000; path=/";
    document.cookie = "language=en; max-age=31536000; path=/";
    console.log('Functional cookies initialized');
  };

  // Function to initialize essential cookies
  const initializeEssential = () => {
    // Set essential cookies (these are always needed)
    document.cookie = "session=true; path=/";
    console.log('Essential cookies initialized');
  };

  // Main function to handle cookie acceptance
  const handleAccept = (acceptedByScrolling) => {
    try {
      // Initialize all cookie types
      initializeEssential();
      initializeAnalytics();
      initializeMarketing();
      initializeFunctional();

      // Save user preferences
      localStorage.setItem('cookiePreferences', JSON.stringify({
        analytics: true,
        marketing: true,
        functional: true,
        essential: true,
        acceptedAt: new Date().toISOString(),
        acceptedByScrolling
      }));

      // You can trigger any additional functions here
      initializeCustomFeatures();
      
      console.log('All cookies accepted and initialized successfully');
    } catch (error) {
      console.error('Error in cookie initialization:', error);
    }
  };

  // Function to handle cookie decline
  const handleDecline = () => {
    try {
      // Only initialize essential cookies
      initializeEssential();

      // Save user preferences
      localStorage.setItem('cookiePreferences', JSON.stringify({
        analytics: false,
        marketing: false,
        functional: false,
        essential: true,
        declinedAt: new Date().toISOString()
      }));

      // Optionally, clean up any existing non-essential cookies
      cleanupNonEssentialCookies();

      console.log('Cookie consent declined, only essential cookies enabled');
    } catch (error) {
      console.error('Error in handling cookie decline:', error);
    }
  };

  // Function to cleanup non-essential cookies
  const cleanupNonEssentialCookies = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const cookieName = cookie.split('=')[0].trim();
      // List of essential cookies that shouldn't be deleted
      const essentialCookies = ['session', 'XSRF-TOKEN', 'gyanoda_cookie_consent'];
      
      if (!essentialCookies.includes(cookieName)) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
      }
    }
  };

  // Function to initialize custom features
  const initializeCustomFeatures = () => {
    // Initialize any custom features that depend on cookies
    // For example: chat widgets, recommendation systems, etc.
    console.log('Custom features initialized');
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All Cookies"
      declineButtonText="Decline"
      enableDeclineButton
      style={{
        background: "rgba(0, 0, 0, 0.9)",
        fontSize: "16px",
        padding: "20px",
        alignItems: "center",
        justifyContent: "space-between"
      }}
      buttonStyle={{
        background: "#2563eb",
        color: "white",
        fontSize: "14px",
        padding: "12px 24px",
        borderRadius: "6px",
        fontWeight: "600"
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #ffffff40",
        color: "white",
        fontSize: "14px",
        padding: "12px 24px",
        borderRadius: "6px",
        fontWeight: "600"
      }}
      contentStyle={{
        flex: "1 0 300px",
        margin: "0",
        padding: "0",
        color: "white"
      }}
      containerClasses="cookie-consent-container"
      buttonWrapperClasses="cookie-consent-buttons"
      expires={365}
      cookieName="gyanoda_cookie_consent"
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
          <p className="text-sm text-gray-300">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All Cookies", you consent to our use of cookies.{" "}
            <a 
              href="/policy" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Read our Cookie Policy
            </a>
          </p>
        </div>
      </div>
    </CookieConsent>
  );
};

export default EnhancedCookieConsent;