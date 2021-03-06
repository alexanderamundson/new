//Solution 1-A
function diffArray(arr1, arr2) {

    var newArr = [];
    var found = false;
    //loop thru each element in arr1
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            //check if each element in arr1 is in arr2
            if (arr2[j] === arr1[i]) {
                found = true;
            }
        }//if element is in both, add to newArr
        if (!found) {
            newArr.push(arr1[i]);
        }
        found = false;
    }

    //Now, check if vals in arr2 are in arr1
    for (let i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                found = true;
            }
        }
        if (!found) {
            newArr.push(arr2[i]);
        }
        found = false;
    }
    return newArr;
}

var test1 = [[1, 2, 3, 5], [1, 2, 3, 4, 5]];
diffArray(test1[0], test1[1]);//returns 4

var test2 = [["andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt", "dead shrub"]];
diffArray(test2[0], test2[1]);//returns ["diorite", "pink wool"]


//Solution 1-B (uses extra function to modularize code)
//(instead of writing the two for loops two times, this solution
//puts the two for loops inside a function. This inner function is 
//called on twice, instead of writing duplicate code in solution 1-A)
function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {//this method prevents duplicate code
        var found = false;
        //loop thru each element in arr1
        for (var i = 0; i < first.length; i++) {
            for (var j = 0; j < second.length; j++) {
                //check if each element in arr1 is in arr2
                if (second[j] === first[i]) {
                    found = true;
                }
            }//if element is in both, add to newArr
            if (!found) {
                newArr.push(first[i]);
            }
            found = false;
        }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
}










//Solution 2 (array.filter() uses callback function )
function diffArray(arr1, arr2) {
    var merged = arr1.concat(arr2);
    return merged.filter(function (element) {
        return !(arr1.includes(element) && arr2.includes(element));
    });
}

//Solution 3 (array.filter() calls named function using bind to pass element )
function diffArray(arr1, arr2) {
    function notInBoth(element) {
        return !(arr1.includes(element) && arr2.includes(element));
    }
    var merged = arr1.concat(arr2);
    return merged.filter(notInBoth.bind(null));
}