import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LegalLink.module.css';

export default function LegalLink() {
  return (
    <Link
      to="/legal/legal-documents"
      className={styles.legalLink}>
      Legal Documents
    </Link>
  );
}
