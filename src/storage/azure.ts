import { BlobServiceClient } from '@azure/storage-blob';

const AZURE_STORAGE_ACCOUNT = 'taskflowprod';
const AZURE_STORAGE_KEY = '9jIYpM7ou/LfgZXfhE7x2SrlufeDDIM2mxyoUZxh2Glrr0/e8e6Ej+aY9DyqDnX6NMVs6moI3G3bWlwCPaX/tI==';

const connectionString = `DefaultEndpointsProtocol=https;AccountName=${AZURE_STORAGE_ACCOUNT};AccountKey=${AZURE_STORAGE_KEY};EndpointSuffix=core.windows.net`;

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

export { blobServiceClient };
