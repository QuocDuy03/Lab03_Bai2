import * as SQLite from 'expo-sqlite';
import { SettingsProvider } from './src/components/SettingsContext';
import AppNavigation from './src/AppNavigation';
const db = SQLite.openDatabase('Lab03.db' );

db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS Notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, note TEXT)',
    [],
    (_, success) => {
      if (success) {
        console.log('Notes table created successfully');
      } else {
        console.log('Error creating Notes table');
      }
    }
  );
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS Settings (id INTEGER PRIMARY KEY AUTOINCREMENT, isDarkMode INTEGER, fontSize INTEGER)',
    [],
    (_, success) => {
      if (success) {
        console.log('Settings table created successfully');
      } else {
        console.log('Error creating Settings table');
      }
    }
  );
});

export default function App() {
  return (
    <SettingsProvider>
      <AppNavigation />
    </SettingsProvider>
  )
}