/* Window Loading*/
const loading = document.querySelector('.loading');
const bodyElement = document.querySelector('body');
window.addEventListener('load', e => {
    loading.style.display = "none";
    bodyElement.style.overflow = "visible";
})

// For Cart Section Toggling

const cartIcon = document.querySelector('.cartIcon');
const cartSection = document.querySelector('.cartSection');
const noti = document.querySelector(".noti");


cartIcon.addEventListener('click', e => {
    cartSection.style.transform = "translate(0%)";
})

cartSection.querySelector("img").addEventListener('click', e => {
    cartSection.style.transform = "translate(100%)";
})

const itemBoxes = document.querySelectorAll(".itembox");

// For adding and removing Cart Items

itemBoxes.forEach(box => {
    box.addEventListener("click", e => {
        if(e.target == box.querySelector('.add')){
            let newCartItem = e.target.parentElement.cloneNode(true);
            newCartItem.classList.remove("itembox");
            newCartItem.classList.add("cartItemBox");
            newCartItem.querySelector('.add').remove();
            newCartItem.querySelector('.remove').style.display = "inline-block";
            newCartItem.addEventListener('click', e => {
                if(e.target == newCartItem.querySelector('.remove')){
                    e.target.parentElement.remove();
                }
            })

            // For Notification

            cartSection.querySelector('.cartItems').append(newCartItem);
            noti.style.transform = "translateX(0px)";
            setTimeout(() => noti.style.transform = "translateX(-407px)", 2000);
        }

    })
})

// For Searching Items

const searchBar = document.querySelector('.searchBar');
const searchIcon = document.querySelector('.searchIcon');

searchIcon.addEventListener('click', e => {
    itemBoxes.forEach(box => {
        if(searchBar.value.includes(box.querySelector('.itemName').textContent.toLowerCase())){
            box.style.display = "flex";
        }else if(searchBar.value == ""){
            box.style.display = "flex";
        }else{
            box.style.display = "none"
        }
    })
    
})

// For purchasing

let purchaseBtn = document.querySelector('.purchase');

purchaseBtn.addEventListener('click', e => {
    if(cartSection.querySelector('.cartItems').hasChildNodes()){
        cartSection.querySelectorAll(".cartItemBox").forEach(box => {
            box.remove();
        })
        window.alert("Thanks for ordering!, Your ordered items will be delivered soon!")
    }else{
        window.alert("There is no item in your cart!")
    }
    
})