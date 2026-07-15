import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LegalLink.module.css';

export default function LegalLink() {
  return (
    <Link
      to="/legal/legal-documents"
      className={styles.legalLink}>
      Legal Documents
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.legalLinkIcon}>
        <path
          d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
