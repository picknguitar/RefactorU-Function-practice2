// $(document).on('ready', function() {
  
// });

var getName = function(obj) {
	return obj.name;
}

var totalLetters = function(arr) {  
	var str1 = arr.join('');
	return str1.length;
}

var keyValue = function(key, value) {
	var obj = {};
		obj[key] = value;
	return obj; 
}

// var negativeIndex = function(arr, negnum) {
// 	// for (var i=0; i<arr.length; i++);
// 	var newStr = 
// }

var removeM = function(str) {
	var newString = str.split('m');
	var noM = newString.join('');
	return noM;
}

// var printObject = function (obj) {
// 	return
// }

var vowels = function(str) {
	str.replace(/[aeiou]/gi, '');
	return str.match(/[aeiou]/gi);
}

// var twins = function(arr) {

// } 

var or = function(arr) {
	for (var i=0; i<arr.length; i++) 
		if (arr[i] === true) {
			return true
		}	
}











