// Countdown
const c = document.getElementById('countdown');
const target = new Date('October 31, 2025 12:00:00 GMT+0100').getTime();
function update(){const now=Date.now();let d=target-now; if(d<0){c.innerText='We are live!';return;} const days=Math.floor(d/(86400000)); const hours=Math.floor((d%86400000)/3600000); const minutes=Math.floor((d%3600000)/60000); const seconds=Math.floor((d%60000)/1000); c.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`; } update(); setInterval(update,1000);

// Simple notify form UX (placeholder)
const form = document.getElementById('notifyForm');
if(form){form.addEventListener('submit', e=>{e.preventDefault();const email=form.email.value.trim(); if(!email){alert('Enter email');return;} form.querySelector('button').innerText='Thanks ✓'; setTimeout(()=>{form.reset(); form.querySelector('button').innerText='Notify Me';},2000);});}
