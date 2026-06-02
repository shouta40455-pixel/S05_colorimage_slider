// ページ内にある「slider-container」をすべて見つける
const containers = document.querySelectorAll('.slider-container');

// 見つかったすべてのグループに対して、一つずつ処理を設定する
containers.forEach((container) => {
  // そのグループの中にあるパーツだけをピンポイントで取得
  const slider = container.querySelector('.slider');
  const afterWrap = container.querySelector('.image-after-wrap');
  const sliderButton = container.querySelector('.slider-button');

  // そのスライダーが動かされたときの処理
  slider.addEventListener('input', (e) => {
    const value = e.target.value;
    
    // そのグループの画像と線だけを動かす
    afterWrap.style.width = `${value}%`;
    sliderButton.style.left = `${value}%`;
  });
});
