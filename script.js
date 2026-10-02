const whatsappMessages={"partner": {"en": "Hi Shlomi, I saw your website and would like to ask about your driving services.\nBusiness name:", "he": "היי שלומי, ראיתי את האתר שלך ואשמח לשאול על שירותי ההסעות שלך.\nשם העסק:"}, "journey": {"en": "Hi Shlomi, I’d like to check availability and get a quote for a journey.\nWhich details do you need?", "he": "היי שלומי, אשמח לבדוק זמינות ולקבל הצעת מחיר לנסיעה.\nאילו פרטים צריך לשלוח לך?"}, "general": {"en": "Hi Shlomi, I saw your website and would like to ask about your driving services.", "he": "היי שלומי, ראיתי את האתר שלך ואשמח לשאול על שירותי ההסעות שלך."}};
const toggle=document.getElementById('language');
function setLanguage(lang){document.documentElement.lang=lang;document.documentElement.dir=lang==='he'?'rtl':'ltr';document.querySelectorAll('[data-en]').forEach(el=>{el.innerHTML=el.dataset[lang]});toggle.textContent=lang==='en'?'עברית':'English';toggle.setAttribute('aria-label',lang==='en'?'Switch to Hebrew':'Switch to English');document.title=lang==='en'?'Private Driver Israel for Up to 8 Passengers | Shlomi Rovshits':'שלומי רובשיץ | נהג פרטי בכל הארץ';document.querySelectorAll('.whatsapp').forEach(a=>{a.href='https://wa.me/972542955555?text='+encodeURIComponent(whatsappMessages[a.dataset.message][lang])});try{localStorage.setItem('shlomi-language',lang)}catch{}}
const heroPhoto=document.querySelector('.hero-image img');
heroPhoto.src='shlomi-mercedes-van.jpg';
heroPhoto.alt="Shlomi Rovshits's black Mercedes passenger van on the road in Israel";
const heroKicker=document.querySelector('.image-caption span');
heroKicker.dataset.en='YOUR PRIVATE DRIVER IN ISRAEL';
heroKicker.dataset.he='הנהג הפרטי שלכם בישראל';
const heroCaption=document.querySelector('.image-caption b');
heroCaption.dataset.en='Up to 8 passengers, travelling together.';
heroCaption.dataset.he='עד 8 נוסעים, כולם יחד.';
const vehicleLabel=document.querySelector('.image-location');
vehicleLabel.dataset.en='MERCEDES PASSENGER VAN';
vehicleLabel.dataset.he='רכב מרצדס לעד 8 נוסעים';
const personalSection=document.querySelector('.personal');
const personalCopy=personalSection.querySelector('.personal-copy');
const portrait=document.createElement('figure');
portrait.className='driver-photo';
portrait.innerHTML='<img src="shlomi-rovshits.jpg" alt="Shlomi Rovshits, private driver in Israel" loading="lazy" decoding="async"><figcaption>Shlomi Rovshits · שלומי רובשיץ</figcaption>';
personalSection.insertBefore(portrait,personalCopy);
document.querySelector('footer small')?.remove();
toggle.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'he':'en'));let language='en';try{language=localStorage.getItem('shlomi-language')==='he'?'he':'en'}catch{}setLanguage(language);

