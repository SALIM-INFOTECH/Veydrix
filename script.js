// TARGET: 30 Nov 2025 12:00 (Africa/Lagos) -> UTC 11:00
const TARGET = Date.UTC(2025,10,30,11,0,0);

function pad(n){return String(n).padStart(2,'0');}
function updateCountdown(){
  const now = Date.now(); let diff = TARGET - now;
  const el = document.getElementById('countdown'); if(!el) return;
  if(diff <= 0){
    el.innerHTML = '<div class="seg"><div class="num">🚀 Veydrix Has Launched</div></div>';
    const btn = document.querySelector('.btn-primary'); if(btn) btn.classList.add('pulse');
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24)); diff -= days*(1000*60*60*24);
  const hours = Math.floor(diff / (1000*60*60)); diff -= hours*(1000*60*60);
  const minutes = Math.floor(diff / (1000*60)); diff -= minutes*(1000*60);
  const seconds = Math.floor(diff / 1000);
  el.innerHTML = [
    {v:days,label:'Days'},
    {v:hours,label:'Hours'},
    {v:minutes,label:'Minutes'},
    {v:seconds,label:'Seconds'}
  ].map(s => `<div class="seg"><div class="num">${pad(s.v)}</div><div class="label">${s.label}</div></div>`).join('');
}
updateCountdown(); setInterval(updateCountdown,1000);

// Formspree async submission + glowing confirmation
const form = document.getElementById('notifyForm');
const msg = document.getElementById('form-message');
if(form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.style.display = 'none';
    const data = new FormData(form);
    const res = await fetch(form.action, { method: form.method, body: data, headers: { 'Accept':'application/json' }});
    if(res.ok){
      msg.textContent = '✅ Thanks — we’ll notify you soon.';
      msg.className = 'form-message success'; msg.style.display='block';
      form.reset();
    } else {
      msg.textContent = '⚠️ Oops — something went wrong. Please try again.';
      msg.className = 'form-message error'; msg.style.display='block';
    }
  });
}
