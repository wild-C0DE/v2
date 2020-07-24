import { Columns } from 'ngx-easy-table';

export interface Company {
  phone: string;
  age: number;
  address?: { street: string; number?: number };
  company: string;
  name: string;
  isActive: boolean;
  date?: string;
  level?: string;
  imgUrl?: string;
}

export const columns: Columns[] = [
  { key: 'phone', title: 'Phone' },
  { key: 'age', title: 'Age' },
  { key: 'company', title: 'Company' },
  { key: 'name', title: 'Name' },
  { key: 'isActive', title: 'Active' },
];

export const data = [
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (949) 527-2108',
    age: 36,
    address: { street: 'Some street', number: 12 },
    company: 'KONGENE',
    name: 'Deanne Contreras',
    isActive: true,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (878) 515-3653',
    age: 32,
    address: { street: 'Tumblewood street', number: 12 },
    company: 'ISOSWITCH',
    name: 'Peggy Burke',
    isActive: false,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (844) 593-2360',
    age: 21,
    address: { street: 'East street', number: 12 },
    company: 'HIVEDOM',
    name: 'Josephine Reilly',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (800) 413-3813',
    age: 24,
    address: { street: 'West street', number: 12 },
    company: 'EMERGENT',
    name: 'Phillips Fry',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (934) 551-2224',
    age: 20,
    address: { street: 'North street', number: 12 },
    company: 'ZILLANET',
    name: 'Valentine Webb',
    isActive: false,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (841) 479-3920',
    age: 30,
    address: { street: 'Buffalo street', number: 12 },
    company: 'TYPHONICA',
    name: 'Poole Dodson',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (998) 546-2953',
    age: 37,
    address: { street: 'Onorato street', number: 12 },
    company: 'COLAIRE',
    name: 'Marie Molina',
    isActive: false,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (811) 511-2927',
    age: 31,
    address: { street: 'Ontario street', number: 12 },
    company: 'OMNIGOG',
    name: 'Monica Frazier',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (967) 504-3593',
    age: 35,
    address: { street: 'Canada street', number: 12 },
    company: 'ENERVATE',
    name: 'Kinney Logan',
    isActive: true,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (902) 500-3665',
    age: 28,
    address: { street: 'Southeast street', number: 12 },
    company: 'CALCULA',
    name: 'Wilson Hatfield',
    isActive: true,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (933) 565-2698',
    age: 29,
    address: { street: 'Upper Terrace street', number: 12 },
    company: 'GINK',
    name: 'Trevino Casey',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (939) 530-3189',
    age: 34,
    address: { street: 'Dacota street', number: 12 },
    company: 'MARKETOID',
    name: 'Scott Barker',
    isActive: true,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (949) 600-2827',
    age: 29,
    address: { street: '5th street', number: 12 },
    company: 'MATRIXITY',
    name: 'Sheree James',
    isActive: true,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (833) 559-2128',
    age: 35,
    address: { street: 'EastNorth street', number: 12 },
    company: 'LETPRO',
    name: 'Kristen Whitehead',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (923) 480-2195',
    age: 20,
    address: { street: 'Oak street', number: 12 },
    company: 'HOMETOWN',
    name: 'Norma Rush',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (967) 573-3873',
    age: 35,
    address: { street: 'Australia street', number: 12 },
    company: 'EWEVILLE',
    name: 'Merrill Allen',
    isActive: true,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (985) 404-2360',
    age: 30,
    address: { street: 'NYC street', number: 12 },
    company: 'PORTALINE',
    name: 'Claudia Sawyer',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (907) 406-2333',
    age: 27,
    address: { street: 'Gate street', number: 12 },
    company: 'VIRVA',
    name: 'Craig Herrera',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (954) 412-3881',
    age: 37,
    address: { street: 'Southeast', number: 12 },
    company: 'VINCH',
    name: 'Peterson Johns',
    isActive: false,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (882) 527-2652',
    age: 25,
    address: { street: 'Lynn', number: 12 },
    company: 'GYNKO',
    name: 'Gordon Rutledge',
    isActive: false,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (884) 587-2850',
    age: 20,
    address: { street: 'Engine', number: 12 },
    company: 'COMCUR',
    name: 'Patton Mcbride',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (802) 562-2467',
    age: 35,
    address: { street: 'Queen street', number: 12 },
    company: 'EARTHPURE',
    name: 'Trudy Camacho',
    isActive: false,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (873) 421-3625',
    age: 38,
    address: { street: 'King street', number: 12 },
    company: 'ARCHITAX',
    name: 'Myles Blair',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (901) 502-3536',
    age: 36,
    address: { street: 'First st.', number: 12 },
    company: 'CANOPOLY',
    name: 'Josefa Foley',
    isActive: true,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (985) 524-3581',
    age: 36,
    address: { street: 'Second', number: 12 },
    company: 'ENTOGROK',
    name: 'Kathy Barr',
    isActive: false,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (948) 492-2881',
    age: 40,
    address: { street: 'Third', number: 12 },
    company: 'CENTICE',
    name: 'Sybil Sears',
    isActive: false,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (815) 412-3123',
    age: 36,
    address: { street: '4th', number: 12 },
    company: 'ZANILLA',
    name: 'Moody Blevins',
    isActive: true,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (924) 594-3384',
    age: 31,
    address: { street: '5th', number: 12 },
    company: 'NAMEGEN',
    name: 'Kristine Ratliff',
    isActive: true,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (938) 550-3997',
    age: 30,
    address: { street: 'Sixth', number: 12 },
    company: 'MAGNEATO',
    name: 'Cooley Pitts',
    isActive: false,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (930) 593-3548',
    age: 30,
    address: { street: '7th', number: 12 },
    company: 'GEOFORMA',
    name: 'Haley Noble',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (995) 479-2495',
    age: 26,
    address: { street: '8th', number: 12 },
    company: 'LYRIA',
    name: 'Garner Owens',
    isActive: true,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (958) 410-2373',
    age: 24,
    address: { street: '9th', number: 12 },
    company: 'SOFTMICRO',
    name: 'Jody Reyes',
    isActive: true,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (835) 551-3617',
    age: 39,
    address: { street: '10th', number: 12 },
    company: 'CORPORANA',
    name: 'Patterson Chavez',
    isActive: true,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (872) 561-3479',
    age: 20,
    address: { street: '11th', number: 12 },
    company: 'BOINK',
    name: 'Ellen Nielsen',
    isActive: true,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (935) 535-2958',
    age: 26,
    address: { street: '12th', number: 12 },
    company: 'PETICULAR',
    name: 'Serena Graves',
    isActive: false,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (921) 426-2277',
    age: 24,
    address: { street: '13th', number: 12 },
    company: 'SHOPABOUT',
    name: 'Emily Bruce',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (875) 474-3800',
    age: 29,
    address: { street: '14th', number: 12 },
    company: 'COMCUBINE',
    name: 'Fanny Swanson',
    isActive: true,
    level: 'Medium',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (893) 536-2201',
    age: 31,
    address: { street: '15th', number: 12 },
    company: 'ZEDALIS',
    name: 'Sellers Velez',
    isActive: false,
    level: 'High',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (927) 460-3553',
    age: 23,
    address: { street: '16th', number: 12 },
    company: 'SUREMAX',
    name: 'Mónica Glover',
    isActive: false,
    level: 'Low',
  },
  {
    imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    phone: '+1 (949) 528-2108',
    age: 31,
    address: { street: 'Some street', number: 12 },
    company: 'DOE',
    name: 'John Doe',
    isActive: true,
    level: 'Low',
  },
];