const { isUtf8 } = require("buffer");
const fs=require("fs");
// fs.writeFile("message.txt","hello from here", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   })

  fs.readFile('message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 