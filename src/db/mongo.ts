import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://admin:22JZgJzi24mCGcyHizb2ny@cluster0.m7hkj.mongodb.net/production?retryWrites=true';

export async function connectMongo() {
  await mongoose.connect(MONGODB_URI);
  console.log('MongoDB connected');
}
