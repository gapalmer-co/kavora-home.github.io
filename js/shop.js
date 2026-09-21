let catalog=[];
async function initShop(){
 catalog=await (await fetch('data/catalog.json')).json();
 const sel=document.getElementById('catFilter');
 [...new Set(catalog.map(p=>p.category))].sort().forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;sel.appendChild(o)});
 const params=new URLSearchParams(location.search); if(params.get('category'))sel.value=params.get('category');
 document.getElementById('siteSearch')?.addEventListener('keydown',e=>{if(e.key==='Enter')render()});
 ['catFilter','sortFilter','siteSearch'].forEach(id=>document.getElementById(id)?.addEventListener('input',render));
 render();
}
function render(){
 const q=(document.getElementById('siteSearch')?.value||new URLSearchParams(location.search).get('q')||'').toLowerCase();
 const cat=document.getElementById('catFilter').value; const sort=document.getElementById('sortFilter').value;
 let a=catalog.filter(p=>(!q||p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q))&&(!cat||p.category===cat));
 if(sort==='low')a.sort((x,y)=>x.price-y.price); if(sort==='high')a.sort((x,y)=>y.price-x.price); if(sort==='rating')a.sort((x,y)=>y.rating-x.rating);
 document.getElementById('resultCount').textContent=a.length+' products';
 document.getElementById('shopGrid').innerHTML=a.map(p=>`<article class="product-card"><a class="pimage" href="products/${p.slug}.html"><img src="assets/images/products/${p.image}" alt="${p.name}"></a><button class="heart" onclick="event.preventDefault();toggleWish('${p.id}')">♡</button><div class="pinfo"><small>${p.category}</small><h3><a href="products/${p.slug}.html">${p.name}</a></h3><div class="rating"><span>${'★'.repeat(Math.round(p.rating))}</span> <em>(${p.reviews})</em></div><strong>$${p.price.toFixed(2)}</strong><button class="add" onclick="addCart('${p.id}')">Add to cart</button></div></article>`).join('');
}
initShop();
