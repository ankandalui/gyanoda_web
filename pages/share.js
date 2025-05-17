// pages/share.js or pages/share.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// At the top of your file
const SERVER_URI = "https://gyanoda.in/api/v1";
// App metadata - update with your actual values
const APP_METADATA = {
  name: 'Gyanoda',
  description: 'Your Digital PYQ with Video Solution for competitive exams',
  appStoreId: 'your-app-store-id', // Replace with your actual App Store ID
  playStoreId: 'com.gyanodapyq.studybloom24',
  appScheme: 'gyanoda://',
  primaryColor: '#4169E1',
  domain: 'gyanoda.com'
};

// Track page visits for analytics
const trackVisit = async (referrer, platform, action) => {
  try {
    // You can implement server-side analytics tracking here
    console.log('Share page visit:', { referrer, platform, action });
    
    // Example of server tracking call
    // await fetch('/api/analytics/track-share', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ referrer, platform, action })
    // });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

const SharePage = () => {
  const router = useRouter();
  const { videoId, ref } = router.query;
  
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [appOpened, setAppOpened] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  // App store links
  const APP_STORE_LINK = `https://apps.apple.com/app/${APP_METADATA.appStoreId}`;
  const PLAY_STORE_LINK = `https://play.google.com/store/apps/details?id=com.gyanodapyq.studybloom24`;

  // Fetch video details if available
  useEffect(() => {
    const fetchVideoData = async () => {
      if (!videoId) return;
      
      setLoading(true);
      
      try {
        // Make an API call to your backend to get the shared video data
        const response = await fetch(`${SERVER_URI}/shared-video/${videoId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch video data');
        }
        
        const data = await response.json();
        
        if (data.success && data.video) {
          setVideoData({
            id: videoId,
            title: data.video.questionText || 'Educational Video',
            description: data.video.courseName 
              ? `From ${data.video.courseName} course, ${data.video.year} year, ${data.video.subject} subject`
              : 'Learn important concepts for competitive exams',
            thumbnail: data.video.thumbnail?.url || '/placeholder-thumbnail.jpg',
            duration: data.video.duration || '10:30',
            subject: data.video.subject || 'General Knowledge',
            courseId: data.video.courseId,
            yearId: data.video.yearId,
            subjectId: data.video.subjectId
          });
        } else {
          // Fallback to placeholder data if the API doesn't return proper data
          setVideoData({
            id: videoId,
            title: 'Educational Video',
            description: 'Learn important concepts for competitive exams',
            thumbnail: 'https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?t=st=1741622926~exp=1741626526~hmac=0be22c8e1827904f37d8291eacc27ac879a86c6ed69b72d021562d1f2e555413&w=1380',
            duration: '10:30',
            subject: 'General Knowledge'
          });
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
        // Still set fallback data on error
        setVideoData({
          id: videoId,
          title: 'Digital PYQ with Video Solution ',
          description: 'Learn important concepts for competitive exams',
          thumbnail: '/placeholder-thumbnail.jpg',
          duration: '10:30',
          subject: 'General Knowledge'
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    // Detect device type on client side
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    const checkMobile = () => {
      return /android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
    };
    
    const checkIOS = () => {
      return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    };
    
    const checkAndroid = () => {
      return /android/i.test(userAgent);
    };
    
    const mobile = checkMobile();
    const ios = checkIOS();
    const android = checkAndroid();
    
    setIsMobile(mobile);
    setIsIOS(ios);
    setIsAndroid(android);
    
    // Track visit with device info
    trackVisit(
      ref || 'direct',
      ios ? 'ios' : (android ? 'android' : 'desktop'),
      'view'
    );

    // Try to open the app if we're on a mobile device
    if (mobile && videoId) {
      tryOpenApp();
    }
  }, [videoId, ref]);

  // const tryOpenApp = () => {
  //   if (!videoId) return;

  //   // Create deep link URL with the video ID
  //   const deepLink = `${APP_METADATA.appScheme}share?videoId=${videoId}`;
    
  //   // Record current time to determine if app was opened
  //   const startTime = Date.now();
    
  //   // Set a timeout to check if app was opened
  //   setTimeout(() => {
  //     if (document.hidden || document.webkitHidden) {
  //       // App was opened
  //       setAppOpened(true);
  //       trackVisit(ref || 'direct', isIOS ? 'ios' : 'android', 'app_opened');
  //     } else {
  //       // App was not opened, time is past threshold
  //       if (Date.now() - startTime > 2000) {
  //         // If more than 2 seconds passed and page is still visible, app wasn't opened
  //         trackVisit(ref || 'direct', isIOS ? 'ios' : 'android', 'store_redirect');
  //         redirectToStore();
  //       }
  //     }
  //   }, 2500);
    
  //   // Try to open the app
  //   window.location.href = deepLink;
  // };
// Enhanced tryOpenApp function for the web share page
const tryOpenApp = () => {
  if (!videoId) return;

  // Create deep link URL with the video ID
  const deepLink = `${APP_METADATA.appScheme}share?videoId=${videoId}`;
  
  // Create intent URL for Android
  // const intentUrl = `intent://gyanoda.com/share?videoId=${videoId}#Intent;scheme=https;package=${APP_METADATA.playStoreId};end`;
  const intentUrl = `intent://gyanoda.com/share?videoId=${videoId}#Intent;scheme=gyanoda;package=${APP_PACKAGE};end`;
       
  
  // For iOS use regular deep link, for Android use intent URL if possible
  const urlToOpen = isAndroid ? intentUrl : deepLink;
  
  // Set a timer to check if app opening was successful
  const checkRedirect = setTimeout(() => {
    // If we're still here after ~2 seconds, the app likely isn't installed
    window.location.href = isAndroid ? PLAY_STORE_LINK : APP_STORE_LINK;
  }, 2000);
  
  // Listen for visibility change to cancel redirect if app opens
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      clearTimeout(checkRedirect);
    }
  });
  
  // Try to open the app
  window.location.href = urlToOpen;
}
  const redirectToStore = () => {
    if (isIOS) {
      window.location.href = APP_STORE_LINK;
    } else if (isAndroid) {
      window.location.href = PLAY_STORE_LINK;
    }
  };

  // Handle when user manually clicks to open in app
  const handleOpenInApp = (e) => {
    e.preventDefault();
    trackVisit(ref || 'direct', isIOS ? 'ios' : 'android', 'manual_open');
    tryOpenApp();
  };

  // Handle continue to website click
  const handleContinueToWeb = () => {
    trackVisit(ref || 'direct', isIOS ? 'ios' : (isAndroid ? 'android' : 'desktop'), 'continue_web');
  };

  return (
    <div className="share-container">
      <Head>
        <title>{videoData?.title || 'Open in Gyanoda App'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={videoData?.description || `Open this video in the Gyanoda app`} />
        
        {/* Social media meta tags */}
        {/* <meta property="og:title" content={videoData?.title || 'Gyanoda Educational Video'} />
        <meta property="og:description" content={videoData?.description || 'Learn with high-quality educational videos'} />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content={`https://${APP_METADATA.domain}/share?videoId=${videoId}`} />
        <meta property="og:image" content={videoData?.thumbnail || `https://${APP_METADATA.domain}/social-preview.jpg`} /> */}

<meta property="og:title" content={videoData?.title || 'Gyanoda Competitve Exams Video Solution'} />
  <meta property="og:description" content={videoData?.questionImage || 'Crack Exams With Digital PYQ(Previous Years Questions)'} />
  <meta property="og:type" content="video.other" />
  <meta property="og:url" content={`https://www.gyanoda.com/share?videoId=${videoId}`} />
  <meta property="og:image" content={videoData?.blurredThumbnail || `https://www.admin.gyanoda.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdv9h1noz9%2Fimage%2Fupload%2Fv1734196571%2Foriginsl_sbspfr.png&w=640&q=75`} />
  <meta property="og:image:width" content="640" />
  <meta property="og:image:height" content="360" />
   {/* WhatsApp specific meta (though WhatsApp generally uses og: tags) */}
   <meta property="og:site_name" content="Gyanoda" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={videoData?.title || 'Gyanoda Competitve Exams Video Solution'} />
        <meta name="twitter:description" content={videoData?.questionImage|| 'Crack Exams With Digital PYQ(Previous Years Questions)'} />
        <meta name="twitter:image" content={videoData?.blurredThumbnail || `https://www.admin.gyanoda.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdv9h1noz9%2Fimage%2Fupload%2Fv1734196571%2Foriginsl_sbspfr.png&w=640&q=75`} />
        
        {/* Deep linking meta tags */}
        <meta property="al:ios:url" content={`${APP_METADATA.appScheme}share?videoId=${videoId}`} />
        <meta property="al:ios:app_store_id" content={APP_METADATA.appStoreId} />
        <meta property="al:ios:app_name" content={APP_METADATA.name} />
        
        <meta property="al:android:url" content={`${APP_METADATA.appScheme}share?videoId=${videoId}`} />
        <meta property="al:android:package" content={APP_METADATA.playStoreId} />
        <meta property="al:android:app_name" content={APP_METADATA.name} />
      </Head>

      <div className="share-content">
        <div className="logo">
          <img src="/logo.png" alt="Gyanoda Logo" width="120" height="120" />
        </div>
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <h1>{videoData?.title || 'Gyanoda Video'}</h1>
            
            {videoData && (
              <div className="video-info">
                <p className="video-description">{videoData.description}</p>
                <div className="video-metadata">
                  <span className="video-subject">{videoData.subject}</span>
                  <span className="video-duration">{videoData.duration}</span>
                </div>
              </div>
            )}
            
            {isMobile ? (
              <>
                <p className="promo-text">Get the best experience with our app!</p>
                <div className="buttons">
                  <button className="open-app-button" onClick={handleOpenInApp}>
                    Open in App
                  </button>
                  
                  {/* {isIOS && (
                    <a href={APP_STORE_LINK} className="store-button" onClick={() => trackVisit(ref || 'direct', 'ios', 'app_store')}>
                      Get on App Store
                    </a>
                  )} */}
                  
                  {isAndroid && (
                    <a href={PLAY_STORE_LINK} className="store-button" onClick={() => trackVisit(ref || 'direct', 'android', 'play_store')}>
                      Get on Google Play
                    </a>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="qr-title">Scan this QR code to open this video on your mobile device</p>
                <div className="qr-code">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                      `https://${APP_METADATA.domain}/share?videoId=${videoId}`
                    )}`} 
                    alt="QR Code" 
                    width="200" 
                    height="200" 
                  />
                </div>
                <p className="download-text">Or download our app:</p>
                <div className="store-links">
                  <a 
                    href={APP_STORE_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackVisit(ref || 'direct', 'desktop', 'app_store')}
                  >
                    <img src="/app-store-badge.png" alt="App Store" height="40" />
                  </a>
                  <a 
                    href={PLAY_STORE_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackVisit(ref || 'direct', 'desktop', 'play_store')}
                  >
                    <img src="/google-play-badge.png" alt="Google Play" height="40" />
                  </a>
                </div>
              </>
            )}

            {/* <p className="continue-web">
              <Link 
                href={videoId ? `/videos/${videoId}` : "/"} 
                onClick={handleContinueToWeb}
              >
                Continue to website
              </Link>
            </p> */}
          </>
        )}
      </div>

      <style jsx>{`
        .share-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          background-color: #f9f9f9;
        }
        
        .share-content {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
        }
        
        .logo {
          margin-bottom: 20px;
        }
        
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #333;
        }
        
        p {
          margin-bottom: 20px;
          color: #666;
        }
        
        .video-info {
          margin-bottom: 20px;
          padding: 10px;
          border-radius: 10px;
          background-color: #f5f7fb;
        }
        
        .video-description {
          font-size: 14px;
          color: #555;
          margin-bottom: 10px;
        }
        
        .video-metadata {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #777;
        }
        
        .promo-text {
          font-weight: 500;
          font-size: 18px;
          color: #333;
          margin: 20px 0;
        }
        
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .open-app-button {
          background-color: ${APP_METADATA.primaryColor};
          color: white;
          border: none;
          padding: 15px 20px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .open-app-button:hover {
          background-color: #3050c5;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .store-button {
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          border: 2px solid ${APP_METADATA.primaryColor};
          color: ${APP_METADATA.primaryColor};
          background-color: white;
          display: block;
          text-align: center;
          transition: background-color 0.2s, color 0.2s, transform 0.2s;
        }
        
        .store-button:hover {
          background-color: ${APP_METADATA.primaryColor};
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .store-links {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 30px;
        }
        
        .qr-title {
          margin: 20px 0;
          font-weight: 500;
        }
        
        .qr-code {
          margin: 20px auto;
          padding: 15px;
          background-color: white;
          border-radius: 10px;
          display: inline-block;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .download-text {
          font-weight: 500;
          margin-top: 20px;
        }
        
        .continue-web {
          margin-top: 20px;
          font-size: 14px;
        }
        
        .continue-web a {
          color: ${APP_METADATA.primaryColor};
          text-decoration: underline;
          transition: color 0.2s;
        }
        
        .continue-web a:hover {
          color: #3050c5;
        }
        
        .loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }
        
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: ${APP_METADATA.primaryColor};
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          margin-bottom: 15px;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SharePage;




