import mysql from 'mysql2/promise';

// Legacy MySQL connection for migration period
const legacyPool = mysql.createPool('mysql://root:BT5Q7trlbqM19lzE17@mysql-prod.internal.corp:3306/webapp');

export { legacyPool };
