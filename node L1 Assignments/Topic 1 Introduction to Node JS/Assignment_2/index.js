

// Assignment_2(a)
console.log(`Pwd = ${__dirname}`);

// Assignment_1(b)
const fs = require('fs');
const prompt = require('prompt');

console.log('Enter the Directory path:');
prompt.start();

// prompt.get(['path'],function(err,res){
// const path = res.path;
// fs.readdir(path,function(err,files){
//     if(err)console.log('Error '+err.message);

//     files.forEach(function(i){
//         console.log(i);
//     });
// });
// });


// Assignment_1(c)
// console.log('Enter the File Name :');
// prompt.get(['name'],function(err,res){
//     if(err) return console.log(err);
//     const name = res.name;

    //synchronous mode
    // const r =fs.readFileSync(name,'utf-8');
    // console.log(r);

    //asynchronous mode
//     fs.readFile(name,'utf-8',function(err,r){
//         if(err) return console.log(err);
//         console.log(r);
//     });
// });

// Assignment_1(d)

const readline = require('readline');

const r1  = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

r1.question('Please enter the first Filename : ', (file1) => {
    r1.question('Please enter the second Filename : ', (file2) => {
        
        const readStream = fs.createReadStream(file1);

        var WriteStream = fs.createWriteStream(file2,{flags:'a'});
        readStream.setEncoding('UTF8');
        readStream.on('data',chunk=>{
            WriteStream.write(chunk);
        });
        readStream.on('error',function(err){
            console.log('Error in readStream:'+err);
        });
        readStream.on('end',function(){
            console.log('End reading and writing operation');
        });
    
        r1.close();
    });
});
