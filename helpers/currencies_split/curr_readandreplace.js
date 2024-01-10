//Read the curr_array_only.js file that contains the CURRENCIES array variable.
//This array contains about 271 currencies.
//Then replace each currency object using regex the validator values with 
//the same value but with quotes around it.

var fs = require('fs');

fs.readFile('curr_array_only.js', 'utf8', function(err,data) {
    if (err) throw err;
    var initial = /(\w{2,8}Validator\b)/g;
    //let n = data.search(/Validator/g)
    //let m = data.match(/\w{2,8}Validator\b/g)
    let r = data.replace(/(\w*Validator\b)/g, "\'$1\'");
    r = r.replace(/(\r\n|\n|\r)/gm,"");
    console.log(r);
    var cleaned = JSON.stringify(r);
    fs.writeFile("curr_quotes_added.txt", cleaned, function(err) {
    if(err) {
        console.log(err);
    
    }
    console.log(r);
  });
  
   });
  