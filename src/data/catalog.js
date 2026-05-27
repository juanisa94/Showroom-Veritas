// Catálogo Real Lotes 1 y 2 - Showroom Veritas
import prenda1 from '../assets/prenda_1.jpg';
import prenda2 from '../assets/prenda_2.jpg';
import prenda3 from '../assets/prenda_3.jpg';
import prenda4 from '../assets/prenda_4.jpg';
import prenda5 from '../assets/prenda_5.jpg';
import prenda6 from '../assets/prenda_6_falda_shein.jpg';
import prenda7 from '../assets/prenda_7_zapatos_marian.jpg';
import prenda8 from '../assets/prenda_8_vestido_satinado_zara.jpg';
import prenda9 from '../assets/prenda_9_vestido_mango.jpg';
import prenda10 from '../assets/prenda_10_falda_zara.jpg';

const PENDING_VERIFIED_DETAILS =
  'Descripción y precio pendientes de verificación directa en Vinted. Abra el anuncio para revisar los detalles finales antes de decidir.'

export const CATALOG = [
  {
    id: 1,
    name: "Calcetines Adidas Deportivos",
    size: "Talla Única",
    description: "Unos calcetines blancos clásicos de la marca Adidas, conocidos por su suavidad y gran durabilidad. Ideales para el deporte o el confort diario.",
    price: null,
    imageUrl: prenda1,
    vintedUrl: "https://www.vinted.es/items/7695230003-calcetines-addidas"
  },
  {
    id: 2,
    name: "Bermudas Bershka Denim",
    size: "Ver en Vinted",
    description: "Unas bermudas vaqueras en tono azul clásico de Bershka. Su tejido es resistente y cómodo, ideal para disfrutar de las aventuras diarias con total libertad.",
    price: null,
    imageUrl: prenda2,
    vintedUrl: "https://www.vinted.es/items/6881995222-bermudas-breshka"
  },
  {
    id: 3,
    name: "Vestido Lefties Floral",
    size: "Ver en Vinted",
    description: "Este dulce vestido de Lefties con estampado floral es una opción encantadora y ligera. Perfecto para esos paseos especiales donde buscamos frescura.",
    price: null,
    imageUrl: prenda3,
    vintedUrl: "https://www.vinted.es/items/7064482743-vestido-lefties"
  },
  {
    id: 4,
    name: "Vestido Zara Animal Print",
    size: "Ver en Vinted",
    description: "Un vestido de Zara con un vibrante estampado animal sobre fondo azul. Su diseño es moderno y fluido, pensado para destacar con elegancia.",
    price: null,
    imageUrl: prenda4,
    vintedUrl: "https://www.vinted.es/items/7154734995-vestido-zara"
  },
  {
    id: 5,
    name: "Vestido Negro Zara Efecto Piel",
    size: "Ver en Vinted",
    description: "Una pieza excepcional de Zara: un vestido negro con efecto piel y cinturón a juego. Al ser totalmente nuevo, conserva toda su distinción.",
    price: null,
    imageUrl: prenda5,
    vintedUrl: "https://www.vinted.es/items/7784865024-vestido-negro-zara"
  },
  {
    id: 6,
    name: "Falda Shein",
    size: "Ver en Vinted",
    description: PENDING_VERIFIED_DETAILS,
    price: null,
    imageUrl: prenda6,
    vintedUrl: "https://www.vinted.es/items/8980510269-falda-shein"
  },
  {
    id: 7,
    name: "Zapatos de tacón beige Marian",
    size: "Ver en Vinted",
    description: PENDING_VERIFIED_DETAILS,
    price: null,
    imageUrl: prenda7,
    vintedUrl: "https://www.vinted.es/items/8980499263-zapatos-de-tacon-beige-marian"
  },
  {
    id: 8,
    name: "Vestido satinado Zara",
    size: "Ver en Vinted",
    description: PENDING_VERIFIED_DETAILS,
    price: null,
    imageUrl: prenda8,
    vintedUrl: "https://www.vinted.es/items/8980452086-vestido-satinado-zara"
  },
  {
    id: 9,
    name: "Vestido Mango",
    size: "Ver en Vinted",
    description: PENDING_VERIFIED_DETAILS,
    price: null,
    imageUrl: prenda9,
    vintedUrl: "https://www.vinted.es/items/8980434601-vestido-mango"
  },
  {
    id: 10,
    name: "Falda Zara",
    size: "Ver en Vinted",
    description: PENDING_VERIFIED_DETAILS,
    price: null,
    imageUrl: prenda10,
    vintedUrl: "https://www.vinted.es/items/8936420915-falda-zara"
  }
];
