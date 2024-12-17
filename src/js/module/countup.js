export function shuffleNumberCounter(target, duration = 2000) {
  const targetNum = Number(target.getAttribute('data-num'))

  if (!targetNum) {
    return
  }

  // startTimeをupdateCounter内で設定するように変更
  let startTime;

  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime; // 初回呼び出し時にstartTimeを設定

    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentNum = Math.floor(progress * targetNum);

    if (Number.isInteger(targetNum)) {
      target.innerHTML = currentNum;
    } else {
      target.innerHTML = `${currentNum}.${Math.floor(Math.random() * 9)}`;
    }

    if (currentNum < targetNum) {
      requestAnimationFrame(updateCounter);
    } else {
      target.innerHTML = targetNum;
    }
  }

  const observerOptions = {
    rootMargin: '0px 0px -200px 0px', 
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(updateCounter);
        observer.disconnect();
      }
    });
  }, observerOptions);

  observer.observe(target);
}