import { copyFile } from 'node:fs/promises';

// Keep the public download in sync with the resume maintained in Git.
await copyFile(
  new URL('../assets/masa_cheung_resume.pdf', import.meta.url),
  new URL('../public/resume.pdf', import.meta.url),
);
