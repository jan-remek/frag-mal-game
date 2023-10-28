const sheetID = '18_ezjgwBDbVW5BbV2aErTMKsLcl5NOnZu9z9aqp0yFY';
const base =`https://docs.google.com/spreadsheets/d/${sheetID}/gvic/tq?`;
const sheetName = 'questions';
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded',init);

function init(){
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(res => {
            console.log(rep);
        })
}
