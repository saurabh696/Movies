// JavaScript source code

function createElement(element){
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}
document.getElementById("button-addon2").addEventListener('click', loadText);
let a = document.getElementById("first");
let url = "http://www.omdbapi.com/?t=";

function loadText(){
	let title = document.getElementById("search").value;
	let key = "&apikey=83d811f3"
	let api = url+title+key;
	var xhr = new XMLHttpRequest();
	xhr.open("get", api, true);
	xhr.onload = function(){
		if(this.status==200){
			var user = JSON.parse(this.responseText)
			let img = createElement('img');
			let h1 = createElement('h1');
			let p1 = createElement('p');
			let h2 = createElement('h2');
			h1.className="info1";
			h2.className="info2";
			p1.className="plot1";
			img.src=user.Poster;
			h1.innerHTML=`${user.Title} released on ${user.Released} directed by ${user.Director}`;
			p1.innerHTML=`${user.Plot}`;
			h2.innerHTML=`Starring:  ${user.Actors}`;
			append(a,h1);
			append(a,h2);
			append(a,p1);
			append(a,img);
			
		
		}
	}
	xhr.send();
}
