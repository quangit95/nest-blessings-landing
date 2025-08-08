import { useEffect } from 'react';

// Extend Window interface for Facebook SDK
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (params: { xfbml: boolean; version: string }) => void;
    };
  }
}

const FacebookChat = () => {
  useEffect(() => {
    // Add Facebook SDK script
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    return () => {
      // Clean up script on unmount
      const existingScript = document.querySelector('script[src*="facebook.net"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      {/* Facebook Customer Chat */}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        data-attribution="setup_tool"
        data-page-id="61554588230857"
        data-theme-color="#8B4513"
        data-logged-in-greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
        data-logged-out-greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
        data-greeting-dialog-display="show"
        data-greeting-dialog-delay="3"
      ></div>
    </>
  );
};

export default FacebookChat;