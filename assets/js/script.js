'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/**
 * I18N: Simple language toggle (EN/TR)
 */
(function initI18n() {
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.background': 'Background',
      'nav.contact': 'Contact',
      'nav.openCv': 'Open CV',
      'hero.title': "I'm a Lawyer Specializing in New Media and Intellectual Property Law.",
      'hero.subtitle': "Hello! I'm Pelinsu Kaya, a legal professional with expertise in contract law, intellectual property, and new media law. I offer comprehensive legal consulting, contract drafting, and advocacy services with a focus on the entertainment and media industry.",
      'hero.seeWorks': 'See My Works',
      'hero.contactMe': 'Contact Me',
      'about.title': 'What I Do?',
      'about.text': 'As a lawyer at Hypers New Medya, I specialize in drafting complex contracts, providing intellectual property consultancy, and managing litigation processes. With experience in both Turkish and English legal documentation, I offer comprehensive legal solutions for the entertainment and media industry.',
      'skills.newMediaLaw': 'New Media Law',
      'skills.legalEnglish': 'Legal English',
      'skills.contractLaw': 'Contract Law',
      'skills.intellectualProperty': 'Intellectual Property',
      'about.contractLaw': 'Contract Law',
      'about.contractLawText': 'Drafting and reviewing complex contracts including work contracts, service contracts, and intellectual property agreements in both Turkish and English.',
      'about.ip': 'Intellectual Property',
      'about.ipText': 'Providing consultancy in trademark law, assisting with applications and objections, and drafting intellectual property consent forms.',
      'about.legalTranslation': 'Legal Translation',
      'about.legalTranslationText': 'Professional translation services between English and Turkish, including legal documents, contracts, and court proceedings.',
      'about.litigation': 'Litigation',
      'about.litigationText': 'Managing litigation processes, drafting petitions and defenses, and representing clients in court proceedings and mediation meetings.',
      'background.title': 'Professional Experience',
      'background.text': 'My professional journey and key achievements in the legal field.',
      'background.currentPosition': 'Current Position',
      'background.currentText': 'Lawyer specializing in contract drafting, intellectual property, and litigation management. Providing comprehensive legal solutions for the entertainment and media industry.',
      'background.education': 'Education',
      'background.educationText': 'Faculty of Law graduate with %25 Merit Scholarship. CGPA: 2.88. International Baccalaureate (IB) Diploma Programme graduate with a score of 35/42.',
      'background.professorsText': 'Taken courses from distinguished professors such as Prof. Dr. Abdülkadir Arpacı, Prof. Dr. Ümit Kocasakal, Prof. Dr. Hatice Kocasakal, Prof. Dr. Mehmet Bahtiyar, Prof. Dr. Mesut Hakkı Caşın, Prof. Dr. Sultan Üzeltür, and Dr. Mehmet F. Şua.',
      'background.professionalDevelopment': 'Professional Development',
      'background.speaking': 'Speaking Engagements',
      'background.speakingText': 'Speaker at Marmara University\'s "New Media Law" seminar and Kadir Has University\'s "Rules of the Online World: Social Media Law" seminar.',
      'background.skillsLanguages': 'Skills & Languages',
      'background.competencies': 'Professional Competencies',
      'background.competenciesText': 'Fluent in English and Turkish, basic Spanish and Turkish Sign Language. Expert in contract law, legal writing, and new media law.',
      'background.visitHypers': 'Visit Website',
      'contact.title': "If you like what you see, let's work together.",
      'contact.text': 'I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and I will get back to you shortly.',
      'contact.sendMessage': 'Send message'
    },
    tr: {
      'nav.home': 'Ana Sayfa',
      'nav.about': 'Hakkımda',
      'nav.background': 'Deneyimlerim',
      'nav.contact': 'İletişim',
      'nav.openCv': 'CV\'yi Aç',
      'hero.title': 'Yeni Medya ve Fikri Mülkiyet Hukuku alanında uzmanlaşan bir avukatım',
      'hero.subtitle': 'Merhaba! Ben Pelinsu Kaya. Sözleşmeler hukuku, fikri mülkiyet ve yeni medya hukuku alanlarında uzmanlaşan bir hukukçuyum. Eğlence ve medya sektörüne odaklı olarak hukuki danışmanlık, sözleşme hazırlama ve vekillik hizmetleri sunuyorum.',
      'hero.seeWorks': 'Çalışmalarıma Göz At',
      'hero.contactMe': 'Benimle İletişime Geç',
      'about.title': 'Ne Yapıyorum?',
      'about.text': 'Hypers New Medya\'da avukat olarak karma sözleşmelerin hazırlanması, fikri mülkiyet danışmanlığı ve dava süreçlerinin yönetimi konularında uzmanlaşmaktayım. Türkçe ve İngilizce hukuki dokümantasyon tecrübesi ile eğlence ve medya sektörüne kapsamlı hukuki çözümler sunuyorum.',
      'skills.newMediaLaw': 'Yeni Medya Hukuku',
      'skills.legalEnglish': 'Hukuki İngilizce',
      'skills.contractLaw': 'Sözleşmeler Hukuku',
      'skills.intellectualProperty': 'Fikri Mülkiyet',
      'about.contractLaw': 'Sözleşmeler Hukuku',
      'about.contractLawText': 'İş sözleşmeleri, hizmet sözleşmeleri ve fikri mülkiyet anlaşmaları dahil karmaşık sözleşmelerin hazırlanması ve incelenmesi',
      'about.ip': 'Fikri Mülkiyet',
      'about.ipText': 'Marka hukuku alanında danışmanlık, marka itiraz süreçlerinde hukuki destek ve fikri mülkiyet hak devir belgelerinin/muvafakatnamelerinin hazırlanması',
      'about.legalTranslation': 'Hukuki Çeviri',
      'about.legalTranslationText': 'İstanbul 11. Noterliğine bağlı olarak, İngilizce-Türkçe / Türkçe-İngilizce dilleri arasında anlaşmalı boşanma protokolü, genel kurul kararları, ikale sözleşmeleri başta olmak üzere ancak bunlarla sınırlı olmayarak çeviriler yapmak, İngilizce dilinde yurt dışındaki müvekkillere dava dilekçeleri çevirileri ve özetleri hazırlanması, İngilizce sözleşme metinleri hazırlanması.',
      'about.litigation': 'Dava Takibi',
      'about.litigationText': 'Dava süreçlerinin yönetimi, dilekçe ve savunmaların hazırlanması, duruşmalarda ve arabuluculuk görüşmelerinde temsil',
      'background.title': 'Profesyonel Deneyim',
      'background.text': 'Hukuk alanındaki mesleki yolculuğum ve öne çıkan başarılarım',
      'background.currentPosition': 'Güncel Pozisyon',
      'background.currentText': 'Türkçe ve İngilizce dillerinde eser sözleşmesi ve hizmet sözleşmesi başta olmak üzere, karma sözleşmeler hazırlanması (albüm, menajerlik, marka sponsorluğu, marka işbirliği, konser sözleşmeleri vb.) ikale sözleşmeleri, iş sözleşmeleri, gizlilik sözleşmeleri, satış sözleşmeleri hazırlanması, sözleşme takibi, risk analizi yapılması, güncel Resmi Gazete Kararları ve Yargıtay kararları ile ilgili olarak yönetime düzenli raporlamada bulunulması, Fikri Haklar devir muvafakatnamelerinin hazırlanması, marka hukuku alanında danışmanlık ve marka vekilleri ile birlikte başvuru ve itiraz dilekçelerinin hazırlanması, dava süreçlerinin takibi, gerekli dilekçelerin ve savunmaların hazırlanması, arabuluculuk görüşmelerine katılınması, legal dokümanların organize edilmesi.',
      'background.education': 'Eğitim',
      'background.educationText': 'Hukuk Fakültesi mezunu, %25 Başarı Bursu. CGPA: 2.88. İngilizce dilinde Economics High Level, English B: High Level, Theory of Knowledge (Bilgi Kuramı): High Level gibi dersler alarak, 35/42 başarı notuyla uluslararası geçerliliği olan lise diplomasına hak kazandım.',
      'background.professorsText': 'Prof. Dr. Abdülkadir Arpacı, Prof. Dr. Ümit Kocasakal, Prof. Dr. Hatice Kocasakal, Prof. Dr. Mehmet Bahtiyar, Prof. Dr. Mesut Hakkı Caşın, Prof. Dr. Sultan Üzeltür ve Dr. Mehmet F. Şua gibi hocalardan ders aldım.',
      'background.professionalDevelopment': 'Mesleki Gelişim',
      'background.speaking': 'Konuşmacı Deneyimleri',
      'background.speakingText': '02.05.2025 tarihli Marmara Üniversitesi Hukuk ve Ekonomi Kulübü tarafından gerçekleştirilen Yeni Medya Hukuku seminerinde ve 19.12.2025 tarihli Kadir Has Üniversitesi Yeni Medya Kulübü tarafından gerçekleştirilen Çevrimiçi Dünyanın Kuralları: Sosyal Medya Hukuku söyleşisinde konuşmacı olarak yer aldım.',
      'background.skillsLanguages': 'Yetenekler ve Diller',
      'background.competencies': 'Profesyonel Yeterlilikler',
      'background.competenciesText': 'İngilizce ve Türkçe akıcı, temel seviyede İspanyolca',
      'background.visitHypers': 'Web Sitesini Ziyaret Et',
      'contact.title': 'Gördüklerinizi beğendiyseniz birlikte çalışalım.',
      'contact.text': 'Sorularınız mı var? Bu iletişim üzerinden bana ulaşın, en kısa sürede dönüş yapayım.',
      'contact.sendMessage': 'Mesaj gönder'
    }
  };

  const LANG_KEY = 'site_lang';
  const DEFAULT_LANG = 'en';
  const langToggleBtn = document.getElementById('lang-toggle');
  const cvLink = document.getElementById('cv-link');
  const htmlEl = document.documentElement;

  function setCvHref(lang) {
    if (!cvLink) return;
    const base = 'assets/Pelinsu-Kaya-RESUME.pdf';
    const trPath = 'assets/Pelinsu-Kaya-RESUME-TR.pdf';
    cvLink.setAttribute('href', lang === 'tr' ? trPath : base);
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      const key = node.getAttribute('data-i18n');
      const value = dict[key];
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });
    setCvHref(lang);
    htmlEl.setAttribute('lang', lang);
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'tr' ? 'EN' : 'TR';
      langToggleBtn.setAttribute('aria-label', lang === 'tr' ? 'Switch language to English' : 'Dili Türkçe yap');
    }
  }

  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
  }

  // Initialize
  const saved = localStorage.getItem(LANG_KEY);
  const initial = saved === 'tr' || saved === 'en' ? saved : DEFAULT_LANG;
  applyTranslations(initial);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
      const current = localStorage.getItem(LANG_KEY) || initial;
      const next = current === 'tr' ? 'en' : 'tr';
      setLanguage(next);
    });
  }
})();

/**
 * Lightbox for speaking images
 */
(function initLightbox() {
  const galleryImages = document.querySelectorAll('.speaking-gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-image') : null;
  const closers = document.querySelectorAll('[data-lightbox-close]');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    if (lightboxImg) lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  // Do not make images clickable on mobile (small screens or touch devices)
  const isMobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window && navigator.maxTouchPoints > 0);

  if (!isMobile) {
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].addEventListener('click', function () {
        const src = this.getAttribute('src') || '';
        const alt = this.getAttribute('alt') || '';
        if (src.toLowerCase().endsWith('.pdf')) {
          window.open(src, '_blank', 'noopener');
          return;
        }
        openLightbox(src, alt);
      });
    }
  }

  addEventOnElements(closers, 'click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();