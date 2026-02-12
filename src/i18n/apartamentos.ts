import type { Locale } from './config';

/** Apartment slug ids for routing (e.g. /apartamento/blue). */
export const APARTMENT_IDS = ['blue', 'paradise'] as const;
export type ApartmentId = (typeof APARTMENT_IDS)[number];

/**
 * Contact and company info (same for all locales).
 */
export const contact = {
  name: 'B&P Alojamientos Miami Playa',
  email: 'info@bpmiamiplaya.es',
  website: 'https://www.bpmiamiplaya.es',
  phone: '+34 619333640',
} as const;

/**
 * Apartments and house content in three locales (es, en, cat).
 * Use: apartamentos[lang].welcome, apartamentos[lang].blue, apartamentos[lang].paradise, apartamentos[lang].booking.
 */
export const apartamentos = {
  es: {
    welcome: {
      title: 'Bienvenidos a B&P nuestros alojamientos en Miami Playa',
      intro:
        'En el corazón de la Costa Dorada, B&P Miami Playa ofrece alojamientos diseñados para aquellos que buscan una experiencia de descanso completa, rodeados de naturaleza y serenidad. A pocos minutos de las hermosas playas de Miami Platja y con fácil acceso a las montañas, estos alojamientos son ideales para disfrutar de una escapada donde el tiempo parece detenerse.',
      body: `Durante tu estancia, tendrás la oportunidad de desconectar y sumergirte en actividades al aire libre como senderismo por los senderos que recorren la costa o los parques naturales cercanos, disfrutar de las cristalinas aguas de la playa o simplemente relajarte bajo el sol mediterráneo. Además, la región ofrece una rica gastronomía con sus famosos pescados y arroces, así como un impresionante patrimonio cultural. En B&P Miami Playa, la comodidad y el diseño de nuestros alojamientos se complementan con la belleza del entorno, brindándote una estancia única, donde lo más importante es disfrutar de la calma, el paisaje y la experiencia completa que solo este rincón de Tarragona puede ofrecer.`,
    },
    blue: {
      name: 'Apartamento Blue',
      subtitle: 'B&P Miami Playa Blue',
      shortDescription:
        'Apartamento de dos habitaciones con todas las comodidades, en primera planta, en pleno centro de Miami Platja, a un paso de la playa.',
      description: `El apartamento B&P Miami Playa Blue está situado en la primera planta del edificio, con acceso mediante escaleras, en pleno centro de Miami Platja, a un paso de la playa, lo que lo convierte en una opción ideal para olvidarse del coche y desplazarse cómodamente a pie.

Dispone de dos dormitorios acogedores: uno con cama doble 135 cm y el otro con cama de 90 cm. El baño es completo, equipado con ducha y secador de pelo. El salón-comedor está equipado con Smart TV de 50" y conexión WiFi y acceso a la terraza.

La cocina es independiente y está totalmente equipada con todo lo necesario para la estancia: vitrocerámica, microondas, nevera, congelador, lavadora, cafetera italiana, cafetera Senseo, además de utensilios de cocina, menaje, vajilla y cubertería.

Desde el salón se accede a una terraza privada, uno de los principales atractivos del apartamento, equipada con barbacoa y mobiliario exterior. El apartamento dispone de aire acondicionado frío/calor, calefacción mediante radiadores y mosquiteras en las ventanas, garantizando el máximo confort durante todo el año.`,
      features: {
        bedrooms: '2 habitaciones acogedoras y luminosas',
        bed1: 'Cama doble 135x190 cm',
        bed2: 'Cama individual 90 cm',
        bathroom: 'Baño completo con ducha',
        kitchen: 'Cocina independiente y equipada',
        living: 'Salón-comedor con Smart TV de 50" y WiFi',
        terrace: 'Terraza privada con barbacoa y mobiliario exterior',
        climate: 'Aire acondicionado frío/calor y calefacción con radiadores',
        extras: 'Mosquiteras en las ventanas',
      },
      services: {
        maxGuests: 'Máx. 3 personas',
        floor: 'Primer piso',
        wifi: 'Wi-Fi independiente y gratuito',
        parking: 'Zona de aparcamiento gratuito en la calle junto al apartamento',
        noSmoking: 'Prohibido fumar en el alojamiento',
        noPets: 'No se aceptan animales',
        livingRoom: 'Smart TV de 50", aire acondicionado',
        bedroom: '1 habitación con cama doble 135 cm, armario, plancha y tabla de planchar',
        extra: 'Caja fuerte gratuita, botiquín, cuna de viaje (bajo petición)',
        bathroom: '1 baño, ducha, champú y gel, papel higiénico, secador de pelo',
        kitchenList:
          'Cocina completamente equipada, vitrocerámica, microondas, cafetera Senseo, cafetera italiana, exprimidor, batidora, nevera, congelador, lavadora, menaje, cubertería, vajilla, copas.',
      },
      areaInfo: `El apartamento se encuentra en una excelente ubicación en el centro de Miami Platja, junto a la Plaça Tarragona. A pie: supermercados, farmacias, bares, restaurantes y comercios a unos 200 m. La playa a 4 minutos andando (200 m). La ubicación hace innecesario el coche durante la estancia.`,
      maxGuests: 3,
      floor: 1,
      checkIn: 'Desde las 16:00 h',
      checkOut: 'Hasta las 11:00 h',
      license: 'HUTT-008111',
      vuc: 'ESFCTU00004303200026525200000000000000000',
    },
    paradise: {
      name: 'Casa Paradise',
      subtitle: 'B&P Alojamientos Miami Platja – Paradise',
      shortDescription:
        'Casa de dos plantas con jardín privado, jacuzzi y acceso a piscina comunitaria (compartida con 4 viviendas), en zona tranquila de Miami Platja.',
      description: `La casa B&P Alojamientos Miami Platja Paradise es una vivienda de dos plantas diseñada para ofrecer confort y privacidad.

En la planta baja: cocina totalmente equipada, aseo, comedor y zona de bienestar con jacuzzi climatizado, además del jardín privado con barbacoa. Desde el jardín se accede directamente a la piscina comunitaria, compartida solo con cuatro viviendas más.

En la planta superior: dos dormitorios acogedores y luminosos y un baño completo con ducha, así como una terraza. Dormitorio 1: cama doble de 150 cm. Dormitorio 2: dos camas individuales de 90 cm.

El salón-comedor cuenta con Smart TV de 50" y conexión WiFi. La cocina está completamente equipada con electrodomésticos y utensilios, incluyendo horno y lavavajillas. Aire acondicionado y calefacción. Parking privado gratuito dentro de la casa.`,
      features: {
        floors: 'Vivienda de 2 plantas',
        bedrooms: '2 habitaciones luminosas y confortables',
        bed1: 'Cama doble 150 cm',
        bed2: '2 camas individuales 90 cm',
        bathroom: '1 baño completo con ducha (planta superior)',
        toilet: '1 aseo (planta baja)',
        kitchen: 'Cocina totalmente equipada con horno y lavavajillas',
        living: 'Salón-comedor espacioso con Smart TV de 50" y WiFi',
        garden: 'Jardín privado con barbacoa',
        jacuzzi: 'Jacuzzi climatizado',
        pool: 'Acceso directo a piscina comunitaria (compartida con 4 casas)',
        parking: 'Parking privado gratuito en la vivienda',
      },
      services: {
        maxGuests: 'Máx. 4 personas',
        wifi: 'Wi-Fi gratuito',
        noSmoking: 'Prohibido fumar en el alojamiento',
        noPets: 'No se aceptan animales',
      },
      areaInfo: `La casa se encuentra en una zona tranquila de Miami Platja. Supermercado a 9 min a pie (600 m). Bar, comida para llevar y restaurante en las proximidades. Playa a unos 20 min a pie. Ideal para unas vacaciones relajadas en la Costa Dorada.`,
      maxGuests: 4,
      floors: 2,
      checkIn: 'Desde las 16:00 h',
      checkOut: 'Hasta las 11:00 h',
      license: 'HUTT-061296',
      vuc: 'ESFCTU00004303200013226400000000000000000',
    },
    booking: {
      checkInTitle: 'Horario de entrada (Check-in)',
      checkOutTitle: 'Horario de salida (Check-out)',
      checkInTime: 'Desde las 16:00 h.',
      checkOutTime: 'Hasta las 11:00 h.',
      checkInNote:
        'Para peticiones especiales, consulte disponibilidad desde la sección de contacto o en los comentarios al reservar.',
      reservationTitle: 'Formalización de la reserva',
      reservationSteps: `Seleccione las fechas deseadas; el sistema mostrará la disponibilidad. Indique el número de adultos y niños, revise el importe y continúe con "Reservar". Complete los campos y confirme con "Confirmar reserva". Recibirá un correo de confirmación.`,
      cancellationTitle: 'Cancelaciones',
      cancellationText: 'Las condiciones de cancelación se indican en el momento de la reserva y en el correo de confirmación.',
      depositTitle: 'Fianza',
      depositText:
        'No se requiere fianza previa. Como garantía del buen uso, al finalizar la estancia se revisará el alojamiento y se podrá efectuar cargo por desperfectos en la tarjeta asociada a la reserva.',
      checkInProcessTitle: 'Entrada (Check-in)',
      checkInProcessText: `Unos días antes de la llegada, nuestro servicio de check-in contactará por teléfono para facilitar el acceso y la zona de aparcamiento. Recibirá un correo para el check-in online y deberá introducir los datos de todos los huéspedes adultos (registro obligatorio).`,
      checkOutProcessTitle: 'Salida (Check-out)',
      checkOutProcessText:
        'La hora máxima de salida es las 11:00 h. Tras la estancia se revisará el alojamiento y se podrá cargar en la tarjeta por daños o faltas de material.',
      rulesTitle: 'Normativa y restricciones',
      rules: [
        'Se pueden alojar niños de cualquier edad.',
        'Prohibido fumar en todo el alojamiento.',
        'No se aceptan animales.',
        'No se permiten fiestas, despedidas de soltero/a o eventos similares.',
        'Es obligatorio respetar el apartamento, mobiliario e instalaciones.',
        'No está permitido alojar a más personas de las indicadas en la reserva.',
        'No nos hacemos responsables del robo o pérdida de objetos personales. No dejar objetos de valor visibles.',
        'El uso del Wi-Fi es responsabilidad exclusiva del cliente.',
      ],
      licenseNote:
        'Alojamiento inscrito en el Registro de Turismo de Cataluña, conforme a la normativa de viviendas de uso turístico.',
    },
  },
  en: {
    welcome: {
      title: 'Welcome to B&P – Our accommodation in Miami Playa',
      intro:
        'In the heart of the Costa Dorada, B&P Miami Playa offers accommodation designed for those seeking a complete rest experience, surrounded by nature and serenity. Just minutes from the beautiful beaches of Miami Platja and with easy access to the mountains, these properties are ideal for a getaway where time seems to stand still.',
      body: `During your stay, you will have the chance to unwind and enjoy outdoor activities such as hiking along the coastal trails or nearby natural parks, swimming in the crystal-clear waters of the beach, or simply relaxing under the Mediterranean sun. The region also offers rich gastronomy with its famous fish and rice dishes, as well as an impressive cultural heritage. At B&P Miami Playa, the comfort and design of our accommodation are complemented by the beauty of the surroundings, offering you a unique stay where what matters most is enjoying the calm, the landscape, and the full experience that only this corner of Tarragona can provide.`,
    },
    blue: {
      name: 'Apartment Blue',
      subtitle: 'B&P Miami Playa Blue',
      shortDescription:
        'Two-bedroom apartment with all amenities, first floor, in the centre of Miami Platja, a stone’s throw from the beach.',
      description: `Apartment B&P Miami Playa Blue is on the first floor of the building, with stair access, in the centre of Miami Platja, a stone’s throw from the beach, making it ideal for leaving the car behind and getting around on foot.

It has two cosy bedrooms: one with a 135 cm double bed and the other with a 90 cm single bed. The bathroom is full, with a shower and hairdryer. The living-dining room has a 50" Smart TV, WiFi, and access to the terrace.

The kitchen is separate and fully equipped with everything you need: hob, microwave, fridge, freezer, washing machine, Italian coffee maker, Senseo coffee maker, plus kitchen utensils, crockery, and cutlery.

From the living room you reach a private terrace, one of the apartment’s main features, with a barbecue and outdoor furniture. The apartment has air conditioning (cooling/heating), radiator heating, and window mosquito nets for year-round comfort.`,
      features: {
        bedrooms: '2 cosy, bright bedrooms',
        bed1: 'Double bed 135x190 cm',
        bed2: 'Single bed 90 cm',
        bathroom: 'Full bathroom with shower',
        kitchen: 'Separate, fully equipped kitchen',
        living: 'Living-dining room with 50" Smart TV and WiFi',
        terrace: 'Private terrace with barbecue and outdoor furniture',
        climate: 'Air conditioning (cool/heat) and radiator heating',
        extras: 'Window mosquito nets',
      },
      services: {
        maxGuests: 'Max. 3 guests',
        floor: 'First floor',
        wifi: 'Free independent Wi-Fi',
        parking: 'Free on-street parking right next to the apartment',
        noSmoking: 'No smoking in the property',
        noPets: 'Pets not allowed',
        livingRoom: '50" Smart TV, air conditioning',
        bedroom: '1 bedroom with 135 cm double bed, wardrobe, iron and ironing board',
        extra: 'Free safe, first-aid kit, travel cot (on request)',
        bathroom: '1 bathroom, shower, shampoo and gel, toilet paper, hairdryer',
        kitchenList:
          'Fully equipped kitchen, hob, microwave, Senseo and Italian coffee makers, juicer, blender, fridge, freezer, washing machine, crockery, cutlery, glassware.',
      },
      areaInfo: `The apartment is in an excellent central location in Miami Platja, next to Plaça Tarragona. On foot: supermarkets, pharmacies, bars, restaurants, and shops about 200 m away. The beach is 4 minutes’ walk (200 m). The location makes a car unnecessary during your stay.`,
      maxGuests: 3,
      floor: 1,
      checkIn: 'From 4:00 pm',
      checkOut: 'Until 11:00 am',
      license: 'HUTT-008111',
      vuc: 'ESFCTU00004303200026525200000000000000000',
    },
    paradise: {
      name: 'Paradise House',
      subtitle: 'B&P Accommodation Miami Platja – Paradise',
      shortDescription:
        'Two-storey house with private garden, jacuzzi, and access to communal pool (shared with 4 homes), in a quiet area of Miami Platja.',
      description: `Casa B&P Alojamientos Miami Platja Paradise is a two-storey house designed for comfort and privacy.

Ground floor: fully equipped kitchen, toilet, dining area, and wellness area with heated jacuzzi, plus a private garden with barbecue. From the garden you have direct access to the communal pool, shared with only four other homes.

Upper floor: two cosy, bright bedrooms and a full bathroom with shower, plus a terrace. Bedroom 1: 150 cm double bed. Bedroom 2: two 90 cm single beds.

The living-dining room has a 50" Smart TV and WiFi. The kitchen is fully equipped with appliances and utensils, including oven and dishwasher. Air conditioning and heating. Free private parking on the premises.`,
      features: {
        floors: '2-storey house',
        bedrooms: '2 bright, comfortable bedrooms',
        bed1: 'Double bed 150 cm',
        bed2: '2 single beds 90 cm',
        bathroom: '1 full bathroom with shower (upper floor)',
        toilet: '1 toilet (ground floor)',
        kitchen: 'Fully equipped kitchen with oven and dishwasher',
        living: 'Spacious living-dining room with 50" Smart TV and WiFi',
        garden: 'Private garden with barbecue',
        jacuzzi: 'Heated jacuzzi',
        pool: 'Direct access to communal pool (shared with 4 houses)',
        parking: 'Free private parking on the premises',
      },
      services: {
        maxGuests: 'Max. 4 guests',
        wifi: 'Free Wi-Fi',
        noSmoking: 'No smoking in the property',
        noPets: 'Pets not allowed',
      },
      areaInfo: `The house is in a quiet area of Miami Platja. Supermarket 9 min on foot (600 m). Bar, takeaway, and restaurant nearby. Beach about 20 min on foot. Ideal for a relaxing holiday on the Costa Dorada.`,
      maxGuests: 4,
      floors: 2,
      checkIn: 'From 4:00 pm',
      checkOut: 'Until 11:00 am',
      license: 'HUTT-061296',
      vuc: 'ESFCTU00004303200013226400000000000000000',
    },
    booking: {
      checkInTitle: 'Check-in time',
      checkOutTitle: 'Check-out time',
      checkInTime: 'From 4:00 pm.',
      checkOutTime: 'Until 11:00 am.',
      checkInNote:
        'For special requests, check availability via the contact section or in the comments when booking.',
      reservationTitle: 'Making a reservation',
      reservationSteps: `Select your dates; the system will show availability. Enter the number of adults and children, review the total and continue with "Book". Fill in the required fields and confirm with "Confirm reservation". You will receive a confirmation email.`,
      cancellationTitle: 'Cancellations',
      cancellationText: 'Cancellation terms are shown at the time of booking and in the confirmation email.',
      depositTitle: 'Deposit',
      depositText:
        'No advance deposit required. As a guarantee for proper use, the property will be inspected after your stay and any charge for damage may be made to the card linked to the reservation.',
      checkInProcessTitle: 'Check-in',
      checkInProcessText: `A few days before arrival, our check-in service will contact you by phone to provide access details and the nearest parking area. You will receive an email for online check-in and must enter the details of all adult guests (mandatory registration).`,
      checkOutProcessTitle: 'Check-out',
      checkOutProcessText:
        'Latest check-out time is 11:00 am. After your stay the property will be inspected and any charge for damage or missing items may be made to the card.',
      rulesTitle: 'Rules and restrictions',
      rules: [
        'Children of any age are welcome.',
        'No smoking anywhere in the property.',
        'Pets are not allowed.',
        'Parties, stag/hen parties or similar events are not allowed.',
        'Guests must respect the property, furniture, and facilities.',
        'No more guests than stated in the reservation are allowed.',
        'We are not responsible for theft or loss of personal belongings. Do not leave valuables in sight.',
        'Use of Wi-Fi is solely the responsibility of the guest.',
      ],
      licenseNote:
        'Property registered in the Tourism Register of Catalonia, in accordance with regulations on tourist accommodation.',
    },
  },
  cat: {
    welcome: {
      title: 'Benvinguts a B&P – Els nostres allotjaments a Miami Playa',
      intro:
        'Al cor de la Costa Daurada, B&P Miami Playa ofereix allotjaments dissenyats per a qui busca una experiència de descans completa, envoltats de natura i serenitat. A pocs minuts de les platges de Miami Platja i amb fàcil accés a la muntanya, aquests allotjaments són ideals per gaudir d’una escapada on el temps sembla aturar-se.',
      body: `Durant la teva estada, tindràs l’oportunitat de desconnectar i submergir-te en activitats a l’aire lliure com el senderisme pels senders de la costa o els parcs naturals propers, gaudir de les aigües cristal·lines de la platja o simplement relaxar-te sota el sol mediterrani. A més, la regió ofereix una rica gastronomia amb els seus famosos peixos i arròsos, així com un patrimoni cultural impressionant. A B&P Miami Playa, la comoditat i el disseny dels nostres allotjaments es complementen amb la bellesa de l’entorn, oferint-te una estada única, on el més important és gaudir de la calma, el paisatge i l’experiència que només aquest racó de Tarragona pot oferir.`,
    },
    blue: {
      name: 'Apartament Blue',
      subtitle: 'B&P Miami Playa Blue',
      shortDescription:
        'Apartament de dues habitacions amb totes les comoditats, primer pis, al centre de Miami Platja, a un pas de la platja.',
      description: `L’apartament B&P Miami Playa Blue està situat al primer pis de l’edifici, amb accés per escales, al centre de Miami Platja, a un pas de la platja, cosa que el converteix en una opció ideal per oblidar-se del cotxe i desplaçar-se còmodament a peu.

Té dues habitacions acollidores: una amb llit doble de 135 cm i l’altra amb llit de 90 cm. El bany és complet, amb dutxa i assecador de cabell. El menjador-saló té Smart TV de 50" i WiFi i accés a la terrassa.

La cuina és independent i està totalment equipada amb tot el necessari: vitroceràmica, microones, nevera, congelador, rentadora, cafetera italiana, cafetera Senseo, a més d’estris, vaixella i coberteria.

Des del saló s’accedeix a una terrassa privada, un dels principals atractius de l’apartament, amb barbacoa i mobiliari exterior. L’apartament disposa d’aire condicionat fred/calor, calefacció per radiadors i mosquiteres a les finestres, per a màxim confort tot l’any.`,
      features: {
        bedrooms: '2 habitacions acollidores i luminoses',
        bed1: 'Llit doble 135x190 cm',
        bed2: 'Llit individual 90 cm',
        bathroom: 'Bany complet amb dutxa',
        kitchen: 'Cuina independent i equipada',
        living: 'Menjador-saló amb Smart TV de 50" i WiFi',
        terrace: 'Terrassa privada amb barbacoa i mobiliari exterior',
        climate: 'Aire condicionat fred/calor i calefacció per radiadors',
        extras: 'Mosquiteres a les finestres',
      },
      services: {
        maxGuests: 'Màx. 3 persones',
        floor: 'Primer pis',
        wifi: 'Wi-Fi independent i gratuït',
        parking: 'Zona d’aparcament gratuït al carrer al costat de l’apartament',
        noSmoking: 'Prohibit fumar a l’allotjament',
        noPets: 'No s’accepten animals',
        livingRoom: 'Smart TV de 50", aire condicionat',
        bedroom: '1 habitació amb llit doble 135 cm, armari, planxa i taula de planxar',
        extra: 'Caixa forta gratuïta, botiquí, bressol de viatge (sota petició)',
        bathroom: '1 bany, dutxa, xampú i gel, paper higiènic, assecador de cabell',
        kitchenList:
          'Cuina completament equipada, vitroceràmica, microones, cafetera Senseo, cafetera italiana, exprimidor, batedora, nevera, congelador, rentadora, vaixella, coberteria, copes.',
      },
      areaInfo: `L’apartament es troba en una excel·lent ubicació al centre de Miami Platja, al costat de la Plaça Tarragona. A peu: supermercats, farmàcies, bars, restaurants i comerços a uns 200 m. La platja a 4 minuts a peu (200 m). La ubicació fa innecesari el cotxe durant l’estada.`,
      maxGuests: 3,
      floor: 1,
      checkIn: 'Des de les 16:00 h',
      checkOut: 'Fins a les 11:00 h',
      license: 'HUTT-008111',
      vuc: 'ESFCTU00004303200026525200000000000000000',
    },
    paradise: {
      name: 'Casa Paradise',
      subtitle: 'B&P Allotjaments Miami Platja – Paradise',
      shortDescription:
        'Casa de dues plantes amb jardí privat, jacuzzi i accés a piscina comunitària (compartida amb 4 vivendes), en zona tranquil·la de Miami Platja.',
      description: `La casa B&P Allotjaments Miami Platja Paradise és una vivenda de dues plantes dissenyada per oferir confort i privacitat.

A la planta baixa: cuina totalment equipada, lavabo, menjador i zona de benestar amb jacuzzi climatitzat, a més del jardí privat amb barbacoa. Des del jardí s’accedeix directament a la piscina comunitària, compartida només amb quatre vivendes més.

A la planta superior: dues habitacions acollidores i luminoses i un bany complet amb dutxa, així com una terrassa. Habitació 1: llit doble de 150 cm. Habitació 2: dos llits individuals de 90 cm.

El menjador-saló té Smart TV de 50" i WiFi. La cuina està completament equipada amb electrodomèstics i estris, incloent forn i rentaplats. Aire condicionat i calefacció. Pàrquing privat gratuït dins de la casa.`,
      features: {
        floors: 'Vivenda de 2 plantes',
        bedrooms: '2 habitacions luminoses i còmodes',
        bed1: 'Llit doble 150 cm',
        bed2: '2 llits individuals 90 cm',
        bathroom: '1 bany complet amb dutxa (planta superior)',
        toilet: '1 lavabo (planta baixa)',
        kitchen: 'Cuina totalment equipada amb forn i rentaplats',
        living: 'Menjador-saló espaiós amb Smart TV de 50" i WiFi',
        garden: 'Jardí privat amb barbacoa',
        jacuzzi: 'Jacuzzi climatitzat',
        pool: 'Accés directe a piscina comunitària (compartida amb 4 cases)',
        parking: 'Pàrquing privat gratuït a la vivenda',
      },
      services: {
        maxGuests: 'Màx. 4 persones',
        wifi: 'Wi-Fi gratuït',
        noSmoking: 'Prohibit fumar a l’allotjament',
        noPets: 'No s’accepten animals',
      },
      areaInfo: `La casa es troba en una zona tranquil·la de Miami Platja. Supermercat a 9 min a peu (600 m). Bar, menjar per emportar i restaurant a les proximitats. Platja a uns 20 min a peu. Ideal per unes vacances relaxades a la Costa Daurada.`,
      maxGuests: 4,
      floors: 2,
      checkIn: 'Des de les 16:00 h',
      checkOut: 'Fins a les 11:00 h',
      license: 'HUTT-061296',
      vuc: 'ESFCTU00004303200013226400000000000000000',
    },
    booking: {
      checkInTitle: 'Horari d’entrada (Check-in)',
      checkOutTitle: 'Horari de sortida (Check-out)',
      checkInTime: 'Des de les 16:00 h.',
      checkOutTime: 'Fins a les 11:00 h.',
      checkInNote:
        'Per peticions especials, consulteu disponibilitat des de la secció de contacte o als comentaris en fer la reserva.',
      reservationTitle: 'Formalització de la reserva',
      reservationSteps: `Seleccioneu les dates desitjades; el sistema mostrarà la disponibilitat. Indiqueu el nombre d’adults i nens, reviseu l’import i continueu amb "Reservar". Completeu els camps i confirmeu amb "Confirmar reserva". Rebreu un correu de confirmació.`,
      cancellationTitle: 'Cancel·lacions',
      cancellationText: 'Les condicions de cancel·lació s’indiquen en el moment de la reserva i al correu de confirmació.',
      depositTitle: 'Fiança',
      depositText:
        'No es requereix fiança prèvia. Com a garantia del bon ús, en finalitzar l’estada es revisarà l’allotjament i es podrà efectuar el càrrec per desperfectes a la targeta associada a la reserva.',
      checkInProcessTitle: 'Entrada (Check-in)',
      checkInProcessText: `Uns dies abans de l’arribada, el nostre servei de check-in contactarà per telèfon per facilitar l’accés i la zona d’aparcament. Rebreu un correu per al check-in en línia i haureu d’introduir les dades de tots els hostes adults (registre obligatori).`,
      checkOutProcessTitle: 'Sortida (Check-out)',
      checkOutProcessText:
        'L’hora màxima de sortida és les 11:00 h. Després de l’estada es revisarà l’allotjament i es podrà carregar a la targeta per danys o manca de material.',
      rulesTitle: 'Normativa i restriccions',
      rules: [
        'Es poden allotjar nens de qualsevol edat.',
        'Prohibit fumar a tot l’allotjament.',
        'No s’accepten animals.',
        'No es permeten festes, comiats de solter/soltera o esdeveniments similars.',
        'És obligatori respectar l’apartament, mobiliari i instal·lacions.',
        'No es permet allotjar més persones de les indicades a la reserva.',
        'No ens fem responsables del robatori o pèrdua d’objectes personals. No deixeu objectes de valor visibles.',
        'L’ús del Wi-Fi és responsabilitat exclusiva del client.',
      ],
      licenseNote:
        'Allotjament inscrit al Registre de Turisme de Catalunya, d’acord amb la normativa de vivendes d’ús turístic.',
    },
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type ApartamentosLocale = (typeof apartamentos)[Locale];
