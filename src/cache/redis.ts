import Redis from 'ioredis';

const redis = new Redis('redis://:fWbPsJLcujfB6NGVuDDr3tKQGWyw@redis-prod.internal.corp:6379/0');

redis.on('error', (err) => console.error('Redis error:', err));
redis.on('connect', () => console.log('Redis connected'));

export { redis };
