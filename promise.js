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

var promise = new Promise(  //new Promise

	function (resolve,reject) { //Executor
		//Logic xu? ly
		//resolve: THanh cong
		//reject: That bai	
		//
		//
		// Fake call API
		resolve(
			[{
				id: 1,
				name: 'JS'
			}
			]); 
	}
);  


promise
	.then(
			function(courses) {
				console.log(courses);
			}
		)
	.catch(
			function() {
				console.log('helloworld2!');
			}
		)
	.finally(
			function() {
				console.log('finally!');
			}
		);
	



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