'use client';

import { useEffect } from 'react';

export default function SuppressHydrationWarning() {
  useEffect(() => {
    // Remove Grammarly and other extension attributes that cause hydration errors
    const removeExtensionAttributes = () => {
      const body = document.body;
      if (body) {
        body.removeAttribute('data-new-gr-c-s-check-loaded');
        body.removeAttribute('data-gr-ext-installed');
      }
    };

    // Run immediately and on DOM mutations
    removeExtensionAttributes();
    
    const observer = new MutationObserver(() => {
      removeExtensionAttributes();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

