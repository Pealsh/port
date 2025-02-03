// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// サイバー効果のアニメーション
function createCyberEffect() {
    const overlay = document.createElement('div');
    overlay.classList.add('cyber-line');
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.remove();
    }, 1000);
}

// ランダムな間隔でサイバー効果を生成
setInterval(() => {
    if (Math.random() > 0.9) {
        createCyberEffect();
    }
}, 2000);

function initRotatingText() {
    const container = document.getElementById('rotating-text');
    const words = ['Programmer', 'Gamer', 'Designer'];
    let currentIndex = 0;
    
    // コンテナをクリア
    container.innerHTML = '';
    
    // 各単語用の要素を作成
    words.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'text-rotate-word';
        
        // 単語を文字に分割して各文字にspanを適用
        const chars = word.split('').map((char, charIndex) => {
            return `<span class="char" style="--delay: ${charIndex * 50}ms">${char}</span>`;
        });
        
        wordElement.innerHTML = chars.join('');
        container.appendChild(wordElement);
    });
    
    const wordElements = container.querySelectorAll('.text-rotate-word');
    
    function updateActiveWord() {
        // 現在のアクティブな要素を非アクティブに
        wordElements.forEach(el => {
            el.classList.remove('active');
            el.classList.add('exit');
        });
        
        // 新しい要素をアクティブに
        setTimeout(() => {
            wordElements[currentIndex].classList.remove('exit');
            wordElements[currentIndex].classList.add('active');
            
            // コンテナの幅を更新
            const activeWord = wordElements[currentIndex];
            const containerWidth = activeWord.offsetWidth;
            container.parentElement.parentElement.style.width = `${containerWidth + 80}px`;
            
            // 次のインデックスを設定
            currentIndex = (currentIndex + 1) % words.length;
        }, 300); // 前の単語が消えるのを待つ
    }
    
    // 初期表示
    updateActiveWord();
    
    // 定期的に更新
    setInterval(updateActiveWord, 3000);
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', initRotatingText);

// リサイズ時に再計算
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initRotatingText, 100);
}); 