const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientBox = document.getElementById('gradientBox');
const cssCode = document.getElementById('cssCode');
const gradientBtn = document.getElementById('gradientBtn');

function generateGradient() {
  const gradientValue = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  gradientBox.style.background = gradientValue;
  cssCode.textContent = gradientValue;
}

gradientBtn.addEventListener('click', generateGradient);
