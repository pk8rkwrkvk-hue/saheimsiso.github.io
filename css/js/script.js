// Simple JS: set year and handle contact form (demo only).
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    // For now we'll just show a quick alert (replace with AJAX/backend if available)
    alert('Asante ' + (data.get('name') || '') + '! Ujumbe umeandaliwa kutumwa. Tumia barua pepe: saheimsiso23@gmail.com');
    form.reset();
  });
}