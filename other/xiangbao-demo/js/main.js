// GSAP 动画主文件
document.addEventListener('DOMContentLoaded', function() {
    // 注册 ScrollTrigger 插件
    gsap.registerPlugin(ScrollTrigger);
    
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 移动端菜单切换
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 首页 Hero 区域动画
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
        .from('.hero-title .title-line', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, '-=0.5')
        .from('.hero-desc', {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, '-=0.5')
        .from('.hero .btn', {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, '-=0.5')
        .from('.scroll-indicator', {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, '-=0.3');
    
    // 特色优势卡片动画
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // 产品卡片动画
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // 关于我们区域动画
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 统计数据动画
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(function(item) {
        const target = item.querySelector('.stat-number');
        const targetNum = parseInt(target.getAttribute('data-target'));
        
        gsap.fromTo(target, 
            { textContent: 0 },
            {
                textContent: targetNum,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: '.stats',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // 工厂展示动画
    gsap.from('.factory-item', {
        scrollTrigger: {
            trigger: '.factory',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // 联系横幅动画
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-banner',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // 页面加载时的淡入效果
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
    
    // 导航菜单项依次进入
    gsap.from('.nav-menu li', {
        scrollTrigger: {
            trigger: '.navbar',
            start: 'top -100',
            toggleActions: 'play none none reverse'
        },
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                duration: 1,
                ease: 'power3.out'
            });
        }
    });
});
