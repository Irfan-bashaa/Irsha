import React from 'react';

/**
 * =========================================================================
 * IRSHA CENTRAL WHATSAPP CONFIGURATION
 * =========================================================================
 * 
 * Official WhatsApp Contact Number: +91 9963339520
 * Format for wa.me URL: 919963339520 (Country code + Phone number, no +, spaces, or hyphens)
 */
export const WHATSAPP_NUMBER = '919963339520';

/**
 * Official default pre-filled inquiry message
 */
export const DEFAULT_WHATSAPP_MESSAGE =
  'Hi Irsha, I would like to discuss a project with you. I would like to know more about your services.';

/**
 * Reusable function to generate the real, valid WhatsApp click-to-chat URL
 * Format: https://wa.me/919963339520?text=<ENCODED_MESSAGE>
 * 
 * @param {string} [message] - Optional message to pre-fill
 * @returns {string} Fully encoded official WhatsApp URL
 */
export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  const cleanNumber = String(WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Reusable function to directly open the WhatsApp conversation
 * 
 * @param {string} [message] - Optional message to pre-fill
 */
export function openWhatsApp(message = DEFAULT_WHATSAPP_MESSAGE) {
  const url = getWhatsAppUrl(message);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Official WhatsApp Icon Component
 */
export function WhatsAppIcon({ className = 'w-4 h-4', fill = 'currentColor' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.507 14.307l-.009.075c-2.399-1.2-2.736-1.17-3.003-1.077-.282.1-.567.49-.787.728-.157.171-.397.195-.615.087-.457-.225-1.579-.817-2.484-1.722-.905-.905-1.497-2.027-1.722-2.484-.108-.218-.084-.458.087-.615.238-.22.628-.505.728-.787.1-.267.123-.604-1.077-3.003l.075-.009c-.27-.033-.518-.033-.787.08-.344.143-.654.383-.878.683-.54.721-.825 1.604-.825 2.518 0 1.258.487 2.457 1.373 3.343l3.666 3.666c.886.886 2.085 1.373 3.343 1.373.914 0 1.797-.285 2.518-.825.3-.224.54-.534.683-.878.113-.269.113-.517.08-.787zM12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.432 5.178L2.04 21.96l4.908-1.384C8.414 21.464 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.176-.46-4.5-1.259l-.323-.193-2.92.823.824-2.883-.21-.341C3.99 15.011 3.8 13.528 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
    </svg>
  );
}
