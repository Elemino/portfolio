let items = [9,2,5,6,4,3,7,10,1,8]

function bubblesort (item) {
    let arrayLength = items.length;
    
    for (let firstLoopPosition = 0; firstLoopPosition < arrayLength; firstLoopPosition++) {
        console.log( "outer count: " + firstLoopPosition)
    
     for (let secondLoopPosition = 0; secondLoopPosition < (arrayLength - firstLoopPosition - 1); secondLoopPosition++) {
         console.log("inner loop count: " + secondLoopPosition + " going up to index " + (arrayLength - firstLoopPosition - 1))


         if(items[secondLoopPosition] > items[seocondLoopPosition+1]) {
             console.log("comparing numbers " + items[secondLoopPosition+1] + " at index " + items.indexOf(items[secondLoopsPosition+1]) + ' and ' items[secondLoopPosition])
             console.log(items)
         }
     }
   }
}
