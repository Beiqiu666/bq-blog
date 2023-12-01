/*自定义JS*/
//弹框方法 (弹框文字,弹框背景颜色,文字颜色,图标符号)
function showMessage(message, backgroundColor, fontColor, symbol = '') {
    const container = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const textElement = document.createElement('span');
    textElement.textContent = message;

    messageElement.appendChild(textElement);

    if (symbol) {
        const iconElement = document.createElement('span');
        iconElement.classList.add('message-icon');
        iconElement.textContent = symbol;
        iconElement.style.backgroundColor = fontColor; // 设置背景颜色为白色
        iconElement.style.color = '#fff'; // 设置传递的符号颜色为白色
        messageElement.insertBefore(iconElement, textElement);
    } else {
        textElement.style.marginLeft = '10px';
    }

    messageElement.style.backgroundColor = backgroundColor;
    messageElement.style.color = fontColor;

    container.appendChild(messageElement);

    setTimeout(function () {
        messageElement.classList.add('show');

        setTimeout(function () {
            messageElement.classList.remove('show');

            setTimeout(function () {
                container.removeChild(messageElement);
            }, 300);
        }, 3000);
    }, 100);
}

// 禁用F12和控制台
document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "I" || e.key === "C")) || (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
        showMessage('你真坏，不能打开控制台喔 !', '#fdf6ec', '#e6a23c', '!');
        return false;
    }
});

