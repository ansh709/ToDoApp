var add = document.getElementById('add');
var btn = document.querySelector('.btn').onclick = function() {
    var arr = [];
    arr.push(add.value);
    //console.log(arr);
    add.value = "";
    for (var i in arr) {
        document.querySelector('.data').innerHTML += `
            <div class="list01 wow animate bounceInUp">
              <p class="para"><span class="list">${arr[i]}</span> 
              </p>
			 
			     <span class="del"><i class="far fa-trash-alt"></i></span>
                 <span class="btn  ok"><i class="far fa-bookmark"></i></span>
			
            <div>
			
        `;
    }
    var del = document.getElementsByClassName('del');
    for (var i = 0; i < del.length; i++) {
        del[i].addEventListener("click", function() {
            this.parentElement.style.display = 'none';
        })
    }
    var para = document.getElementsByClassName('para');
    for (var i in para) {
        para[i].addEventListener('click', function() {
            if (para[i].clicked = true) {
                this.contentEditable = true;
                this.style.border = "none";
            } else {
                this.contentEditable = false;
            }
        });
    }
}


dat = ()=>{
	var date = document.getElementById('date');
	var d = new Date();
	date.innerHTML+=d;
	
}
dat()