const elIcon = document.querySelector(".like");
const elBtnIcon = document.querySelector(".icon-btn");
const elBtn = document.querySelector(".btn");
const elVector = document.querySelector(".vector-btn");
const elModal = document.querySelector(".box-modal");
const modalMini = document.querySelector(".modal-mini");
const elInput = document.querySelector("#toggle");
const elWrapper = document.querySelector("#wrapper");
const elFasr = document.querySelector(".farbutton");
const elFad = document.querySelector(".fadbutton");
const elWrape = document.querySelector(".wrapper_second");
const elTitle = document.querySelector(".main__title");
const elText = document.querySelector(".main__text");
const elTyomniy = document.querySelector(".label--checkbox");

elVector.addEventListener("click", () => {
  elModal.classList.remove("modal-active");
  modalMini.classList.remove("modalcha");
});
elInput.addEventListener("click", () => {
  document.body.classList.toggle("x");
});

let el_wrapper = document.querySelector("#wrapper");
let elBig = document.querySelector("#big-box");

// SHU YERDDAN BOSHLAB O`ZGARTIRILDI :
function renderHouse(arr) {
  el_wrapper.innerHTML = "";
  
  arr.forEach((element) => {
    el_wrapper.innerHTML += `<div class="card">
    <img class="cardimg" src="${element.img}" alt="img">
    <h3 class="title">${element.title}</h3>
    <p class="address">${element.address}</p>
    <p class="price">${element.price} euro</p>
    <p class="date">${element.date} </p>
    
    <button class = "more" id = ${element.id}>Show more</button>
    <i class="heartbtn fa fa-heart fa-2x" aria-hidden="true"></i>
    
    </div>`;
  });
}
renderHouse(houses);

