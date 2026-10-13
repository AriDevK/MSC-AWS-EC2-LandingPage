(() => {
  const colors = [
    '#8839ef', // mauve
    '#1e66f5', // blue
    '#209fb5', // sapphire
    '#40a02b', // green
    '#df8e1d', // yellow
    '#ea76cb', // pink
  ];

  const launchConfetti = () => {
    window.confetti({
      count: 120,
      size: 1.15,
      velocity: 155,
      fade: true,
      color: colors,
      position: {
        x: window.innerWidth / 2,
        y: window.innerHeight * 0.34,
      },
    });
  };

  const startConfetti = () => {
    launchConfetti();
    window.setInterval(launchConfetti, 2200);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startConfetti, { once: true });
  } else {
    startConfetti();
  }
})();
