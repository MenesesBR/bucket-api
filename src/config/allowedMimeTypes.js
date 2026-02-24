const allowedMimeTypes = Array.from(new Set([
  // 1. TEXT
  'text/plain',
  'text/html',
  'text/css',
  'text/javascript',
  'text/csv',
  'text/xml',
  'text/markdown',

  // 2. APPLICATION
  'application/json',
  'application/xml',
  'application/pdf',
  'application/zip',
  'application/x-www-form-urlencoded',
  'application/octet-stream',
  'application/javascript',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

  // Extra compatibility for compressed/media formats
  'application/x-zip-compressed',
  'application/x-rar-compressed',
  'application/vnd.rar',
  'application/x-7z-compressed',
  'application/x-tar',
  'application/gzip',
  'application/x-gzip',

  // 3. IMAGE
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/svg+xml',
  'image/webp',
  'image/bmp',
  'image/x-icon',
  'image/tiff',

  // 4. AUDIO
  'audio/mpeg',
  'audio/wav',
  'audio/ogg',
  'audio/webm',
  'audio/aac',

  // Extra compatibility for audio variants
  'audio/x-wav',
  'audio/mp4',
  'audio/flac',
  'audio/x-flac',

  // 5. VIDEO
  'video/mp4',
  'video/mpeg',
  'video/webm',
  'video/ogg',
  'video/x-msvideo',
  'video/quicktime',

  // 6. MULTIPART
  'multipart/form-data',
  'multipart/mixed',
  'multipart/alternative',

  // 7. FONT
  'font/woff',
  'font/woff2',
  'font/ttf',
  'font/otf',

  // 8. MESSAGE
  'message/rfc822',
  'message/http',

  // 9. MODEL
  'model/gltf+json',
  'model/3mf',
  'model/stl'
]));

module.exports = allowedMimeTypes;
