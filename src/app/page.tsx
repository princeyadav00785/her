// import { Navbar } from "./Components/ui/navbar";
// import { LampDemo } from "./Components/ui/lamp";
import { MacbookScroll } from "./Components/ui/macbook-scroll";
import Footer from "./Components/ui/footer";
import { CardStack } from "./Components/ui/card-stack";
import { Spotlight } from "./Components/ui/Spotlight";
import { FloatingNav } from "./Components/ui/floating-navbar";
import { HeroParallax } from "./Components/ui/hero";
import { StickyScroll } from "./Components/ui/sticky-scrool-section";
// import { Tabs } from "./Components/ui/tabs";
import { InfiniteMovingCards } from "./Components/ui/infinte-moving-cards";
import { TracingBeam } from "./Components/ui/tracing-beams";
// import { CardContainer } from "./Components/ui/3d-card";
// import { BackgroundGradient } from "./Components/ui/Background-gradient";


// const tabs: Tab[] = [
//   {
//     title: "Tab 1",
//     value: "tab1",
//     content: "This is the content for Tab 1.",
//   },
//   {
//     title: "Tab 2",
//     value: "tab2",
//     content: (
//       <div>
//         <h2>This is Tab 2</h2>
//         <p>This is some dynamic content for Tab 2.</p>
//       </div>
//     ),
//   },
//   {
//     title: "Tab 3",
//     value: "tab3",
//   },
// ];

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  // { name: 'Services', link: '/services' },
  // Add more navigation items as needed
];
const content = [
  {
    title: 'Moment with Dad',
    description: 'This beautiful moment captured on her birthday shows her spending quality time with her dad. They share a special bond filled with love, laughter, and cherished memories. This picture serves as a reminder of the warmth and joy of family gatherings.',
    image: '/assests/i2.jpg',
  },  
  {
    title: 'Special Moment with Dad',
    description: 'This is a special moment captured with Dad on her birthday. They are smiling and enjoying each other\'s company, creating memories that will last a lifetime.',
    image: '/assests/i1.jpg',
  },
  {
    title: 'Modern Dress Look Moment',
    description: 'In this picture, she is showcasing her modern dress look. The dress is elegant and stylish, perfectly complementing her personality. She radiates confidence and charm, making heads turn wherever she goes.',
    image: '/assests/i4.jpg',
  },
  {
    title: 'Lehanga Look❤️',
    description: 'In this stunning photo, she showcases her elegant Lehanga look with grace and poise. The vibrant colors and intricate details of her attire complement her radiant smile, making her the center of attention wherever she goes.',
    image: '/assests/i30.jpg',
  },
  {
    title: 'Desi Jatni Look',
    description: 'Dressed in traditional attire, she exudes charm and confidence in her Desi Jatni look. With a perfect blend of modern style and ethnic grace, she captivates hearts and leaves a lasting impression wherever she ventures.',
    image: '/assests/i26.jpg',
  },
  {
    title: 'Just her flexing her\'s hair',
    description: 'This candid snapshot captures her in a carefree moment as she flaunts her beautiful hair. Her natural elegance shines through, adding a touch of allure to her captivating aura.',
    image: '/assests/i24.jpg',
  },
  {
    title: 'Preetiest Smile',
    description: 'Her smile lights up the frame in this captivating photograph, radiating warmth and happiness. With her infectious joy, she effortlessly spreads positivity and brightens the lives of those around her.',
    image: '/assests/i18.jpg',
  },  
  {
    title: 'Lehanga Look❤️',
    description: 'This stunning lehenga ensemble showcases her elegance and grace. The intricate embroidery and vibrant colors reflect her vibrant personality and timeless style. With her radiant smile, she steals the spotlight wherever she goes.',
    image: '/assests/i30.jpg',
  },
  {
    title: 'Desi Jatni Look',
    description: 'Dressed in traditional attire, she exudes charm and confidence in this desi look. Her traditional attire reflects her cultural roots and celebrates the rich heritage of her homeland. With every step, she embodies grace and tradition.',
    image: '/assests/i26.jpg',
  },
  {
    title: 'Just her flexing her hair',
    description: 'In this candid moment, she effortlessly flaunts her beautiful hair with a playful smile. Her carefree spirit and natural beauty shine through, making this picture a true reflection of her joyful personality.',
    image: '/assests/i24.jpg',
  },
  {
    title: 'Preetiest Smile',
    description: 'Her infectious smile lights up the room and warms the hearts of all who see it. With eyes full of joy and a radiant smile, she brightens even the gloomiest of days. Her smile is a reminder of the simple yet profound happiness found in life.',
    image: '/assests/i18.jpg',
  },  
  {
    title: '',
    description: '',
    image: '/assests/i6.jpg',
  },
];



