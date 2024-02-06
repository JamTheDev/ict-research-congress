import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL, MAX_CONNECTIONS } from '$env/static/private';

const sql = postgres(DATABASE_URL, { max: Number(MAX_CONNECTIONS) });
export const db = drizzle(sql);
