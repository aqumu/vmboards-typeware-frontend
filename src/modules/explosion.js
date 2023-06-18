export default function explosion(canvas) {

  const context = canvas.getContext("2d");
  canvas.width = 960
  canvas.height = 1080

  const
    delta = 16, // 16ms for 60fps
    length = 60,
    images = new Array(length);

  let current = 45,
    ismouseover = false;

  for (let i = 1; i <= length; i++) {
    const image = new Image();
    image.src = "../" + i + ".png"
    images[i-1] = image;
  }

  canvas.addEventListener("mouseenter", () => {
    ismouseover = true;
  });

  canvas.addEventListener("mouseleave", () => {
    ismouseover = false;
  });

  function drawFrame(ctx, imgs, cur, len, isover) {
    if (isover) {
      console.log(isover)
      cur = 50
    }
    if (!isover) {
      console.log(isover)
      cur = 20
    }
    ctx.drawImage(imgs[cur], 0, 0);
  }

  setInterval(drawFrame, delta, context, images, current, length, ismouseover);
}