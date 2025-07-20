"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoLoader({ children, videoSrc, onVideoLoaded }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [loadingText, setLoadingText] = useState("Video Hazırlanıyor...");
  const videoRef = useRef(null);
  const progressInterval = useRef(null);

  useEffect(() => {
    // Video elementini bul
    const video = document.querySelector('video');
    if (!video) return;

    videoRef.current = video;

    // Video yükleme olaylarını dinle
    const handleLoadStart = () => {
      setIsLoading(true);
      setProgress(0);
      setLoadingText("Video Yükleniyor...");
    };

    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        const progressPercent = (bufferedEnd / duration) * 100;
        setProgress(Math.min(progressPercent, 99));
      }
    };

    const handleCanPlay = () => {
      setProgress(100);
      setLoadingText("Video Hazır!");
      
      // Kısa bir gecikme sonrası video yükleme tamamlandı
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowVideo(true), 200);
        if (onVideoLoaded) onVideoLoaded();
      }, 500);
    };

    const handleError = () => {
      setLoadingText("Video Yüklenemedi");
      setProgress(0);
      // Hata durumunda da yükleme ekranını kaldır
      setTimeout(() => {
        setIsLoading(false);
        setShowVideo(true);
      }, 2000);
    };

    // Event listener'ları ekle
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Simüle edilmiş progress (fallback)
    progressInterval.current = setInterval(() => {
      if (progress < 90) {
        setProgress(prev => prev + Math.random() * 5);
      }
    }, 200);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [progress, onVideoLoaded]);

  if (isLoading) {
    return (
      <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-50 video-loader-container">
        <div className="text-center">
          {/* Ana yükleme animasyonu */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            {/* Dış çember */}
            <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
            
            {/* Progress çemberi */}
            <div 
              className="absolute inset-0 border-4 border-transparent rounded-full video-loader-spinner"
              style={{
                background: `conic-gradient(from 0deg, #EAB308 0deg, #EAB308 ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
              }}
            ></div>
            
            {/* İç çember animasyonu */}
            <div className="absolute inset-2 border-2 border-white/30 rounded-full video-loader-pulse"></div>
            
            {/* Merkez ikonu */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center video-loader-pulse">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Yükleme metni */}
          <div className="text-white text-xl font-semibold mb-4">
            {loadingText}
          </div>
          
          {/* Progress bar */}
          <div className="w-80 h-3 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full transition-all duration-300 ease-out shadow-lg video-loader-progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Progress yüzdesi */}
          <div className="text-white text-lg font-medium mb-6">
            %{Math.round(progress)}
          </div>
          
          {/* Animasyonlu noktalar */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full video-loader-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full video-loader-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-red-500 rounded-full video-loader-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          
          {/* Alt bilgi */}
          <div className="text-gray-400 text-sm mt-6">
            Lütfen bekleyin, video hazırlanıyor...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`transition-all duration-1000 ease-in-out video-fade-in ${
        showVideo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {children}
    </div>
  );
} 