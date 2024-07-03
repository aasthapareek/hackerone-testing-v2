import { Client, Environment } from 'square';

const squareClient = new Client({
  accessToken: 'EAAAE4hCR18KFOkcbxHe4AEGSg8ffXzLzcjO14syw8BO9Ta95O9I',
  environment: Environment.Sandbox,
});

export { squareClient };
