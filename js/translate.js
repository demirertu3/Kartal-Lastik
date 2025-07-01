// Dil çevirilerini saklayacak obje
const translations = {
    tr: {
        // Genel Metinler (Tüm Sayfalarda Ortak Olabilir)
        "home": "Anasayfa",
        "about": "Hakkımızda",
        "service": "Hizmetler",
        "booking": "Randevu",
        "pages": "Sayfalar",
        "testimonial": "Referanslar",
        "comingSoon": "Çok Yakında",
        "error404": "404 Hata",
        "contact": "İletişim",
        "ourTeam": "Ekibimiz",
        "readMore": "Daha Fazla",
        "bookAppointment": "Randevu Al",
        "contactUs": "Bize Ulaşın",
        "contactAddress": "Adres",
        "contactPhone": "Telefon",
        "contactEmail": "E-posta Adresi",
        "contactFormName": "Adınız",
        "contactFormEmail": "E-posta Adresiniz",
        "contactFormSubject": "Konu",
        "contactFormMessage": "Mesajınız",
        "sendMessage": "Mesaj Gönder",
        "openHours": "Açılış Saatleri",
        "monFri": "Pzt - Cuma",
        "sat": "Cmt",
        "sun": "Pazar",
        "quickLinks": "Hızlı Bağlantılar",
        "ourServices": "Hizmetlerimiz",
        "contactInfo": "İletişim Bilgileri",
        "newsletter": "Bülten",
        "footerCopyright": "Tüm Hakları Saklıdır.",
        "footerDesignedBy": "Tasarlayan",
        "footerDistributedBy": "Dağıtan",
        "welcomeToKartalTire": "Kartal Lastik'e Hoş Geldiniz",
        "heroSubtitle": "// Araç Servisi //",
        "experience": "Tecrübe",
        "rightPlaceForYourCar": "Aracınız İçin En Doğru Adres",
        "professionalTeamTitle": "Profesyonel ve Uzman Kadro",
        "professionalTeamDesc": "Aracınıza deneyimli ustalarımız titizlikle müdahale eder.",
        "qualityServiceCenterTitle": "Kaliteli Servis Merkezi",
        "qualityServiceCenterDesc": "Bakım ve onarım hizmetlerimizi yüksek kalite standartlarında sunarız.",
        "awardWinningEmployeesTitle": "Ödüllü Çalışanlar",
        "awardWinningEmployeesDesc": "Başarılı ve ödüllü ekibimizle hizmetinizdeyiz.",
        "yearsOfExperienceFact": "Yıllık Deneyim",
        "expertTechniciansFact": "Uzman Teknisyen",
        "satisfiedClientsFact": "Memnun Müşteri",
        "completedProjectsFact": "Tamamlanan Proje",
        "discoverOurServices": "HİZMETLERİMİZİ KEŞFEDİN",
        "service1Title": "** Yıllık Araç Arıza Tespiti Deneyimi",
        "service1DescContent": "Aracınızın sorunlarını hızlı ve doğru bir şekilde belirlemek için ileri teknoloji cihazlar ve uzman kadromuzla hizmet sunuyoruz.",
        "service1Check1": "Detaylı Arıza Analizi",
        "service1Check2": "Uzman Teknik Ekip",
        "service1Check3": "Son Teknoloji Teşhis Cihazları",
        "service2Title": "** Yıllık Motor Bakım Deneyimi",
        "service2DescContent": "Motorunuzun ömrünü uzatmak ve en yüksek performansı sağlamak için kapsamlı bakım ve onarım hizmetleri sunuyoruz.",
        "service2Check1": "Kaliteli Motor Bakımı",
        "service2Check2": "Uzman Teknisyenler",
        "service2Check3": "Gelişmiş Ekipmanlar",
        "service3Title": "** Yıllık Lastik Değişimi Deneyimi",
        "service3DescContent": "Aracınızın güvenliği ve konforu için doğru lastik seçimi ve profesyonel montaj hizmeti sunuyoruz. Uzman ekibimiz, lastik değişim sürecini hızlı ve titizlikle gerçekleştirir.",
        "service3Check1": "Kaliteli Lastik Hizmeti",
        "service3Check2": "Deneyimli Çalışanlar",
        "service3Check3": "Modern Montaj Ekipmanları",
        "service4Title": "** Yıllık Yağ Değişimi Deneyimi",
        "service4DescContent": "Motorunuzun sağlıklı çalışması ve uzun ömürlü olması için düzenli yağ değişimi hizmeti sunuyoruz. Kaliteli yağlar ve uzman ekip ile aracınız emin ellerde.",
        "service4Check1": "Kaliteli Yağ Kullanımı",
        "service4Check2": "Uzman Personel",
        "service4Check3": "Hızlı ve Güvenilir Hizmet",
        "customerReviewsTitle": "// Müşteri Yorumları //",
        "whatOurClientsSay": "Müşterilerimiz Ne Diyor?",
        "testimonialClient1": "Ahmet Yılmaz",
        "testimonialProfession1": "Firma Sahibi",
        "testimonialText1": "Aracımın bakımını burada yaptırdım. Hizmet kalitesinden çok memnun kaldım. Tavsiye ederim.",
        "testimonialClient2": "Elif Kaya",
        "testimonialProfession2": "Mimar",
        "testimonialText2": "Çalışanlar çok ilgili ve profesyonel. Yağ değişimi işlemi çok kısa sürede tamamlandı.",
        "testimonialClient3": "Mehmet Demir",
        "testimonialProfession3": "Öğretmen",
        "testimonialText3": "Arıza tespiti ve tamir sürecinde her aşamada bilgilendirildim. Çok güvenilir bir servis.",
        "testimonialClient4": "Zeynep Çelik",
        "testimonialProfession4": "Avukat",
        "testimonialText4": "Lastik değişiminden sonra aracımın yol tutuşu çok daha iyi oldu. Hizmet kalitesinden memnunum.",
        "kartalLastikFooterTitle": "Kartal Lastik",
        "monSatHours": "Pazartesi - Cumartesi:",
        "workTime": "08.00 - 20.00",
        "cookies": "Çerezler",
        "help": "Yardım",
        "faqs": "SSS",


        // index.html Metinleri
        "heroTitle": "Profesyonel Araç Onarım Servis Merkezi",
        "heroDescription": "Kaliteli lastikler ve güvenilir hizmetlerle yolculuğunuza güç katın.",
        "aboutUsTitle": "Hakkımızda",
        "aboutUsText": "Aracınızın bakım ve onarımında yılların deneyimiyle güvenilir çözümler sunuyoruz. Profesyonel ekibimiz ve modern ekipmanlarımızla ihtiyaçlarınıza en iyi şekilde cevap veriyoruz.",
        "qualityServiceTitle": "Kaliteli Servis",
        "qualityServiceDesc": "Aracınız için yüksek kalite standartlarında bakım ve onarım hizmetleri sunuyoruz.",
        "expertTeamTitle": "Uzman Ekip",
        "expertTeamDesc": "Deneyimli teknisyenlerimiz aracınızın tüm ihtiyaçlarını profesyonelce karşılar.",
        "modernEquipmentTitle": "Modern Ekipmanlar",
        "modernEquipmentDesc": "Servisimizde en yeni teknoloji ekipmanlar kullanılarak hızlı ve güvenilir çözümler üretilir.",
        "servicesTitle": "Hizmetlerimiz",
        "service1": "Arıza Tespiti", // Navbar ve sekme butonu için
        "service2": "Motor Bakımı", // Navbar ve sekme butonu için
        "service3": "Lastik Değişimi", // Navbar ve sekme butonu için
        "service4": "Yağ Değişimi", // Navbar ve sekme butonu için

        // service.html Metinleri
        "servicePageHeader": "Yol Yardım", // Sayfa başlığı ve navbar linki
        "roadsideAssistanceHeader": "Yol Yardım Hizmetleri",
        "roadsideAssistanceSubtitle": "Acil durumlarınızda Kartal Lastik hep yanınızda!",
        "tireRepairTitle": "Lastik Tamiri",
        "tireRepairDesc": "Yolda lastiğiniz patladığında veya hasar gördüğünde hızlı ve etkili tamir hizmeti sunuyoruz.",
        "batteryBoostTitle": "Akü Takviyesi",
        "batteryBoostDesc": "Aracınızın aküsü bittiğinde, olay yerinde akü takviyesi hizmeti ile yola devam etmenizi sağlıyoruz.",
        "fuelDeliveryTitle": "Yakıt Takviyesi",
        "fuelDeliveryDesc": "Yakıtınız bittiğinde, en kısa sürede size yakıt temin ederek mağduriyetinizi gideriyoruz.",
        "lockoutServiceTitle": "Kapı Açma Hizmeti",
        "lockoutServiceDesc": "Anahtarınızı aracınızda unuttuğunuzda, aracınıza zarar vermeden kapı açma hizmeti sunuyoruz.",
        "towingServiceTitle": "Çekici Hizmeti",
        "towingServiceDesc": "Aracınız hareket edemeyecek durumdaysa, güvenli bir şekilde çekici hizmeti sağlıyoruz.",
        "emergencyRepairTitle": "Acil Tamir",
        "emergencyRepairDesc": "Küçük arızalar için olay yerinde hızlı ve geçici tamir hizmetleri sunuyoruz.",

        // contact.html Metinleri
        "contactPageHeader": "İLETİŞİM", // Sayfa başlığı ve navbar linki
        "contactFormTitle": "Bizimle İletişime Geçin",
        "contactFormDescription": "Sorularınız veya randevu talepleriniz için bize ulaşın."

    },
    en: {
        // General Texts (Can be common across all pages)
        "home": "Home",
        "about": "About Us",
        "service": "Services",
        "booking": "Appointment",
        "pages": "Pages",
        "testimonial": "Testimonial",
        "comingSoon": "Coming Soon",
        "error404": "404 Error",
        "contact": "Contact",
        "ourTeam": "Our Team",
        "readMore": "Read More",
        "bookAppointment": "Book Appointment",
        "contactUs": "Contact Us",
        "contactAddress": "Address",
        "contactPhone": "Phone",
        "contactEmail": "Email Address",
        "contactFormName": "Your Name",
        "contactFormEmail": "Your Email",
        "contactFormSubject": "Subject",
        "contactFormMessage": "Your Message",
        "sendMessage": "Send Message",
        "openHours": "Opening Hours",
        "monFri": "Mon - Fri",
        "sat": "Sat",
        "sun": "Sun",
        "quickLinks": "Quick Links",
        "ourServices": "Our Services",
        "contactInfo": "Contact Info",
        "newsletter": "Newsletter",
        "footerCopyright": "All Rights Reserved.",
        "footerDesignedBy": "Designed By",
        "footerDistributedBy": "Distributed By",
        "welcomeToKartalTire": "Welcome to Kartal Tire",
        "heroSubtitle": "// Car Servicing //",
        "experience": "Experience",
        "rightPlaceForYourCar": "The Right Place For Your Car",
        "professionalTeamTitle": "Professional & Expert Staff",
        "professionalTeamDesc": "Our experienced masters meticulously intervene in your vehicle.",
        "qualityServiceCenterTitle": "Quality Service Center",
        "qualityServiceCenterDesc": "We offer our maintenance and repair services with high quality standards.",
        "awardWinningEmployeesTitle": "Award Winning Employees",
        "awardWinningEmployeesDesc": "We are at your service with our successful and award-winning team.",
        "yearsOfExperienceFact": "Years Of Experience",
        "expertTechniciansFact": "Expert Technicians",
        "satisfiedClientsFact": "Satisfied Clients",
        "completedProjectsFact": "Completed Projects",
        "discoverOurServices": "DISCOVER OUR SERVICES",
        "service1Title": "** Years Of Car Diagnosis Experience",
        "service1DescContent": "We offer services with advanced technology devices and our expert staff to quickly and accurately identify your vehicle's problems.",
        "service1Check1": "Detailed Fault Analysis",
        "service1Check2": "Expert Technical Team",
        "service1Check3": "Latest Technology Diagnostic Devices",
        "service2Title": "** Years Of Engine Maintenance Experience",
        "service2DescContent": "We offer comprehensive maintenance and repair services to extend your engine's life and ensure maximum performance.",
        "service2Check1": "Quality Engine Maintenance",
        "service2Check2": "Expert Technicians",
        "service2Check3": "Advanced Equipment",
        "service3Title": "** Years Of Tire Change Experience",
        "service3DescContent": "We offer correct tire selection and professional installation service for your vehicle's safety and comfort. Our expert team carries out the tire change process quickly and meticulously.",
        "service3Check1": "Quality Tire Service",
        "service3Check2": "Experienced Employees",
        "service3Check3": "Modern Installation Equipment",
        "service4Title": "** Years Of Oil Change Experience",
        "service4DescContent": "We offer regular oil change service for your engine's healthy operation and long life. Your vehicle is in safe hands with quality oils and an expert team.",
        "service4Check1": "Quality Oil Usage",
        "service4Check2": "Expert Staff",
        "service4Check3": "Fast and Reliable Service",
        "customerReviewsTitle": "// Customer Reviews //",
        "whatOurClientsSay": "What Our Clients Say?",
        "testimonialClient1": "Ahmet Yilmaz",
        "testimonialProfession1": "Company Owner",
        "testimonialText1": "I had my car serviced here. I was very satisfied with the quality of service. I recommend it.",
        "testimonialClient2": "Elif Kaya",
        "testimonialProfession2": "Architect",
        "testimonialText2": "The staff are very helpful and professional. The oil change was completed in a very short time.",
        "testimonialClient3": "Mehmet Demir",
        "testimonialProfession3": "Teacher",
        "testimonialText3": "I was informed at every stage of the fault diagnosis and repair process. A very reliable service.",
        "testimonialClient4": "Zeynep Çelik",
        "testimonialProfession4": "Lawyer",
        "testimonialText4": "After the tire change, my car's road holding improved significantly. I am satisfied with the service quality.",
        "kartalLastikFooterTitle": "Kartal Tire",
        "monSatHours": "Monday - Saturday:",
        "workTime": "08.00 - 20.00",
        "cookies": "Cookies",
        "help": "Help",
        "faqs": "FAQs",

        // index.html Texts
        "heroTitle": "Professional Car Repair Service Center",
        "heroDescription": "Empower your journey with quality tires and reliable services.",
        "aboutUsTitle": "About Us",
        "aboutUsText": "With years of experience in vehicle maintenance and repair, we offer reliable solutions. Our professional team and modern equipment effectively meet your needs.",
        "qualityServiceTitle": "Quality Service",
        "qualityServiceDesc": "We provide car maintenance and repair services with high quality standards.",
        "expertTeamTitle": "Expert Team",
        "expertTeamDesc": "Our experienced technicians professionally meet all your vehicle's needs.",
        "modernEquipmentTitle": "Modern Equipment",
        "modernEquipmentDesc": "Our service uses the latest technology equipment to produce fast and reliable solutions.",
        "servicesTitle": "Our Services",
        "service1": "Diagnosis", // For Navbar and tab button
        "service2": "Engine Maintenance", // For Navbar and tab button
        "service3": "Tire Change", // For Navbar and tab button
        "service4": "Oil Change", // For Navbar and tab button

        // service.html Texts
        "servicePageHeader": "Roadside Assistance", // Page title and navbar link
        "roadsideAssistanceHeader": "Roadside Assistance Services",
        "roadsideAssistanceSubtitle": "Kartal Lastik is always with you in your emergencies!",
        "tireRepairTitle": "Tire Repair",
        "tireRepairDesc": "We provide fast and effective repair service when your tire punctures or gets damaged on the road.",
        "batteryBoostTitle": "Battery Boost",
        "batteryBoostDesc": "When your vehicle's battery runs out, we help you get back on the road with on-site battery boost service.",
        "fuelDeliveryTitle": "Fuel Delivery",
        "fuelDeliveryDesc": "When you run out of fuel, we provide fuel to you as soon as possible to resolve your inconvenience.",
        "lockoutServiceTitle": "Lockout Service",
        "lockoutServiceDesc": "If you forget your keys in your vehicle, we provide a car unlocking service without damaging your vehicle.",
        "towingServiceTitle": "Towing Service",
        "towingServiceDesc": "If your vehicle is unable to move, we provide a safe towing service.",
        "emergencyRepairTitle": "Emergency Repair",
        "emergencyRepairDesc": "We offer fast and temporary on-site repair services for minor malfunctions.",

        // contact.html Texts
        "contactPageHeader": "CONTACT", // Page title and navbar link
        "contactFormTitle": "Contact Us",
        "contactFormDescription": "Contact us for your questions or appointment requests."
    }
};

