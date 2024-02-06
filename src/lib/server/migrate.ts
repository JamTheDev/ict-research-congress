import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';

const migrationClient = postgres(DATABASE_URL, { max: 1 });
const db = drizzle(migrationClient);

await migrate(db, { migrationsFolder: 'drizzle' });

await migrationClient.end();
