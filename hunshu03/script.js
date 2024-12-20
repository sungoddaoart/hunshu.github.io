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
// ... existing code ...

// 设置固定日期
const fixedDate = new Date('2009-09-09T00:00:00'); // 设定为2009年9月初9

function updateCommitmentTime() {
    const now = new Date();
    const timeDiff = now - fixedDate; // 计算当前时间与固定日期的差值

    // 计算天、小时、分钟和秒
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // 更新页面显示
    document.getElementById('commitment-time').innerText = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}

// 每秒更新一次计时器
setInterval(updateCommitmentTime, 1000);

// edit_1: 弹出随机图片
window.onload = function() {
    const images = document.body.getAttribute('data-images').split(','); // 获取图片名称数组
    const randomIndex = Math.floor(Math.random() * images.length); // 随机选择索引
    const imgSrc = images[randomIndex]; // 获取随机图片名称

    const img = document.createElement('img');
    img.src = imgSrc; // 使用随机选择的图片名称
    img.alt = '随机图片';
    img.className = 'popup-image'; // 添加类名以应用样式

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.zIndex = '1000';
    popup.onclick = function() {
        document.body.removeChild(popup);
    };

    popup.appendChild(img);
    document.body.appendChild(popup);
};
