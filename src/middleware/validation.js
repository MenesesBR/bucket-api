const path = require('path');
const logger = require('../config/logger');
const allowedMimeTypes = require('../config/allowedMimeTypes');

const hasUnsafePathSegments = (filename) => {
  if (filename.includes('\0')) return true;
  if (filename === '.' || filename === '..') return true;
  if (filename.includes('/') || filename.includes('\\')) return true;
  if (filename.includes(':')) return true;
  return path.basename(filename) !== filename;
};

const validateFilename = (req, res, next) => {
  const { filename } = req.query;
  
  if (!filename) {
    logger.warn('Missing filename in request', {
      url: req.url,
      method: req.method,
      ip: req.ip
    });
    return res.status(400).json({
      error: 'Missing required parameter',
      message: 'filename is required'
    });
  }

  if (typeof filename !== 'string' || filename.trim().length === 0) {
    logger.warn('Invalid filename format', {
      filename,
      url: req.url,
      method: req.method,
      ip: req.ip
    });
    return res.status(400).json({
      error: 'Invalid parameter',
      message: 'filename must be a non-empty string'
    });
  }

  const sanitizedFilename = filename.trim();

  if (hasUnsafePathSegments(sanitizedFilename)) {
    logger.warn('Unsafe filename rejected', {
      filename: sanitizedFilename,
      url: req.url,
      method: req.method,
      ip: req.ip
    });
    return res.status(400).json({
      error: 'Invalid parameter',
      message: 'filename must be a valid file name without path separators'
    });
  }

  req.filename = sanitizedFilename;
  next();
};

const validateFileUpload = (req, res, next) => {
  if (!req.file) {
    logger.warn('No file uploaded', {
      url: req.url,
      method: req.method,
      ip: req.ip
    });
    return res.status(400).json({
      error: 'No file uploaded',
      message: 'Please select a file to upload'
    });
  }

  if (!allowedMimeTypes.includes(req.file.mimetype)) {
    logger.warn('Unsupported file type uploaded', {
      mimetype: req.file.mimetype,
      originalname: req.file.originalname,
      url: req.url,
      method: req.method,
      ip: req.ip
    });
    return res.status(400).json({
      error: 'Unsupported file type',
      message: 'The uploaded file type is not supported'
    });
  }

  next();
};

module.exports = {
  validateFilename,
  validateFileUpload
}; 
