import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');
//from class work
//connect to the database, once that works**
const jateDB = await openDB('jate, 1');
const tx = jateDB.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({ id: 1, value: content });
const result = await request; 
console.log('data saved', result);
};

// TODO: Add logic for a method that gets all the content from the database
// note for troubleshooting - copied and edited from above, so if there's an error there, there's an error here
export const getDb = async () => {

  console.error('getDb not implemented');
  
  const jateDB = await openDB('jate, 1');
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request; 
  
  console.log('data saved', result);
};

initdb();
