var combinationSum3 = function(k, n) {
	var solution = [];	// length=k all possible Combination
	var result = [];
	var used = [];	// [1,2,...,9] each element can only be used once

	var backTracking = function(m, n) {
		if(m==k){
			var sum = 0;
			for(var i=0; i<solution.length; ++i){
				sum += solution[i];
			}
			if(sum==n){
				console.log(solution);	// print out all possible
				result.push(solution.slice(0));
			}
		}else{
			for(var i=1; i<=9; ++i){
				if(used[i]){ continue; }	// when true, express the element(used[i]) has been used
				if(m>0 && solution[m-1]>i){ continue; }	// elements can only small to large order
				used[i] = true;
				solution[m] = i;
        console.log("u", used);
        console.log(solution);
				backTracking(m+1, n);
				used[i] = false;
			}
		}
	}

	backTracking(0, n);

	return result;
};

console.log(combinationSum3(3, 7));
