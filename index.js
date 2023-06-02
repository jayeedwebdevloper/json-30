const product = [{ name: "iPhone 13", ramAndRom: '6 / 256 GB', battery: "3880 mAh", price: '$ 1400' }, { name: "iPhone 13", ramAndRom: '6 / 128 GB', battery: "3880 mAh", price: '$ 1200' }, { name: "iPhone 11", ramAndRom: '4 / 256 GB', battery: "3880 mAh", price: '$ 1100' }, { name: "iPhone 14", ramAndRom: '6 / 256 GB', battery: "3880 mAh", price: '$ 1700' }];
const productJSON = JSON.stringify(product);

let getP = JSON.parse(productJSON);

let product_1 = document.getElementById('product-list1');
let product_2 = document.getElementById('product-list2');
let product_3 = document.getElementById('product-list3');


product_1.innerHTML = `<div class = 'row'>
    <h3 class ='text-center py-4'>JSON Stringify</h3>
    <div class = 'col-12 col-lg-4'>
        <div class="card shadow">
  <img src="iphone13.png" class="card-img-top w-50 text-center mx-auto pt-4 pb-2" alt="iphone">
  <div class="card-body">
    <h5 class="card-title">${getP[0].name}</h5>
    <p class="card-text"><b>RAM & ROM:</b> ${getP[0].ramAndRom} </br> <b>Battery: </b> ${getP[0].battery} </br> <b>Price: </b> ${getP[0].price}</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
    <div class = 'col-12 col-lg-4'>
        <div class="card shadow">
  <img src="iphone11.jpg" class="card-img-top w-50 text-center mx-auto pt-4 pb-2" alt="iphone">
  <div class="card-body">
    <h5 class="card-title">${getP[2].name}</h5>
    <p class="card-text"><b>RAM & ROM:</b> ${getP[2].ramAndRom} </br> <b>Battery: </b> ${getP[2].battery} </br> <b>Price: </b> ${getP[2].price}</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
    <div class = 'col-12 col-lg-4'>
        <div class="card shadow">
  <img src="iphone14.png" class="card-img-top w-50 text-center mx-auto pt-4 pb-2" alt="iphone">
  <div class="card-body">
    <h5 class="card-title">${getP[3].name}</h5>
    <p class="card-text"><b>RAM & ROM:</b> ${getP[3].ramAndRom} </br> <b>Battery: </b> ${getP[3].battery} </br> <b>Price: </b> ${getP[3].price}</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
</div>`;

product_2.innerHTML = `<h3 class='text-center pt-5 pb-2'>JSON placeholder </h3>
<button class='btn btn-primary' id='loadList' onclick='loadUser()'>See available Users </button> <h4 class='d-inline-block ps-4 pt-5'><mark><--- Please Click This Button for See Users</mark> </h4> </br> <div id='product-list' class='row g-3 pt-3'></div>`;

product_3.innerHTML = `<h3 class='text-center pt-5'>Some Gallery By JSON</h3>`

let loadBtn = document.getElementById('loadList');


function loadUser() {
  fetch('json.js')
    .then(res => res.json())
    .then(data => loadList(data))
}

function loadList(user) {
  let list = document.getElementById('product-list');
  for (let users of user) {
    let div = document.createElement('div');
    div.classList.add('col-md-3');
    div.classList.add('col-12');
    list.appendChild(div);
    let div1 = document.createElement('div');
    div1.classList.add('mx-1');
    div1.classList.add('bg-primary');
    div1.classList.add('p-2');
    div1.classList.add('rounded');
    div1.classList.add('text-white');
    div1.innerHTML = `<p class='p-0 m-0'><b>ID : </b>${users.id}</p>
    <p class='p-0 m-0'><b>Name : </b>${users.name}</p>
    <p class='p-0 m-0'><b>User-Name : </b>${users.username}</p>
    <p class='p-0 m-0'><b>Email : </b>${users.email}</p>`;
    div.appendChild(div1);
  }
}

function loadPhoto() {
  fetch('jsonphoto.js')
    .then(res => res.json())
    .then(data => loadPost(data))
}

function loadPost(photo) {
  for (let photos of photo) {
    let img = document.createElement('img');
    img.classList.add('w-25');
    img.classList.add('p-1');
    img.classList.add('rounded');
    img.classList.add('shadow');
    img.classList.add('border-5');
    img.classList.add('m-1');
    img.src = photos.thumbnailUrl;
    product_3.appendChild(img);
    if (photos.id == 12) {
      break;
    }
    console.log(photos);
  }
}
loadPhoto()