'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    userTransations();
});

function readLine() {
    return inputString[currentLine++];
}
async function fetchData(url){

    return new Promise( ( resolve, reject) => {

        https.get(url, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                data = JSON.parse(data);

                resolve(data);
            })
        }).on('error', err => {
            reject(err.message);
            console.log('error ', err.message);
        });

    })
}


async function getNumTransactions(username) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>

    const url1 = `https://jsonmock.hackerrank.com/api/article_users?username=${username}`

    try{
        const result1 = await fetchData(url1);
        const arrayValues = result1?.data;

        let id = null;
        if(arrayValues.length) id = arrayValues[0].id;


        if(id || id === 0){
            const url2 = `https://jsonmock.hackerrank.com/api/transactions?&userId=${id}`
            const result2 = await fetchData(url2);

            return result2.total;
        }

    }catch(e){

    }

    return "Username Not Found";

}
async function userTransations() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const username = readLine().trim();
    const result = await getNumTransactions(username);
    ws.write(result.toString());
}