// Sayfa başlığı için özel bir fonksiyon
function setPageTitle(lang) {
    const currentPage = window.location.pathname.split('/').pop(); // Örneğin 'index.html'
    let titleKey;

    if (currentPage === 'index.html' || currentPage === '') {
        titleKey = "heroTitle"; // Anasayfanın ana başlığını kullan
    } else if (currentPage === 'service.html') {
        titleKey = "servicePageHeader";
    } else if (currentPage === 'contact.html') {
        titleKey = "contactPageHeader";
    }
    // Diğer sayfalarınız için de burada tanımlayabilirsiniz

    if (titleKey && translations[lang] && translations[lang][titleKey]) {
        document.title = translations[lang][titleKey] + " - Kartal Lastik"; // Sayfa başlığını güncelle
    } else {
        document.title = "Kartal Lastik"; // Varsayılan başlık
    }
}


function setLanguage(lang) {
    // Seçilen dili Local Storage'a kaydet
    localStorage.setItem('selectedLanguage', lang);

    // Tüm data-key özniteliğine sahip elementleri seç
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Input ve textarea placeholder'larını güncelle
            if (element.placeholder) {
                element.placeholder = translations[lang][key];
            }
            // Normal metin içeriğini güncelle
            else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Sayfa başlığını güncelle
    setPageTitle(lang);
}

// Sayfa yüklendiğinde dili ayarla
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'tr'; // Varsayılan dil Türkçe
    setLanguage(savedLang);
});