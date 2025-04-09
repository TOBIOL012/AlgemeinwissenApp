document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.startseite-container');
  const pfadanzeige = document.querySelector('.buttons-container .pfad');
  const fehler = document.querySelector('.Fehler-container');

  let startX = null;
  let currentX = null;
  let isDragging = false;
  let atEndPosition = false;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const threshold = 0.1 * vw;
  const autoSwipeThreshold = 0.3 * vw;

  container.style.transition = 'transform 0s';

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;

    container.style.transition = 'transform 0s';
  });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging || startX === null) return;
    currentX = e.touches[0].clientX;
    const deltaX = startX - currentX;

    // ❌ Kein Hinscrollen per Swipe erlaubt
    if (!atEndPosition) return;

    if (deltaX < -threshold) {
      const translateAmount = Math.min(currentX - startX - threshold, vw);
      container.style.transform = `translateX(-${vw - translateAmount}px)`;
    }
  });

  container.addEventListener('touchend', () => {
    if (!isDragging || startX === null || currentX === null) return;
    isDragging = false;

    const totalDeltaX = startX - currentX;

    container.style.transition = 'transform 0.3s ease';

    if (atEndPosition && totalDeltaX < -autoSwipeThreshold) {
      // ✅ Nur Rückscrollen per Wischen erlaubt
      container.style.transform = `translateX(0)`;
      atEndPosition = false;
    } else {
      // Position beibehalten
      if (atEndPosition) {
        container.style.transform = `translateX(-100vw)`;
      } else {
        container.style.transform = `translateX(0)`;
        pfadanzeige.style.transform = `translateX(0)`;
        fehler.style.transform = `translateX(0)`;
      }
    }

    startX = null;
    currentX = null;
  });

  // ✅ Nur Button erlaubt das Hinscrollen
  document.querySelectorAll('.pfad-absolute').forEach(button => {
    button.addEventListener('click', () => {
      container.style.transition = 'transform 0.3s ease';
      container.style.transform = `translateX(-100vw)`;
      atEndPosition = true;
    });
  });

  // ✅ Nav-Button mit Index 1 scrollt zurück
  const navButtons = document.querySelectorAll('.nav-button')[0];
  navButtons.addEventListener('click', () => {
      container.style.transition = 'transform 0.3s ease';
      container.style.transform = `translateX(0)`;
      atEndPosition = false;
  });

  // Neuer Code: Setze Icon-Skalierung basierend auf der sichtbaren Kategorie im Scrollbereich
  const lernpfad = document.querySelector('.lernpfad');
  if (lernpfad) { 
      const scrollContainer = lernpfad.querySelector('.scroll');
      const categories = scrollContainer.querySelectorAll('[id="kategorie"]');
      const icons = lernpfad.querySelectorAll('.side img');
      
      scrollContainer.addEventListener('scroll', () => {
        console.loog('Scrolling...');
          let minDistance = Infinity;
          let activeIndex = 0;
          const containerTop = scrollContainer.getBoundingClientRect().top;
          categories.forEach((cat, index) => {
              const rect = cat.getBoundingClientRect();
              const distance = Math.abs(rect.top - containerTop);
              if (distance < minDistance) {
                  minDistance = distance;
                  activeIndex = index;
              }
          });
          icons.forEach((icon, index) => {
              icon.style.transform = index === activeIndex ? 'scale(1.2)' : 'scale(1)';
          });
      });
  }
});