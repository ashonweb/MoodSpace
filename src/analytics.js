// src/analytics.js
import { gtag } from 'gtag';

// Initialize Google Analytics
export const initGA = (trackingId) => {
  gtag('config', trackingId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track events
export const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};