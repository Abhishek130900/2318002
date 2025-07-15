import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { logEvent } from '../utils/loggerMiddleware';

const Redirector = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("shortUrls") || "{}");
    const entry = urls[shortcode];

    if (!entry) {
      alert("Short URL not found!");
      navigate('/');
      return;
    }

    const now = new Date();
    if (new Date(entry.expiresAt) < now) {
      alert("Link expired.");
      navigate('/');
      return;
    }

    entry.clicks.push({
      timestamp: now.toISOString(),
      source: document.referrer || "direct",
      geo: "India (mocked)"
    });

    urls[shortcode] = entry;
    localStorage.setItem("shortUrls", JSON.stringify(urls));
    logEvent("redirect", { shortcode, referrer: document.referrer });
    
    window.location.href = entry.originalUrl;
  }, [shortcode]);

  return null;
};

export default Redirector;
