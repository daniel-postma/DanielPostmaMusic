<script>
  // Smooth fade-in on scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 1s ease-out';
    observer.observe(section);
  });

  // Floating oracle bubble
  const oracleMessages = [
    \"You are the frequency of expansion.\",
    \"Your body already knows the way.\",
    \"Abundance isn't a goal. It's a state.\",
    \"Your next $10K is already vibrating toward you.\"
  ];

  const oracle = document.createElement('div');
  oracle.innerText = '✨';
  oracle.style.position = 'fixed';
  oracle.style.bottom = '2rem';
  oracle.style.right = '2rem';
  oracle.style.fontSize = '2rem';
  oracle.style.cursor = 'pointer';
  oracle.title = 'Tap for a message';
  document.body.appendChild(oracle);

  oracle.addEventListener('click', () => {
    const message = oracleMessages[Math.floor(Math.random() * oracleMessages.length)];
    alert(message); // You can swap this with a modal for elegance
  });

  // Animate CTA on hover
  const ctas = document.querySelectorAll('.cta-button');
  ctas.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)';
      btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = 'none';
      btn.style.transform = 'scale(1)';
    });
  });
</script>
