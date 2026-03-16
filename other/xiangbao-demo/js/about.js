// 关于页面动画
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // 页面头部动画
    gsap.from('.page-header', {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 公司简介文字动画
    gsap.from('.intro-text', {
        scrollTrigger: {
            trigger: '.company-intro',
            start: 'top 80%'
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 统计数字动画
    gsap.from('.stat-box', {
        scrollTrigger: {
            trigger: '.intro-stats',
            start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // 工厂卡片动画
    gsap.from('.factory-card', {
        scrollTrigger: {
            trigger: '.factory-section',
            start: 'top 80%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // 展厅动画
    gsap.from('.showroom-item', {
        scrollTrigger: {
            trigger: '.showroom',
            start: 'top 80%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // 全球市场动画
    gsap.from('.market-content', {
        scrollTrigger: {
            trigger: '.global-market',
            start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 团队照片动画
    gsap.from('.team-card', {
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // 统计数字计数动画
    const statNums = document.querySelectorAll('.stat-num');
    statNums.forEach(function(num) {
        const targetNum = parseInt(num.getAttribute('data-target'));
        
        gsap.fromTo(num, 
            { textContent: 0 },
            {
                textContent: targetNum,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: '.intro-stats',
                    start: 'top 80%'
                }
            }
        );
    });
});
