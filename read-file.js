import { error } from 'console';
import { readFile } from 'fs/promises';

function readMyFile(callback) {
  readFile('./test1.txt', 'utf8')
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
}

readMyFile(onComplete);


//callback function
function onComplete(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}