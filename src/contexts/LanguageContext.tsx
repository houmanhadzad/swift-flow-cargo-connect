
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "fa" | "ru" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.globalCoverage": "Global Coverage",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a Quote",
    
    // Contact Form
    "contact.title": "Contact Us",
    "contact.subtitle": "Our team is available 24/7 to assist you with your shipping needs",
    "contact.getInTouch": "Get in Touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    
    // Contact Information
    "contactInfo.title": "Contact Information",
    "contactInfo.address": "Address",
    "contactInfo.addressValue": "UsKara Logistics Iranian Shipping and Air Cargo Services, unit 9, 5th, No.13, Floor, Noor Alley. Nelson Mandela BLVD Tehran, Iran",
    "contactInfo.phone": "Phone",
    "contactInfo.phoneValue": "+98 2191011477",
    "contactInfo.email": "Email",
    "contactInfo.emailValue": "info@karalogistics.com",
    "contactInfo.about": "About Us",
    "contactInfo.aboutValue": "Kara Logistics began its operations in early 2024 with a clear vision and a strong passion for the logistics, shipping, and air cargo industry. The company was formed as a collective effort by industry leaders who bring over three decades of experience in global trade, freight forwarding, and supply chain management.",
    "contactInfo.follow": "Follow Us",
    
    // Global Coverage
    "coverage.title": "Global Coverage",
    "coverage.subtitle": "Our extensive shipping network spans across Sub Continental Asia and Europe, providing seamless logistics solutions for businesses of all sizes.",
    "coverage.asia": "Asia Coverage",
    "coverage.europe": "Europe Coverage",
    
    // Language Names (for the selector)
    "language.en": "English",
    "language.fa": "فارسی",
    "language.ru": "Русский",
    "language.hi": "हिंदी"
  },
  fa: {
    // Navigation
    "nav.services": "خدمات",
    "nav.testimonials": "نظرات مشتریان",
    "nav.globalCoverage": "پوشش جهانی",
    "nav.contact": "تماس با ما",
    "nav.getQuote": "دریافت قیمت",
    
    // Contact Form
    "contact.title": "تماس با ما",
    "contact.subtitle": "تیم ما ۲۴/۷ برای کمک به نیازهای حمل و نقل شما در دسترس است",
    "contact.getInTouch": "در تماس باشید",
    "contact.name": "نام",
    "contact.email": "ایمیل",
    "contact.subject": "موضوع",
    "contact.message": "پیام",
    "contact.send": "ارسال پیام",
    
    // Contact Information
    "contactInfo.title": "اطلاعات تماس",
    "contactInfo.address": "آدرس",
    "contactInfo.addressValue": "خدمات حمل و نقل دریایی و هوایی کارا لجستیک ایران، واحد ۹، طبقه ۵، پلاک ۱۳، کوچه نور، بلوار نلسون ماندلا، تهران، ایران",
    "contactInfo.phone": "تلفن",
    "contactInfo.phoneValue": "+98 2191011477",
    "contactInfo.email": "ایمیل",
    "contactInfo.emailValue": "info@karalogistics.com",
    "contactInfo.about": "درباره ما",
    "contactInfo.aboutValue": "کارا لجستیک فعالیت خود را در اوایل سال ۲۰۲۴ با چشم‌اندازی روشن و اشتیاق قوی به صنعت لجستیک، کشتیرانی و حمل و نقل هوایی آغاز کرد. این شرکت به عنوان تلاشی جمعی توسط رهبران صنعت تشکیل شد که بیش از سه دهه تجربه در تجارت جهانی، حمل و نقل بین‌المللی و مدیریت زنجیره تأمین دارند.",
    "contactInfo.follow": "ما را دنبال کنید",
    
    // Global Coverage
    "coverage.title": "پوشش جهانی",
    "coverage.subtitle": "شبکه گسترده حمل و نقل ما در سراسر آسیای زیرقاره‌ای و اروپا گسترده است و راه‌حل‌های لجستیکی بی‌نقص را برای کسب و کارهای همه اندازه‌ها فراهم می‌کند.",
    "coverage.asia": "پوشش آسیا",
    "coverage.europe": "پوشش اروپا",
    
    // Language Names (for the selector)
    "language.en": "English",
    "language.fa": "فارسی",
    "language.ru": "Русский",
    "language.hi": "हिंदी"
  },
  ru: {
    // Navigation
    "nav.services": "Услуги",
    "nav.testimonials": "Отзывы",
    "nav.globalCoverage": "Глобальное покрытие",
    "nav.contact": "Контакты",
    "nav.getQuote": "Получить расценки",
    
    // Contact Form
    "contact.title": "Связаться с нами",
    "contact.subtitle": "Наша команда доступна 24/7, чтобы помочь вам с вашими потребностями в доставке",
    "contact.getInTouch": "Связаться",
    "contact.name": "Имя",
    "contact.email": "Эл. почта",
    "contact.subject": "Тема",
    "contact.message": "Сообщение",
    "contact.send": "Отправить сообщение",
    
    // Contact Information
    "contactInfo.title": "Контактная информация",
    "contactInfo.address": "Адрес",
    "contactInfo.addressValue": "UsKara Logistics Иранские услуги морских и авиаперевозок, блок 9, 5-й этаж, No.13, Noor Alley. Бульвар Нельсона Манделы, Тегеран, Иран",
    "contactInfo.phone": "Телефон",
    "contactInfo.phoneValue": "+98 2191011477",
    "contactInfo.email": "Эл. почта",
    "contactInfo.emailValue": "info@karalogistics.com",
    "contactInfo.about": "О нас",
    "contactInfo.aboutValue": "Компания Kara Logistics начала свою деятельность в начале 2024 года с четким видением и сильной страстью к индустрии логистики, морских и авиаперевозок. Компания была сформирована как коллективные усилия лидеров отрасли, которые обладают более чем тридцатилетним опытом в области международной торговли, экспедирования грузов и управления цепочками поставок.",
    "contactInfo.follow": "Подписывайтесь на нас",
    
    // Global Coverage
    "coverage.title": "Глобальное покрытие",
    "coverage.subtitle": "Наша обширная сеть доставки охватывает Субконтинентальную Азию и Европу, обеспечивая безупречные логистические решения для бизнеса любого размера.",
    "coverage.asia": "Покрытие Азии",
    "coverage.europe": "Покрытие Европы",
    
    // Language Names (for the selector)
    "language.en": "English",
    "language.fa": "فارسی",
    "language.ru": "Русский",
    "language.hi": "हिंदी"
  },
  hi: {
    // Navigation
    "nav.services": "सेवाएं",
    "nav.testimonials": "प्रशंसापत्र",
    "nav.globalCoverage": "वैश्विक कवरेज",
    "nav.contact": "संपर्क करें",
    "nav.getQuote": "कोटेशन प्राप्त करें",
    
    // Contact Form
    "contact.title": "हमसे संपर्क करें",
    "contact.subtitle": "हमारी टीम आपकी शिपिंग आवश्यकताओं में सहायता के लिए 24/7 उपलब्ध है",
    "contact.getInTouch": "संपर्क में रहें",
    "contact.name": "नाम",
    "contact.email": "ईमेल",
    "contact.subject": "विषय",
    "contact.message": "संदेश",
    "contact.send": "संदेश भेजें",
    
    // Contact Information
    "contactInfo.title": "संपर्क जानकारी",
    "contactInfo.address": "पता",
    "contactInfo.addressValue": "UsKara Logistics ईरानी शिपिंग और एयर कार्गो सेवाएं, यूनिट 9, 5वीं, नंबर 13, तल, नूर गली, नेल्सन मंडेला बीएलवीडी तेहरान, ईरान",
    "contactInfo.phone": "फोन",
    "contactInfo.phoneValue": "+98 2191011477",
    "contactInfo.email": "ईमेल",
    "contactInfo.emailValue": "info@karalogistics.com",
    "contactInfo.about": "हमारे बारे में",
    "contactInfo.aboutValue": "कारा लॉजिस्टिक्स ने 2024 की शुरुआत में लॉजिस्टिक्स, शिपिंग और एयर कार्गो उद्योग के लिए एक स्पष्ट दृष्टिकोण और मजबूत जुनून के साथ अपना परिचालन शुरू किया। कंपनी वैश्विक व्यापार, माल ढुलाई अग्रेषण और आपूर्ति श्रृंखला प्रबंधन में तीन दशकों से अधिक के अनुभव वाले उद्योग के नेताओं के सामूहिक प्रयास के रूप में बनी थी।",
    "contactInfo.follow": "हमें फॉलो करें",
    
    // Global Coverage
    "coverage.title": "वैश्विक कवरेज",
    "coverage.subtitle": "हमारा व्यापक शिपिंग नेटवर्क उपमहाद्वीपीय एशिया और यूरोप में फैला हुआ है, जो सभी आकारों के व्यवसायों के लिए निर्बाध लॉजिस्टिक समाधान प्रदान करता है।",
    "coverage.asia": "एशिया कवरेज",
    "coverage.europe": "यूरोप कवरेज",
    
    // Language Names (for the selector)
    "language.en": "English",
    "language.fa": "فارسی",
    "language.ru": "Русский",
    "language.hi": "हिंदी"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
