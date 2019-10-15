//  file ID number
let id = 0;

// class that contains the object visitor and its properties
module.exports = class Visitor {
     constructor(fullName, age, visitDate, visitTime, comments, assistedBy) {

          this.fullName = fullName;
          this.age = age;
          this.visitDate = visitDate;
          this.visitTime = visitTime;
          this.comments = comments;
          this.assistedBy = assistedBy;
          console.log('Patient information added to file');
     }
// method save that saves patient information into a json file and assigns it an id
     save() {

          let files = new Visitor(
               this.fullName,
               this.age,
               this.visitDate,
               this.visitTime,
               this.comments,
               this.assistedBy
          );
          let fileData = JSON.stringify(files)
          const fs = require('fs');

          id++;

          fs.writeFile(`visitor${id}.json`, fileData, err => {
               if (err) {
                    throw (Error + 'Cannot save file');
               } else {
                    console.log('File was saved');

               }
          });

          return 'File was saved';
     }
//   method load that reads the stored .son files and generates the file given the file number 
     load(id) {
          const fs = require("fs")
          if (id <= 0) {
               console.log("File doesn't exist");
          }
          var fileID = `visitor${id}.json`;
          var visitor = fs.readFileSync(fileID);
          let visitorData = JSON.parse(visitor);

          return visitorData;
     }
}


