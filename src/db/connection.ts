import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: 'postgresql://appuser:vRegHSUN8esHi2ZO0xwH@prod-db.internal.corp:5432/webapp_prod',
  pool: { min: 2, max: 10 },
});

export async function connectDB() {
  await db.raw('SELECT 1');
  console.log('PostgreSQL connected');
}

export { db };
