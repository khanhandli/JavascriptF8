// Promise 
// 		Sync : dong' bo,
// 		ASync: Bat dong' bo.,
// 		Noi dau(Pain)
// 		Lys thuyet cach hoat dong


//Create promise
// 1. new Promise
// 2. Executor


//Co 3 trang thia
//1. Pendding (Khong resolve hay reject bi do' ri? bo. nho')
//2. Fulfilled (Trang thai thanh cong)
//3. Rejected (Trang thai that bai)

// var promise = new Promise(  //new Promise

// 	function (resolve,reject) { //Executor
// 		//Logic xu? ly
// 		//resolve: THanh cong
// 		//reject: That bai	
// 		//
// 		//
// 		// Fake call API
// 		resolve(); 
// 	}
// );  

// //.Then dau tien co gia tri return se tra ve data cho function .then thu 2
// //Neu khong return 1 promise thi no se chay thang thu 2
// //va no co the return 1 promies ed: return new Promise(function(resolve) {
// //									setTimeout(resolve, 3000)
// //								})
// //								
// //								=)) sau 3 giay thi no se chay den thang .then thu 2

// function sleep(ms) {
// 	return new Promise(function(resolve){
// 		setTimeout(resolve, ms)
// 	});
// }	


// //=> thang sleep chinh la 1 promise
// sleep(3000)
// 	.then(function(){
// 		console.log(1);
// 		return sleep(3000);
// 	})
// 	.then(function(){
// 		console.log(2);
// 		return new Promise(function(resolve, reject) {
// 			resolve(sleep(16000));
// 		});
// 	})
// 	.then(function(){
// 		console.log(3);
// 		return sleep(3000);
// 	})
// 	.then(function(){
// 		console.log(4);
// 		return sleep(3000);
// 	})
// 	.catch(function(err) {
// 		console.log(err);
// 	});



// promise
// 	.then(
// 			function() {
// 				return new Promise(function(resolve) {
// 					setTimeout(resolve(1), 3000);
// 				})
// 			}
// 		)
// 	.then(
// 			function(data) {
// 				console.log(data);
// 				return 2;
// 			}
// 		)
// 	.then(
// 			function(data) {
// 				console.log(data);
// 				return 3;
// 			}
// 		)
// 	.then(
// 			function(data) {
// 				console.log(data);
// 			}
// 		)
// 	.catch(
// 			function() {
// 				console.log('helloworld2!');
// 			}
// 		)
// 	.finally(
// 			function() {
// 				console.log('finally!');
// 			}
// 		);
	



//Tra loi khi phong van': 
// Promise sinh ra de xu ly nhung thao tac bat dong bo. 
// Truoc khi cos promise thi xu dung call back
// Va co tinh trang callback hell giup khac phuc trinh trang nay giup code de hieu?. Khong doi' dam'
// Chugn ta co resolve su ly khi thanh cong
// 				Reject xu ly khi that bai
// 				
// Xu dung doi tuong promise tao ra 
// then,catch,finally deu tao ra function
// then tao ra khi su dung resolve 
// catch tao ra khi su dung th catch
// finally deu dc tao ra khi 1 trong 2 thang duoc tao ra
// 
// 
// 
// 
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all
// var promise = new Promise(
// 		function(resolve, reject) {
// 			reject('error1');
// 		}
// 	);



// var promise = Promise.resolve('Thanh cong');


// promise 
// 	.then(
// 		function(result){
// 			console.log('resule', result)
// 		})
// 	.catch(
// 		function(err){
// 			console.log('error', err)
// 		})
// 	.finally(
// 		function(){
// 			console.log('Xong')
// 		});
// 		
// 		
var promise1 = new Promise(
	function(resolve) {
		setTimeout(function() {
			resolve([1]);
		}, 2000);
	}
)


var promise2 = new Promise(
	function(resolve) {
		setTimeout(function() {
			resolve([2,3]);
		},5000);
	}
)

Promise.all([promise1, promise2]) 
	.then(function(result) {
		var result1 = result[0];
		var result2 = result[1];

		console.log(result1.concat(result2));
	})

