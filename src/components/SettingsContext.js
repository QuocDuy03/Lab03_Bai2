import React, { createContext, useState, useEffect, useContext } from "react";
import * as SQLite from 'expo-sqlite';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);

    const db = SQLite.openDatabase('Lab03.db');

    useEffect(() => {
        // Lấy trạng thái từ cơ sở dữ liệu khi khởi động ứng dụng
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM Settings', [], (_, { rows }) => {
                if (rows.length > 0) {
                    const storedIsDarkMode = rows.item(0).isDark === 1;
                    const storedFontSize = rows.item(0).fontSize;
                    setIsDarkMode(storedIsDarkMode);
                    setFontSize(storedFontSize);
                }
            });
        });
    }, []);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Settings', [], (_, { rows }) => {
                if (rows.length === 0) {
                    tx.executeSql(
                        'INSERT INTO Settings (isDark, fontSize) VALUES (?, ?)',
                        [isDarkMode ? 1 : 0, fontSize],
                        (_, results) => {
                            if (results.rowsAffected > 0) {
                                console.log('Settings inserted');
                            }
                        },
                        (_, errors) => {
                            console.log('Settings error: '+ errors);
                        }
                        );
                } else {
                    tx.executeSql('UPDATE Settings SET isDark = ?, fontSize = ?', [isDarkMode ? 1 : 0, fontSize], (_, results) => {
                        if (results.rowsAffected > 0) {
                            console.log("Updated Successfully");
                        }
                    });
                }
            });
        });
    }, [db, isDarkMode, fontSize]);

    return (
        <SettingsContext.Provider value={{ isDarkMode, setIsDarkMode, fontSize, setFontSize }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);
