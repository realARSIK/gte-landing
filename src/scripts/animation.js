import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

document.addEventListener("DOMContentLoaded", () => {  
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

  // Scroll 

  ScrollSmoother.create({
    content: '.wrapper',
    smooth: 1,
    smoothTouch: 0.1,
    effects: true,
  });

  const smoother = ScrollSmoother.get();

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement || !smoother) return;

      const offset = smoother.offset(targetElement, 'top top');


      gsap.to(smoother, {
        duration: 1.2,
        smooth: 2,
        scrollTop: offset,
        ease: 'power3.inOut'
      });
    });
  });


  const tl = gsap.timeline()
  
  // Header
  const splittedHeaderLogo = SplitText.create('.header__logo', { type: 'chars, words' })
  
  tl.fromTo(splittedHeaderLogo.chars, { 
    y: '-100',
    opacity: 0,
    clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)"
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
    ease: 'power4.out',
  }, 'start');
  
  tl.from('.nav__item', {
    y: '-50',
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power4.out',
  }, 'start')
  
  // Hero
  const splittedTitle = SplitText.create('.intro__title', { type: 'chars, words' })
  
  gsap.fromTo(splittedTitle.chars, { 
      y: 100,
      clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)"
    },
    {
      y: 0,
      stagger: 0.05,
      duration: 1,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      ease: 'power4.out',
    }
  )
  
  
  // Section
  
  // SectionTitle
  document.querySelectorAll(".section__title").forEach(sectionTitle => {
    const split = SplitText.create(sectionTitle, { type: "lines" });
  
    gsap.fromTo(split.lines, {
      y: 50,
    },
    {
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionTitle,
        start: "top 90%",
        toggleActions: 'play none none none',
      }
    });
  });
  
  // SectionSubtitle
  document.querySelectorAll(".section__suptitle").forEach(sectionSuptitle => {
    const split = SplitText.create(sectionSuptitle, { type: "lines" });
  
    gsap.fromTo(split.lines, {
      y: 60,
    },
    {
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionSuptitle,
        start: "top 90%",
        toggleActions: "play none none none",
      }
    });
  });
  
  // SectionText
  document.querySelectorAll(".section__text").forEach(sectionText => {
    const p = sectionText.querySelector("p");
  
    const split = new SplitText(p, { type: "words" });
  
    gsap.set(split.words, {
      y: 40,
      opacity: 0,
      clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)"
    });
  
    gsap.to(split.words, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.01,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionText,
        start: "top 100%",
        toggleActions: "play none none none",
      }
    });
  });
  
  // Card
  document.querySelectorAll('.card').forEach(card => {
  
    const itemsCard = card.querySelectorAll('.card__item')
  
    gsap.fromTo(itemsCard, {
      y: 200,
    },
    {
      y: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 100%',
        end: 'bottom 90%',
        scrub: true,
      }
    })
  })
  
  // Services
  const services = document.querySelector('.services')
  gsap.set('.services__item', {
    x: 100,
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
  })
  
  gsap.to('.services__item', {
    x: '0',
    duration: 1,
    stagger: 0.1,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    ease: "power4.out",
    scrollTrigger: {
      trigger: services,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  })

  // accordion__item animation
});