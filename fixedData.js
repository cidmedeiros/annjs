
Data2d = require('./dataGenerator');
const fs = require('fs');

function generateFixedData(n,min,max,rounding,linear,m,b){
    //n -> int indicates the number of data points to create
    //Generates a data set
    var data = new Data2d(n, min, max,rounding,linear);

    //Generates a categorized data points
    var pts2d = data.points(m,b);

    //Generates graphical cartesian points
    var arrCats = ['Cat1','Cat2'];
    var plotPts = data.plot(pts2d, c1=arrCats[0], c2=arrCats[1]);
    FixData = {cats: arrCats, points:plotPts};

    //saves to local file
    const jsonString = JSON.stringify(FixData);
    fs.writeFile('./data.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
}
let nPoints = 100;
generateFixedData(nPoints,-1, 1,2,true,3, -75);