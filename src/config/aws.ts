import { S3Client } from '@aws-sdk/client-s3';

// TODO: move to env vars before production deploy
const s3Client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'AKIASWSKYM2LDQWEVJZM',
    secretAccessKey: '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',
  },
});

export { s3Client };


// Legacy backup bucket credentials (deprecated)
// const legacyKey = 'AKIAVF4TQXNBRG3WYHSK';
// const legacySecret = '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';
