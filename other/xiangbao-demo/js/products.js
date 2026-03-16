// 产品中心页面动画
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // 页面头部动画
    gsap.from('.page-header', {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 分类卡片动画
    gsap.from('.category-card', {
        scrollTrigger: {
            trigger: '.product-categories',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // 产品区域标题动画
    gsap.from('.product-section .section-header', {
        scrollTrigger: {
            trigger: '.product-section',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // 产品卡片动画 - 双层防爆拉链
    gsap.from('#double-zipper .product-item', {
        scrollTrigger: {
            trigger: '#double-zipper',
            start: 'top 80%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // 产品卡片动画 - 机器
    gsap.from('#machines .product-item', {
        scrollTrigger: {
            trigger: '#machines',
            start: 'top 80%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // 产品卡片动画 - 模具
    gsap.from('#molds .product-item', {
        scrollTrigger: {
            trigger: '#molds',
            start: 'top 80%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
});
