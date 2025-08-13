// Set year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Simple mailto form submit (no backend)
const emailTo = 'techlab.simon@gmail.com'; // TODO: set your email or use a contact form service

document.getElementById('inquiryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = encodeURIComponent(fd.get('name'));
  const email = encodeURIComponent(fd.get('email'));
  const msg = encodeURIComponent(fd.get('message'));

  const subject = encodeURIComponent(`New inquiry from ${fd.get('name')}`);
  const body = encodeURIComponent(
    `Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\nMessage:\n${decodeURIComponent(msg)}`
  );

  window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
});

//This is a test to commit