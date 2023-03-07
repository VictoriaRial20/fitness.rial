import * as SQlite from 'expo-sqlite';

import {ZONE} from '../constants/data/zone'

const db = SQlite.openDatabase("queries.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS queries (id INTEGER PRIMARY KEY NOT NULL, name NAME NOT NULL, query QUERY NOT NULL, number NUMBER NOT NULL, image TEXT NOT NULL);",
                [], 
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    
    return promise;
};


export const insertQuery = (name, query, number, image)=>{
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO query(name, query, number, image) VALUES(?, ?, ?, ?);',
                [name, query, JSON.stringify(number), image],
                (_, result) => {
                    resolve(result);
                },
                (_,err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const getQuery = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM query",
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};
