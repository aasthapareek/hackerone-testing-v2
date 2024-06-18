import express from 'express';
import cors from 'cors';
import { authRouter } from './auth/routes';
import { paymentRouter } from './payments/routes';
import { connectDB } from './db/connection';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/payments', paymentRouter);

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('TaskFlow API running');
  });
});
