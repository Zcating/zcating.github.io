// 联系我们页面动画
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // 页面头部动画
    gsap.from('.page-header', {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 联系信息动画
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 表单动画
    gsap.from('.contact-form-wrapper', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 联系项动画
    gsap.from('.contact-item', {
        scrollTrigger: {
            trigger: '.contact-items',
            start: 'top 80%'
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // 地图动画
    gsap.from('.map-placeholder', {
        scrollTrigger: {
            trigger: '.map-section',
            start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的留言！我们会尽快与您联系。');
            this.reset();
        });
    }
});
