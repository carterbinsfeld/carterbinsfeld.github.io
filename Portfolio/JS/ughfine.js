console.log("JavaScript is connected!");

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', function(e) {
      const isActive = this.classList.contains('active');
      // collapse all cards
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      // if this one wasn't active, open it; if it was, leave it closed
      if (!isActive) {
        this.classList.add('active');
        e.preventDefault(); // prevent the immediate navigation on first tap
      }
    }, { passive: false });
  });