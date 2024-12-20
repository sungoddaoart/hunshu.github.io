// script.js
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.main-content div');

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            element.classList.add('show');
        }
    });
});

// 为内容添加渐显动画
const style = document.createElement('style');
style.innerHTML = `
    .main-content div.show {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.8s ease;
    }
`;
document.head.appendChild(style);

// 设定誓言开始时间
const startTime = new Date(); // 当前时间
const commitmentElement = document.getElementById('commitment-time');

const updateCommitmentTimer = () => {
    const now = new Date();
    const elapsedTime = Math.floor((now - startTime) / 1000); // 计算经过的秒数

    const days = Math.floor(elapsedTime / (24 * 3600));
    const hours = Math.floor((elapsedTime % (24 * 3600)) / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    commitmentElement.textContent = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
};

// 每秒更新一次计时器
setInterval(updateCommitmentTimer, 1000);