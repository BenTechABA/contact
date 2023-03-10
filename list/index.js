const fs = require('fs');
const process = require('process')
fs.readdir(process.cwd(), (err, filenames)=>{
    if(err){
        console.log(err)
    }
    console.log(filenames)
    const allStats = Array(filenames.length).fill(null)
for(let filename of filenames){
    const index=filenames.indexOf(filename);
    fs.lstat(filename, (err, stats)=>{
        if(err){
            console.log(err);
        }
        allStats[index]= stats;
        const ready = allStats.every((stats)=>{
            return stats;
        })
        if(ready){
            allStats.forEach((stats, index)=>{
               console.log(filename) 
            })
        }
    })
}
})