const products = [
  {
    title: '',
    link: '',
    thumbnail: '/assests/i3.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i2.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i1.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i4.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i5.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i6.jpg',
  },
  {
    title: 'My fav❤️',
    link: '',
    thumbnail: '/assests/i14.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i8.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i9.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i10.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i11.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i12.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i13.jpg',
  },
  {
    title: '',
    link: '',
    thumbnail: '/assests/i14.jpg',
  }, {
    title: '',
    link: '',
    thumbnail: '/assests/i15.jpg',
  },
];



const items: {
  title: string;
  image: string;
}[] = [
  {
    title: "Her fav❤️",
    image: "/assests/i1.jpg",
  },
  {
    title: "Her fav❤️",
    image: "/assests/i2.jpg",
  },
  {
    title: "Saree Look",
    image: "/assests/i32.jpg",
  },
  {
    title: "Lehanga Look❤️",
    image: "/assests/i31.jpg",
  },
  {
    title: "Desi Look❤️",
    image: "/assests/i26.jpg",
  },
  {
    title: "Dulhan Look❤️",
    image: "/assests/i30.jpg",
  },
  {
    title: "Suit Look❤️",
    image: "/assests/i11.jpg",
  },
  {
    title: "Heroine Look❤️",
    image: "/assests/i9.jpg",
  },
  {
    title: "Precious Smile❤️",
    image: "/assests/i17.jpg",
  },
  {
    title: "Modern Girl❤️",
    image: "/assests/i4.jpg",
  },

];
interface Card {
  id: number;
  name: string;
  designation: string;
  content: string;
}

const cards: Card[] = [
  {
    id: 1,
    name: "",
    designation: "",
    content: "Her kindness and compassion know no bounds, touching the lives of everyone she meets. She goes out of her way to make others feel valued and appreciated, leaving a lasting impression of warmth and sincerity.",
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: "She has a heart of gold, always ready to lend a helping hand and spread positivity. Her genuine care for others shines through in every interaction, making her a pillar of support and encouragement.",
  },
  {
    id: 3,
    name: "",
    designation: "",
    content: "Her inner beauty radiates outward, making her presence a source of joy and inspiration. She exudes grace and elegance, captivating everyone with her charm and humility.",
  },
  {
    id: 4,
    name: "",
    designation: "",
    content: "She carries herself with poise and confidence, embodying grace in every step. Her strength and resilience are evident in the way she faces challenges with determination and grace.",
  },
  {
    id: 5,
    name: "",
    designation: "",
    content: "Her smile lights up the darkest of days, bringing warmth and comfort to those around her. Her infectious laughter fills the room with happiness, lifting spirits and brightening moods.",
  },
  {
    id: 6,
    name: "",
    designation: "",
    content: "She is a beacon of positivity, spreading laughter and happiness wherever she goes. Her optimism is contagious, inspiring others to embrace life with enthusiasm and joy.",
  },
  {
    id: 7,
    name: "",
    designation: "",
    content: "Her beauty is not just skin deep; it emanates from the depths of her soul. Her inner radiance shines through, illuminating the world with her grace, kindness, and compassion.",
  },
  {
    id: 8,
    name: "",
    designation: "",
    content: "She is a true gem, cherished by all who have the privilege of knowing her. Her presence brings comfort and joy to those around her, enriching their lives with her kindness and love.",
  },
];



export default function Home() {
  
  return (
    <main className="">
      {/* <Navbar /> */}
      <Spotlight/>
      <TracingBeam>{null}</TracingBeam>
      <FloatingNav navItems={navItems}/>
      <HeroParallax products={products}/>
      <Spotlight/>
      <MacbookScroll/>
      {/* <LampDemo /> */}
      <StickyScroll content={content}/>
      {/* <Tabs tabs={tabs}/> */}
      <InfiniteMovingCards items={items} />
      {/* <Spotlight/> */}
      <CardStack items={cards}/>
      {/* <BackgroundGradient/> */}
      {/* <CardContainer/> */}
      <Footer/>
     
    </main>
  );
}
