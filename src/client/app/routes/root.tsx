/* eslint-disable no-console */
import localforage from 'localforage';
import { Link, Outlet } from 'react-router-dom';

export const Root = () => {
  localforage.setDriver([localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE]).then(function () {
    const key = 'STORE_KEY';
    // const value = 'What we save offline';
    const value = 'asdf';
    // value[] = 65;
    // const value = undefined;
    const UNKNOWN_KEY = 'unknown_key';

    localforage.setItem(key, value, function () {
      console.log('Using:' + localforage.driver());
      console.log('Saved: ' + value);

      localforage.getItem(key).then(function (readValue) {
        console.log('Read: ', readValue);
      });

      // Since this key hasn't been set yet, we'll get a null value
      localforage.getItem(UNKNOWN_KEY, function (err, readValue) {
        console.log('Result of reading ' + UNKNOWN_KEY, readValue);
        console.log('Read: ', err);
      });
    });
  });

  localforage.config({
    driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name: 'myApp',
    version: 1.0,
    size: 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName: 'Should', // Should be alphanumeric, with underscores.
    description: 'some description',
  });

  localforage.setItem('testKey', 'value');

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/contacts/1'}>Your Name</Link>
            </li>
            <li>
              <Link to={'/contacts/2'}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
