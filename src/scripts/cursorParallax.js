function cursorParallax() {
  const targets = document.querySelectorAll('.hover-parallax');

  if(targets.length === 0) return;

  const PARALLAX_FACTOR = 25; // def=40

  function norm (value, min, max) {
    return (value - min) / (max - min);
  }

  function lerp (min, max, ratio) {
    return min + (max - min) * ratio;
  }

  targets.forEach((target) => {
    const item = target.querySelector('.hover-parallax__item');
    if(!item) return;

    const itemStyle = item.style;

    let targetX,targetY,
    xCenterItem,yCenterItem,
    targetWidth,targetHeight,
    itemWidth,itemHeight;

    target.addEventListener('mouseenter', () => {
      const targetRect = target.getBoundingClientRect();
      targetX = targetRect.left;
      targetY = targetRect.top;

      targetWidth = targetRect.width;
      targetHeight = targetRect.height;

      const itemRect = item.getBoundingClientRect();
      itemWidth = itemRect.width;
      itemHeight = itemRect.height;

      xCenterItem = itemWidth / 2;
      yCenterItem = itemHeight / 2;
    });

    target.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX - targetX;
      const xNorm = norm(mouseX, 0, targetWidth);
      const x = (xCenterItem - lerp(0, itemWidth, xNorm)) / PARALLAX_FACTOR;

      const mouseY = e.clientY - targetY;
      const yNorm = norm(mouseY, 0, targetHeight);
      const y = (yCenterItem - lerp(0, itemHeight, yNorm)) / PARALLAX_FACTOR;

      itemStyle.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    });

    target.addEventListener('mouseleave', () => {
      itemStyle.transform = '';
    });
  });
}

cursorParallax();