import sharp from 'sharp';
import { copyFileSync } from 'node:fs';

// 1. Profile photo: crop person from old banner (original 3995x3286)
// left=80 centers the head (~x=580 in banner coords) in the 1000px-wide frame
// top=380 moves the head a bit lower in the frame (~30% from top)
await sharp('old-site/images/banner.jpg')
  .extract({ left: 80, top: 380, width: 1000, height: 1250 })
  .jpeg({ quality: 88 })
  .toFile('public/profile.jpg');

// 2. Side project images
copyFileSync('old-site/images/masanote.png', 'public/masanote.png');
copyFileSync('old-site/images/triolingo.png', 'public/triolingo.png');
copyFileSync('old-site/images/dropping.png', 'public/dropping.png');

console.log('images ready');
