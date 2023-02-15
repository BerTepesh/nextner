const addresses = [{
	city: 0,
	address: 0,
	home: 0,
	number: 0
}]

var form = document.getElementById("form");
var holder = form.getElementsByClassName('form__holder')[0];

function addElem() {
	holder.innerHTML = "";
	addresses.push(
		{
			city: addresses.length,
			address: addresses.length, 
			home: addresses.length, 
			number: addresses.length
		})
	showElems();
}

function removeElem(e) {
	if(addresses.length > 1) {
		holder.innerHTML = "";
		addresses.splice(e, 1);
		showElems();
	}
}

function showElems() {
	addresses.forEach(function (elem, index) {
		var address = document.createElement("div");
		address.className = "address";
		address.setAttribute("id", "address_" + index);
		
		var title = document.createElement("h2");
		title.textContent = "Address " + (index + 1)
		title.className = "address__title";
		address.appendChild(title);
		
		for(var prop in addresses[0]) {
			var label = document.createElement("label");
			label.textContent = prop.charAt(0).toUpperCase() + prop.slice(1);
			var elem = document.createElement("input");
			elem.setAttribute("name", prop + "_" + index);
			elem.className = "address__input";
			address.append(label, elem);
		}
		holder.appendChild(address);
	})
}

window.onload = showElems();

