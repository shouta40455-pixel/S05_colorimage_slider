// HTMLから要素を取得
const slider = document.getElementById('comparison-slider');
const afterWrap = document.querySelector('.image-after-wrap');
const sliderButton = document.getElementById('slider-button');

// スライダーが動いたときに実行する処理
slider.addEventListener('input', (e) => {
  const value = e.target.value; // 0 〜 100 の値を取得
  
  // After画像の表示幅を変更
  afterWrap.style.width = `${value}%`;
  
  // 白い縦線の位置を変更
  sliderButton.style.left = `${value}%`;
});
