"use client";

import { useState, useEffect } from "react";

export default function VideoCache({ children, videoSrc }) {
  const [videoStatus, setVideoStatus] = useState('checking'); // 'checking', 'cached', 'loading', 'error'
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const checkVideoCache = () => {
      const cachedVideo = localStorage.getItem('cachedVideo');
      const cacheTimestamp = localStorage.getItem('videoCacheTimestamp');
      
      if (cachedVideo && cacheTimestamp) {
        const cacheAge = Date.now() - parseInt(cacheTimestamp);
        const maxCacheAge = 24 * 60 * 60 * 1000; // 24 saat
        
        if (cacheAge < maxCacheAge) {
          // Video önbellekte ve güncel
          setVideoStatus('cached');
          setShowVideo(true);
          return true;
        } else {
          // Önbellek eski, temizle
          localStorage.removeItem('cachedVideo');
          localStorage.removeItem('videoCacheTimestamp');
        }
      }
      
      return false;
    };

    const isCached = checkVideoCache();
    
    if (!isCached) {
      // Video önbellekte yok, yükleme işlemini başlat
      setVideoStatus('loading');
      setShowVideo(true);
    }
  }, [videoSrc]);

  const handleVideoLoaded = () => {
    setVideoStatus('cached');
    // Video başarıyla yüklendi, önbelleğe kaydet
    localStorage.setItem('cachedVideo', 'true');
    localStorage.setItem('videoCacheTimestamp', Date.now().toString());
  };

  const handleVideoError = (e) => {
    console.error('Video yükleme hatası:', e);
    setVideoStatus('error');
    // Hata durumunda önbelleği temizle
    localStorage.removeItem('cachedVideo');
    localStorage.removeItem('videoCacheTimestamp');
  };

  return (
    <>
      {showVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/drone1-poster.jpg"
          crossOrigin="anonymous"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        />
      )}
    </>
  );
} 