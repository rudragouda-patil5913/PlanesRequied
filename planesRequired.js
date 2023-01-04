//Javascript program to Fly me to my destination - It's urgent!!

/*Explaination:
to reach destination how many planes are required.

Array = [2,1,2,3,1]
answer: 3 
2=>2 =>1

*/

function planesRequired(arr,n){
// if the final destination airpot is starting itself
if (n <= 1)
	return 0;
	// Return -1 if plane is not able to reach last airpot
if (arr[0] == 0)
	return -1;
//let's store the maximum reach of the plane depending on fuel units.
  
let maxReach = arr[0];

//lets keep a trace on steps which can be taken by a plane.
	
let unit = arr[0];

 // jump stores number of planes taken to reach final airpot.   

let jump = 1;

//lets traverse the array using for loop.
let i = 1;
for (i = 1; i < n; i++) {
  // To check did we reach final airpot
	if (i == n - 1)
		return jump;

	// updating maxReach

	maxReach =Math.max(maxReach, i + arr[i]);

	// Using unit to get to the current airpot (index in array)
	unit--;
    // If no further fuel units left for a plane to move

		if (unit == 0) {

			// we must have used a travelled to another airport so will increase jump

			jump++;

			// Check if the current plane has any chance to move further or not

			if (i >= maxReach)

				return -1;



			// re-initialize the units to the amount
			// of units to reach maxReach from position i.

			unit = maxReach - i;

		}

	}



	return -1;

}

var arr = [ 1,1,0,4,5,0,0,0,6] ;
let size = arr.length;
// Calling the planesRequired function
console.log("Minimum number of jumps to reach end is "+	planesRequired(arr, size));

	

	