if (
  elFasr.addEventListener("click", () => {
    elBig.innerHTML = null;
    function renderHouse(arr) {
      el_wrapper.innerHTML = "";
      
      arr.forEach((element) => {
        el_wrapper.innerHTML += `<div class="card">
        <img class="cardimg" src="${element.img}" alt="img">
        <h3 class="title">${element.title}</h3>
        <p class="address">${element.address}</p>
        <p class="price">${element.price} euro</p>
        <p class="date">${element.date} </p>
        
        
        <button class = "more" id = ${element.id}>Show more</button>
        <i class="heartbtn fa fa-heart fa-2x" aria-hidden="true"></i>
        
        </div>`;
      });
    }
    renderHouse(houses);
  })
  );
  
  if (
    elFad.addEventListener("click", () => {
      el_wrapper.innerHTML = null;
      function renderHouse(arr) {
        elBig.innerHTML = "";
        
        arr.forEach((element) => {
          elBig.innerHTML += `<div class="cardsec">
          <img src="${element.img}" alt="img">
          
          <div class="nimadir">
          <h3 class="titlesec">${element.title}</h3>
          <p class="addressec">${element.address}</p>
          
          </div>
          <div class="another">
          <p class="pricesec">${element.price} euro</p>
          
          <button class = "more sec" id = ${element.id}>Show more</button>
          <i class="heartbtnsec fa fa-heart fa-2x" aria-hidden="true"></i>
          
          </div>
          
          </div>`;
        });
      }
      renderHouse(houses);
    })
    );
  
    
    let el_form = document.querySelector("#form");
    let el_search = document.querySelector("#search");
    
    let el_price = document.querySelector("#price");
    let el_date = document.querySelector("#date");
    
    // render address:
    
    let el_address = document.querySelector("#address");
    
    let sort = [];
    houses.forEach((elem) => {
      if (!sort.includes(elem.address)) {
        sort.push(elem.address);
        
        el_address.innerHTML += `<option value="${elem.address}">${elem.address}</option>`;
      }
    });
    
    //render special:
    let el_special = document.querySelector("#special");
    
    let special_sort = [];
    houses.forEach(function (elem) {
      elem.special.forEach(function (element) {
        if (!special_sort.includes(element)) {
          special_sort.push(element);
          
          el_special.innerHTML += `<option value="${element}">${element}</option>`;
        }
      });
    });
    
    // submit :
    
    el_form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // search by title:
      
      let rex_exp = new RegExp(el_search.value, "gi");
      
      let filtered_houses = houses.filter(function (elem) {
        return elem.title.match(rex_exp);
      });
      
      // renderHouse(filtered_houses);
      
      el_search.value = "";
      
      // sort by address:
      
      let sorted_by_address = [];
      
      let el_address_value = el_address.value;
      
      if (el_address_value === "All") {
        sorted_by_address = filtered_houses;
      } else {
        sorted_by_address = filtered_houses.filter(function (elem) {
          return elem.address.includes(el_address_value);
        });
      }
      
      // sort by special :
      
      let el_special_value = el_special.value;
      
      if (el_special_value !== "All") {
        sorted_by_address = sorted_by_address.filter(function (elem) {
          return elem.special.includes(el_special_value);
        });
      }
      
      // sort by price:
      let el_price_value = el_price.value;
      
      if (el_price_value === "Cheap-Expensive") {
        sorted_by_address.sort((a, b) => a.price - b.price);
      } else if (el_price_value === "Expensive-Cheap") {
        sorted_by_address.sort((a, b) => b.price - a.price);
      } else if (el_price_value === "old-new") {
        sorted_by_address.sort((a, b) => a.date - b.date);
      } else if (el_price_value === "new-old") {
        sorted_by_address.sort((a, b) => b.date - a.date);
      }
      
      renderHouse(sorted_by_address);
    });
    
    // show more btn:
    
    let el_show = document.querySelectorAll(".more");
    let el_big_modal = document.querySelector(".big_modal");
    let el_close_big_modal = document.querySelector(".close_big_modal");
    el_little_modal = document.querySelector(".little_modal");
    
    el_show.forEach((elem) => {
      elem.addEventListener("click", function (event) {
        el_big_modal.classList.add("big_modal_show");
        
        houses.forEach(function (param) {
          if (Number(event.target.id) === param.id) {
            el_little_modal.innerHTML = `      
            <img class="modal_img" src="${param.img}" alt="img">
            <h2 class="modal_title">${param.title}</h2>
            <p class="modal_address">Address: ${param.address}</p>
            <ul class="modal_list">
            <strong>House for :</strong> 
            <li class="modal_item">${param.special}</li>
            
            </ul>
            <h4 class="modal_type">Type of the house: ${param.type}</h4>
            <h4 class="modal_date">House was built in: ${param.date}</h4>
            <h3 class="modal_price">Price: ${param.price} euro</h3>
            </div> `;
          }
        });
      });
    });
    
    el_close_big_modal.addEventListener("click", function (event) {
      el_big_modal.classList.remove("big_modal_show");
    });
    
    let el_like = document.querySelectorAll(".heartbtn");
    
    el_like.forEach(function (heart) {
      heart.addEventListener("click", function (event) {
        // console.log(event.target);
        event.target.classList.toggle("red");
        event.target.parentElement.classList.toggle("likedClass");
        
        
      });
    });
    
    let el_liked_feild = document.querySelector(".liked_feild");
    
    elBtnIcon.addEventListener("click", function (e) {
      elModal.classList.add("modal-active");
      modalMini.classList.add("modalcha");
      el_liked_feild.innerHTML = ""
      
      let el_likedClass = document.querySelectorAll(".likedClass");
      
      el_likedClass.forEach(function (el) {
        el_liked_feild.innerHTML +=  el.outerHTML;
      });
    });
    
    let removeLike = document.querySelectorAll(".liked_feild .fav_icon");
    
    
    
    removeLike.forEach(function(item){
      item.addEventListener("click", function(ev){
        
      })
    })
    