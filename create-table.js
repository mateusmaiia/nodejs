import { sql } from './db.js';

// sql`
//   DROP TABLE IF EXISTS videos;
// `.then(() => {
//   console.log("Table 'videos' deleted successfully");
// })

sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log("Table 'videos' created successfully");
}).catch(error => {
  console.error("Error creating table 'videos':", error);
});