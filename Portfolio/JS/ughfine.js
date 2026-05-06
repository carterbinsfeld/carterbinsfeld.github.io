console.log("JavaScript is connected!");

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', function(e) {
      const isActive = this.classList.contains('active');
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      if (!isActive) {
        this.classList.add('active');
        e.preventDefault();
      }
    }, { passive: false });
  });