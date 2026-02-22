import type { Locale } from './config';
import { DEFAULT_LOCALE } from './config';

/**
 * Translation strings per locale.
 * Add new keys here and use them via t(lang, 'section', 'key') or t(lang, 'section.key').
 */
export const strings = {
  es: {
    app: {
      name: 'Inmobiliaria',
    },
    home: {
      greeting: 'Hola Mundo!!',
      title: 'Inicio',
    },
    common: {
      loading: 'Cargando...',
      error: 'Ha ocurrido un error',
    },
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      language: 'Idioma',
      apartments: 'Apartamentos',
      menu: 'Menú',
      ourAccommodation: 'Nuestros alojamientos',
      viewMore: 'Ver más',
    },
    apartment: {
      description: 'Descripción',
      features: 'Características',
      services: 'Servicios',
      maxGuests: 'personas máx.',
      location: 'Ubicación',
      register: 'Registro',
      bookNow: 'Reservar ahora',
    },
    cookies: {
      message: 'Este sitio web utiliza cookies para mejorar tu experiencia de navegación.',
      moreInfo: 'Más información',
      accept: 'Aceptar',
      reject: 'Rechazar',
      pageTitle: 'Política de Cookies',
      intro: 'En B&P Miami Playa utilizamos cookies para garantizar el correcto funcionamiento de nuestro sitio web y mejorar tu experiencia como usuario.',
      whatTitle: '¿Qué son las cookies?',
      whatText: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante un periodo de tiempo.',
      typesTitle: 'Tipos de cookies que utilizamos',
      technicalTitle: 'Cookies técnicas',
      technicalText: 'Son esenciales para el funcionamiento del sitio web. Incluyen la cookie de consentimiento que registra tu preferencia sobre el uso de cookies.',
      preferencesTitle: 'Cookies de preferencias',
      preferencesText: 'Permiten recordar tu idioma preferido y otras configuraciones para ofrecerte una experiencia personalizada.',
      manageTitle: '¿Cómo gestionar las cookies?',
      manageText: 'Puedes aceptar o rechazar las cookies a través del banner que aparece al visitar nuestro sitio. También puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento.',
      contactTitle: 'Contacto',
      contactText: 'Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos a través de los datos de contacto disponibles en nuestra web.',
      rejectedTitle: 'Cookies rechazadas',
      rejectedMessage: 'Has rechazado el uso de cookies en este sitio web. Para poder navegar por nuestro contenido, es necesario aceptar las cookies.',
      rejectedAccept: 'Aceptar cookies y continuar',
    },
  },
  en: {
    app: {
      name: 'Real Estate',
    },
    home: {
      greeting: 'Hello World!!',
      title: 'Home',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
    },
    nav: {
      home: 'Home',
      about: 'About us',
      language: 'Language',
      apartments: 'Apartments',
      menu: 'Menu',
      ourAccommodation: 'Our accommodation',
      viewMore: 'View more',
    },
    apartment: {
      description: 'Description',
      features: 'Features',
      services: 'Services',
      maxGuests: 'guests max.',
      location: 'Location',
      register: 'Registration',
      bookNow: 'Book now',
    },
    cookies: {
      message: 'This website uses cookies to enhance your browsing experience.',
      moreInfo: 'Learn more',
      accept: 'Accept',
      reject: 'Reject',
      pageTitle: 'Cookie Policy',
      intro: 'At B&P Miami Playa we use cookies to ensure our website works properly and to improve your experience as a user.',
      whatTitle: 'What are cookies?',
      whatText: 'Cookies are small text files stored on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time.',
      typesTitle: 'Types of cookies we use',
      technicalTitle: 'Technical cookies',
      technicalText: 'These are essential for the website to function. They include the consent cookie that records your preference regarding the use of cookies.',
      preferencesTitle: 'Preference cookies',
      preferencesText: 'These allow us to remember your preferred language and other settings to offer you a personalised experience.',
      manageTitle: 'How to manage cookies?',
      manageText: 'You can accept or reject cookies through the banner that appears when you visit our site. You can also configure your browser to block or delete cookies at any time.',
      contactTitle: 'Contact',
      contactText: 'If you have any questions about our cookie policy, you can reach us through the contact details available on our website.',
      rejectedTitle: 'Cookies rejected',
      rejectedMessage: 'You have rejected the use of cookies on this website. To browse our content, you need to accept cookies.',
      rejectedAccept: 'Accept cookies and continue',
    },
  },
  cat: {
    app: {
      name: 'Immobiliària',
    },
    home: {
      greeting: 'Hola Món!!',
      title: 'Inici',
    },
    common: {
      loading: 'Carregant...',
      error: 'S\'ha produït un error',
    },
    nav: {
      home: 'Inici',
      about: 'Nosaltres',
      language: 'Llengua',
      apartments: 'Apartaments',
      menu: 'Menú',
      ourAccommodation: 'Els nostres allotjaments',
      viewMore: 'Veure més',
    },
    apartment: {
      description: 'Descripció',
      features: 'Característiques',
      services: 'Serveis',
      maxGuests: 'persones màx.',
      location: 'Ubicació',
      register: 'Registre',
      bookNow: 'Reservar ara',
    },
    cookies: {
      message: 'Aquest lloc web utilitza galetes per millorar la teva experiència de navegació.',
      moreInfo: 'Més informació',
      accept: 'Acceptar',
      reject: 'Rebutjar',
      pageTitle: 'Política de Galetes',
      intro: 'A B&P Miami Playa utilitzem galetes per garantir el correcte funcionament del nostre lloc web i millorar la teva experiència com a usuari.',
      whatTitle: 'Què són les galetes?',
      whatText: 'Les galetes són petits arxius de text que s\'emmagatzemen al teu dispositiu quan visites un lloc web. Permeten que el lloc recordi les teves accions i preferències durant un període de temps.',
      typesTitle: 'Tipus de galetes que utilitzem',
      technicalTitle: 'Galetes tècniques',
      technicalText: 'Són essencials per al funcionament del lloc web. Inclouen la galeta de consentiment que registra la teva preferència sobre l\'ús de galetes.',
      preferencesTitle: 'Galetes de preferències',
      preferencesText: 'Permeten recordar el teu idioma preferit i altres configuracions per oferir-te una experiència personalitzada.',
      manageTitle: 'Com gestionar les galetes?',
      manageText: 'Pots acceptar o rebutjar les galetes a través del bàner que apareix en visitar el nostre lloc. També pots configurar el teu navegador per bloquejar o eliminar galetes en qualsevol moment.',
      contactTitle: 'Contacte',
      contactText: 'Si tens preguntes sobre la nostra política de galetes, pots contactar-nos a través de les dades de contacte disponibles al nostre web.',
      rejectedTitle: 'Galetes rebutjades',
      rejectedMessage: 'Has rebutjat l\'ús de galetes en aquest lloc web. Per poder navegar pel nostre contingut, cal acceptar les galetes.',
      rejectedAccept: 'Acceptar galetes i continuar',
    },
  },
  fr: {
    app: {
      name: 'Immobilier',
    },
    home: {
      greeting: 'Bonjour le Monde !!',
      title: 'Accueil',
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      language: 'Langue',
      apartments: 'Appartements',
      menu: 'Menu',
      ourAccommodation: 'Nos hébergements',
      viewMore: 'Voir plus',
    },
    apartment: {
      description: 'Description',
      features: 'Caractéristiques',
      services: 'Services',
      maxGuests: 'personnes max.',
      location: 'Emplacement',
      register: 'Enregistrement',
      bookNow: 'Réserver maintenant',
    },
    cookies: {
      message: 'Ce site web utilise des cookies pour améliorer votre expérience de navigation.',
      moreInfo: 'En savoir plus',
      accept: 'Accepter',
      reject: 'Refuser',
      pageTitle: 'Politique de Cookies',
      intro: 'Chez B&P Miami Playa, nous utilisons des cookies pour assurer le bon fonctionnement de notre site web et améliorer votre expérience en tant qu\'utilisateur.',
      whatTitle: 'Que sont les cookies ?',
      whatText: 'Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils permettent au site de mémoriser vos actions et préférences pendant une période donnée.',
      typesTitle: 'Types de cookies que nous utilisons',
      technicalTitle: 'Cookies techniques',
      technicalText: 'Ils sont essentiels au fonctionnement du site web. Ils incluent le cookie de consentement qui enregistre votre préférence concernant l\'utilisation des cookies.',
      preferencesTitle: 'Cookies de préférences',
      preferencesText: 'Ils permettent de mémoriser votre langue préférée et d\'autres paramètres pour vous offrir une expérience personnalisée.',
      manageTitle: 'Comment gérer les cookies ?',
      manageText: 'Vous pouvez accepter ou refuser les cookies via la bannière qui apparaît lors de votre visite. Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies à tout moment.',
      contactTitle: 'Contact',
      contactText: 'Si vous avez des questions concernant notre politique de cookies, vous pouvez nous contacter via les coordonnées disponibles sur notre site web.',
      rejectedTitle: 'Cookies refusés',
      rejectedMessage: 'Vous avez refusé l\'utilisation des cookies sur ce site web. Pour naviguer sur notre contenu, il est nécessaire d\'accepter les cookies.',
      rejectedAccept: 'Accepter les cookies et continuer',
    },
  },
} as const;

/**
 * Get a translation string for the given locale.
 * Falls back to DEFAULT_LOCALE if the key is missing in the requested locale.
 *
 * @example
 * t(lang, 'home', 'greeting')  // "Hola Mundo!!" | "Hello World!!" | "Hola Món!!"
 * t(lang, 'nav', 'about')
 */
export function t(
  lang: Locale,
  section: keyof (typeof strings)[Locale],
  key: string
): string {
  const localeStrings = strings[lang];
  const sectionObj = localeStrings[section] as Record<string, string> | undefined;
  const value = sectionObj?.[key];
  if (typeof value === 'string') return value;
  const defaultSection = strings[DEFAULT_LOCALE][section] as Record<string, string> | undefined;
  const fallback = defaultSection?.[key];
  return typeof fallback === 'string' ? fallback : key;
}
