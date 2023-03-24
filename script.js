function calculateMinCost() {
  var ropeLstr = document.getElementById('rope-lengths').value;
	var ropeLarr = ropeLstr.split(',').map(Number);
	 var n = ropeLarr.length;

	let pq = [];
	for (let index = 0; index < n; index++) {
		pq.push(ropeLarr[index]);
	}
	pq.sort(function (a,b) { return a-b; }); 

	let res = 0;
	while (pq.length > 1) {
		let one = pq.shift();
		let tw0 = pq.shift();
		res += (one + two);
		pq.push(one + two);
		
		pq.sort(function(a,b) {return a-b;});
	}
	
	document.getElementById('result').textContent = res;
}  
