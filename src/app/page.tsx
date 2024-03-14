import { Navbar } from "./Components/ui/navbar";
import { LampDemo } from "./Components/ui/lamp";
import { MacbookScroll } from "./Components/ui/macbook-scroll";
import Footer from "./Components/ui/footer";
import { CardStack } from "./Components/ui/card-stack";
import { Spotlight } from "./Components/ui/Spotlight";
import { FloatingNav } from "./Components/ui/floating-navbar";
import { HeroParallax } from "./Components/ui/hero";
import { StickyScroll } from "./Components/ui/sticky-scrool-section";
import { Tabs } from "./Components/ui/tabs";
import { InfiniteMovingCards } from "./Components/ui/infinte-moving-cards";


const tabs: Tab[] = [
  {
    title: "Tab 1",
    value: "tab1",
    content: "This is the content for Tab 1.",
  },
  {
    title: "Tab 2",
    value: "tab2",
    content: (
      <div>
        <h2>This is Tab 2</h2>
        <p>This is some dynamic content for Tab 2.</p>
      </div>
    ),
  },
  {
    title: "Tab 3",
    value: "tab3",
  },
];

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  // Add more navigation items as needed
];
const content = [
  {
    title: 'Section 1',
    description: 'Description for section 1',
    content: <p>This is the content for section 1.</p>,
  },
  {
    title: 'Section 2',
    description: 'Description for section 2',
    content: <div>This is the content for section 2.</div>,
  },
  {
    title: 'Section 3',
    description: 'Description for section 2',
    content: <div>This is the content for section 3.</div>,
  }, {
    title: 'Section 4',
    description: 'Description for section 2',
    content: <div>This is the content for section 4.</div>,
  },
 
];

const products = [
  {
    title: 'Product 1',
    link: '/product-1',
    thumbnail: '/product-1-thumbnail.jpg',
  },
  {
    title: 'Product 2',
    link: '/product-2',
    thumbnail: '/product-2-thumbnail.jpg',
  },
  
];
const items: {
  quote: string;
  name: string;
  title: string;
}[] = [
  {
    quote: "This is the first quote",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote: "Another inspiring quote",
    name: "Jane Smith",
    title: "UI/UX Designer",
  },
  {
    quote: "One more quote for good measure",
    name: "Alex Johnson",
    title: "Product Manager",
  },
];
const cards: Card[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    content: "This is some text content for the first card.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "UI/UX Designer",
    content: (
      <div>
        <h2>This is a heading</h2>
        <p>This is a paragraph.</p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Alex Johnson",
    designation: "Product Manager",
    imageUrl: "https://example.com/image.jpg",
  },
];

export default function Home() {
  
  return (
    <main className="">
      {/* <Navbar /> */}
      <FloatingNav navItems={navItems}/>
      <HeroParallax products={products}/>
      <Spotlight/>
      <MacbookScroll/>
      {/* <Spotlight/> */}
      <LampDemo />
      <StickyScroll content={content}/>
      {/* <Tabs tabs={tabs}/> */}
      <InfiniteMovingCards items={items} />
      <CardStack items={cards}/>
      <Footer/>
     
    </main>
  );
}
