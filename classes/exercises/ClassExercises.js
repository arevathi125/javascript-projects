// Define your Book class here:
    class Book{
        constructor(title, author, copyRightDate, ISBN, numberOfPages, timesCheckedout, discarded){
                 this.title = title;
                 this.author = author;
                 this.copyRightDate = copyRightDate;
                 this.ISBN = ISBN;
                 this.numberOfPages = numberOfPages;
                 this.timesCheckedout = timesCheckedout;
                 this.discarded = discarded;
        }

        checkedout(uses = 1){
          this.timesCheckedout += uses;
        }
    }

// Define your Manual and Novel classes here:
   class Manual extends Book{
         constructor(title, author, copyRightDate, ISBN, numberOfPages, timesCheckedout, discarded){
            super(title, author, copyRightDate, ISBN, numberOfPages, timesCheckedout, discarded);
         }
    disposal(currentYear){
           if (currentYear - this.copyRightDate > 5){
            this.discarded = 'Yes';
           }
         }
   }

   class Novel extends Book{
    constructor(title, author, copyRightDate, ISBN, numberOfPages, timesCheckedout, discarded){
        super(title, author, copyRightDate, ISBN, numberOfPages, timesCheckedout, discarded);
     }
     disposal(){
        if (this.timesCheckedout > 100){
            this.discarded = 'Yes';
        }
     }
   }

// Declare the objects for exercises 2 and 3 here:
  let manualObj = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, "0000000000000", 1147, 1, 'No' );
  let novelObj = new Novel('Pride and Prejudice', 'Jane Austen', 1813, "1111111111111", 432, 32, 'No' );

// Code exercises 4 & 5 here:
   
   // console.log(novelObj.checkedout(5));
    manualObj.disposal(2024);
    console.log(manualObj.discarded);

    novelObj.checkedout(5);
    console.log(novelObj.timesCheckedout);
    novelObj.disposal();



