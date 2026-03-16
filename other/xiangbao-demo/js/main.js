/**
 * 诚作基五金 Nice hardware - GSAP 动画脚本
 */

document.addEventListener('DOMContentLoaded', function() {
    // 注册 ScrollTrigger 插件
    gsap.registerPlugin(ScrollTrigger);
    
    // 初始化所有动画
    initHeroAnimations();
    initStatsAnimation();
    initScrollAnimations();
    initBackToTop();
    initNavbarScroll();
    initContactForm();
});

/**
 * 首页横幅动画
 */
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    
    const heroTitle = heroContent.querySelector('.hero-title');
    const heroSubtitle = heroContent.querySelector('.hero-subtitle');
    const heroDesc = heroContent.querySelector('.hero-desc');
    const heroBtn = heroContent.querySelector('.btn');
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from(heroTitle, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3
    })
    .from(heroSubtitle, {
        y: 50,
        opacity: 0,
        duration: 0.8
    }, '-=0.5')
    .from(heroDesc, {
        y: 30,
        opacity: 0,
        duration: 0.6
    }, '-=0.4')
    .from(heroBtn, {
        y: 20,
        opacity: 0,
        duration: 0.5
    }, '-=0.3');
}

/**
 * 数字统计动画
 */
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    if (statNumbers.length === 0) return;
    
    statNumbers.forEach(stat => {
        const targetCount = parseInt(stat.getAttribute('data-count'));
        
        gsap.to(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
                const current = Math.round(this.targets()[0].textContent);
                if (current < targetCount) {
                    stat.textContent = current;
                } else {
                    // 添加 + 号表示超过
                    if (targetCount >= 1000) {
                        stat.textContent = targetCount.toLocaleString() + '+';
                    } else if (targetCount > 20) {
                        stat.textContent = targetCount + '+';
                    } else {
                        stat.textContent = targetCount;
                    }
                }
            }
        });
    });
    
    // 数字计数动画的替代方案 - 使用 fromTo
    statNumbers.forEach(stat => {
        const targetCount = parseInt(stat.getAttribute('data-count'));
        
        gsap.fromTo(stat, 
            { textContent: 0 },
            {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                textContent: targetCount,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate: function() {
                    const value = Math.round(this.targets()[0].textContent);
                    if (targetCount >= 1000) {
                        stat.textContent = value.toLocaleString();
                    } else {
                        stat.textContent = value;
                    }
                },
                onComplete: function() {
                    if (targetCount >= 1000) {
                        stat.textContent = targetCount.toLocaleString() + '+';
                    } else if (targetCount > 20) {
                        stat.textContent = targetCount + '+';
                    }
                }
            }
        );
    });
}

/**
 * 滚动动画
 */
function initScrollAnimations() {
    // 关于部分动画
    const aboutContent = document.querySelector('.about-content');
    const aboutImages = document.querySelector('.about-images');
    
    if (aboutContent) {
        gsap.from(aboutContent, {
            scrollTrigger: {
                trigger: aboutContent,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            x: -50,
            opacity: 0,
            duration: 1
        });
    }
    
    if (aboutImages) {
        gsap.from(aboutImages, {
            scrollTrigger: {
                trigger: aboutImages,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            x: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3
        });
    }
    
    // 产品卡片动画
    const productCards = document.querySelectorAll('.product-card');
    if (productCards.length > 0) {
        gsap.from(productCards, {
            scrollTrigger: {
                trigger: '.products-preview',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
    }
    
    // 展示区域动画
    const showcaseItems = document.querySelectorAll('.showcase-item');
    if (showcaseItems.length > 0) {
        gsap.from(showcaseItems, {
            scrollTrigger: {
                trigger: '.showcase',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15
        });
    }
    
    // 关于页面 - 工厂车间动画
    const factoryItems = document.querySelectorAll('.factory-item');
    if (factoryItems.length > 0) {
        gsap.from(factoryItems, {
            scrollTrigger: {
                trigger: '.factory-grid',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
    }
    
    // 关于页面 - 产品展厅动画
    const exhibitionItems = document.querySelectorAll('.exhibition-item');
    if (exhibitionItems.length > 0) {
        gsap.from(exhibitionItems, {
            scrollTrigger: {
                trigger: '.exhibition-grid',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
    }
    
    // 关于页面 - FAQ动画
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        gsap.from(faqItems, {
            scrollTrigger: {
                trigger: '.faq-grid',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15
        });
    }
    
    // 产品中心 - 产品项动画
    const productItems = document.querySelectorAll('.product-item');
    if (productItems.length > 0) {
        gsap.from(productItems, {
            scrollTrigger: {
                trigger: '.products-list',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1
        });
    }
    
    // 联系页面 - 联系项动画
    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems.length > 0) {
        gsap.from(contactItems, {
            scrollTrigger: {
                trigger: '.contact-items',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            x: -40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15
        });
    }
    
    // 联系页面 - 服务项动画
    const serviceItems = document.querySelectorAll('.service-item');
    if (serviceItems.length > 0) {
        gsap.from(serviceItems, {
            scrollTrigger: {
                trigger: '.service-grid',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15
        });
    }
    
    // 章节标题动画
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8
        });
    });
    
    // CTA区域动画
    const ctaContent = document.querySelector('.cta-content');
    if (ctaContent) {
        gsap.from(ctaContent, {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.8
        });
    }
}

/**
 * 返回顶部按钮
 */
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;
    
    // 监听滚动
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // 点击返回顶部
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
            scrollTo: { y: 0, autoKill: false },
            duration: 1,
            ease: 'power2.inOut'
        });
    });
}

/**
 * 导航栏滚动效果
 */
function initNavbarScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * 联系表单处理
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // 显示成功消息（模拟）
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = '提交中...';
        btn.disabled = true;
        
        // 模拟提交
        setTimeout(() => {
            btn.textContent = '提交成功！';
            btn.style.backgroundColor = '#28a745';
            
            // 重置表单
            form.reset();
            
            // 3秒后恢复按钮
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}

/**
 * 平滑滚动到锚点
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            gsap.to(window, {
                scrollTo: { y: target, offsetY: 100 },
                duration: 0.8,
                ease: 'power2.inOut'
            });
        }
    });
});

/**
 * 产品分类点击效果
 */
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有active
        categoryCards.forEach(c => c.classList.remove('active'));
        // 添加active
        this.classList.add('active');
        
        // 获取目标元素
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            gsap.to(window, {
                scrollTo: { y: target, offsetY: 100 },
                duration: 0.8,
                ease: 'power2.inOut'
            });
        }
    });
});

/**
 * 页面加载完成后的入场动画
 */
window.addEventListener('load', function() {
    // 为 body 添加 loaded 类
    document.body.classList.add('loaded');
    
    // 淡入效果
    gsap.from('body', {
        opacity: 0,
        duration: 0.5
    });
});
