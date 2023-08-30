let id="no";
//localStorage.clear();
selectData();
function todoData(){
	document.getElementById('msg').innerHTML="";
	let wrk=document.getElementById('wrk').value;
	if(wrk==''){
		document.getElementById('msg').innerHTML='Please enter your work';
	}else{
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[wrk];
				setCrudData(data);
			}else{
				arr.push(wrk);
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Work added';
		}else{
			let arr=getCrudData();
			arr[id]=wrk;
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Work updated';
		}
		document.getElementById('wrk').value='';
		selectData();
	}
}

function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let htm='';
		let sno=1;
		for(let k in arr){
			htm=htm+`<tr><td>${sno}</td><td>${arr[k]}</td><td><button onclick="editData(${k})">Edit</button>&nbsp;<button onclick="deleteData(${k})">Delete</button></td></tr>`;

			sno++;
		}
		document.getElementById('root').innerHTML=htm;
		
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('wrk').value=arr[rid];
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('wrk'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('wrk',JSON.stringify(arr));
}
