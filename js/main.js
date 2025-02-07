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
    const words = ['taiyo.study0823@gmail.com', '090-9298-5343', 'Ariitaiyou0823', 'gaymer'];
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
        const oldActiveTag = container.querySelector(".active");
        if (oldActiveTag) {
            oldActiveTag.classList.remove("active")
            oldActiveTag.classList.add("exit")
        }

        // 新しい要素をアクティブに
        setTimeout(() => {
            const nextActiveTag = wordElements[currentIndex];
            nextActiveTag.classList.remove('exit');
            nextActiveTag.classList.add('active');

            // コンテナの幅を更新
            container.parentElement.parentElement.style.width = `${nextActiveTag.offsetWidth + 80}px`;

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



// function initFlickerEffect() {
//     const flickerLetter = document.querySelector('.g');
//     console.log(flickerLetter)
    
//     function randomFlicker() {
//         // ランダムな消灯時間（0.1秒から0.5秒）
//         const offDuration = Math.random() * 400 + 100;
//         // ランダムな点灯時間（0.5秒から3秒）
//         const onDuration = Math.random() * 2500 + 500;
        
//         // 消灯
//         flickerLetter.style.opacity = '0';
//         flickerLetter.style.textShadow = 'none';

//         // 点灯までの待機
//         setTimeout(() => {
//             // 点灯
//             flickerLetter.style.opacity = '1';
//             flickerLetter.style.textShadow = '0 0 4px #00ff66, 0 0 8px #00ff66';
            
//             // 次の消灯までの待機
//             setTimeout(randomFlicker, onDuration);
//         }, offDuration);
//     }
    
//     randomFlicker();
// }

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    initRotatingText();
    // initFlickerEffect();
});

// ハンバーガーメニューの制御を追加
function initMobileNav() {
    // const hamburger = document.querySelector('.hamburger'); // hamburgerクラスを持つタグがないからエラー出る
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // 各リンクにインデックスを設定
    links.forEach((link, index) => {
        link.style.setProperty('--i', index);
    });

    // hamburger.addEventListener('click', () => {
    //     // ナビゲーションの表示/非表示を切り替え
    //     navLinks.classList.toggle('active');
    //     hamburger.classList.toggle('active');

    //     // メニューが開いているときはスクロールを無効化
    //     document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    // });

    // リンクをクリックしたらメニューを閉じる
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// DOMContentLoadedイベントに追加
document.addEventListener('DOMContentLoaded', () => {
    initRotatingText();
    // initFlickerEffect();
    initMobileNav();
}); 