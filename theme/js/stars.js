// Анимация звездного неба с улучшенным визуалом и поддержкой скролла по всей странице

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('stars-bg');
    const ctx = canvas.getContext('2d');
    let stars = [];
    const STAR_COUNT = 700;
    const STAR_MIN_SIZE = 0.7;
    const STAR_MAX_SIZE = 2.2;
    const STAR_MIN_ALPHA = 0.4;
    const STAR_MAX_ALPHA = 1.0;

    function getPageSize() {
        // Получаем всю прокручиваемую высоту страницы
        return {
            width: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, window.innerWidth),
            height: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, window.innerHeight)
        };
    }

    function resizeCanvas() {
        const size = getPageSize();
        canvas.width = size.width;
        canvas.height = size.height;
    }

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    function createStars() {
        const size = getPageSize();
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * size.width,
                y: Math.random() * size.height,
                size: randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE),
                baseAlpha: randomBetween(STAR_MIN_ALPHA, STAR_MAX_ALPHA),
                twinkleSpeed: randomBetween(0.005, 0.025),
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }

    function drawBackground() {
        const size = getPageSize();
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, size.width, size.height);
    }

    function drawStars() {
        const size = getPageSize();
        drawBackground();
        for (let i = 0; i < STAR_COUNT; i++) {
            let star = stars[i];
            let twinkle = Math.sin(performance.now() * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
            let alpha = Math.max(0, Math.min(1, star.baseAlpha * twinkle));
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
            ctx.fillStyle = '#fff';
            ctx.globalAlpha = alpha;
            ctx.shadowColor = '#fff';
            ctx.shadowBlur = 8 * star.size;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }
    }

    function animate() {
        drawStars();
        requestAnimationFrame(animate);
    }

    function updateAll() {
        resizeCanvas();
        createStars();
    }

    window.addEventListener('resize', updateAll);
    window.addEventListener('scroll', resizeCanvas);

    updateAll();
    animate();
}); 