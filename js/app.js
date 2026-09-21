const KEY_CART='kavora_cart', KEY_WISH='kavora_wish';
async function getCatalog(){const r=await fetch('data/catalog.json');return r.json();}
function read(k){try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return[]}}
function write(k,v){localStorage.setItem(k,JSON.stringify(v))}
function addCart(id){let c=read(KEY_CART);c.push(id);write(KEY_CART,c);updateCounts();toast('Added to cart');}
function toggleWish(id){let w=read(KEY_WISH);w=w.includes(id)?w.filter(x=>x!==id):[...w,id];write(KEY_WISH,w);updateCounts();toast(w.includes(id)?'Saved to wishlist':'Removed from wishlist');}
function updateCounts(){document.querySelectorAll('#cartCount').forEach(x=>x.textContent=read(KEY_CART).length);document.querySelectorAll('#wishCount').forEach(x=>x.textContent=read(KEY_WISH).length)}
function toast(t){const x=document.getElementById('toast');if(!x)return;x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1800)}
function toggleCart(){const d=document.getElementById('cartDrawer');if(!d)return;let c=read(KEY_CART);d.innerHTML='<div class="drawer-inner"><button class="close" onclick="toggleCart()">×</button><h2>Your cart</h2>'+(c.length?'<p>'+c.length+' item(s) in your cart.</p><button class="btn primary" onclick="toast(\'Checkout ready for integration\')">Continue to checkout</button>':'<p>Your cart is empty.</p>')+'</div>';d.classList.toggle('open')}
function toggleWishlist(){toast(read(KEY_WISH).length+' saved item(s)')}
function runSearch(){const q=document.getElementById('siteSearch')?.value.trim();if(q)location.href='shop.html?q='+encodeURIComponent(q)}
function submitSupport(e){e.preventDefault();e.target.reset();toast('Message received — thank you!')}
document.addEventListener('DOMContentLoaded',updateCounts);
