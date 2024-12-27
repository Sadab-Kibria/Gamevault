import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


import {Blocks} from "lucide-react"
import {Computer} from "lucide-react"
import {ClipboardList} from "lucide-react"
import {Gamepad2} from "lucide-react"
import {BadgeDollarSign} from "lucide-react"
import {UserCog} from "lucide-react"

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Kaizen",
    company: "GameForge Hub",
    image: user1,
    text: "I can easily upload my clips, track my stats, and share my highlights with friends. It's like my personal gaming hub!",
  },
  {
    user: "Aisha",
    company: "EpicByte Gaming",
    image: user2,
    text: "The detailed performance stats helped me improve my gameplay and climb the leaderboards faster!",
  },
  {
    user: "Poeprose",
    company: "LevelUp Arena",
    image: user3,
    text: "Uploading and sharing my best gaming moments only takes seconds. My friends love seeing my highlights!",
  },
  {
    user: "Ansel",
    company: "ShadowCore Interactive",
    image: user4,
    text: "The stats tracking and performance insights are top-notch. I finally see how I'm improving over time.",
  },
  {
    user: "Hela",
    company: "NextGen Gamers",
    image: user5,
    text: "I found new clans, shared my gameplay, and connected with players around the world. It’s been awesome!",
  },
  {
    user: "Marshal",
    company: "PixelPlay Studios",
    image: user6,
    text: "The platform makes it easy to highlight my top clips and engage with my audience. A game-changer!",
  },
];

export const features = [
  {
    icon: <Blocks />,
    text: "Dynamic Game Library",
    description:
      "A detailed game library with categories, filters, and personalized recommendations to help users discover new games based on their interests.",
  },
  {
    icon: <Computer />,
    text: "Live Community Hub",
    description:
      "A space for forums, live discussions, sharing fan art, participating in polls, and engaging with other gamers or developers.",
  },
  {
    icon: <ClipboardList />,
    text: "Leaderboards & Tournaments",
    description:
      "Real-time leaderboards and a schedule for tournaments where players can track rankings and register for competitive events.",
  },
  {
    icon: <Gamepad2 />,
    text: "Game Reviews & Guides",
    description:
      "In-depth reviews, walkthroughs, and strategy guides created by experts and gamers, including video tutorials and FAQs.",
  },
  {
    icon: <BadgeDollarSign />,
    text: "Game Deals and Marketplace",
    description:
      "A section showcasing exclusive discounts, upcoming releases, and featured in-game purchases like skins and weapons.",
  },
  {
    icon: <UserCog />,
    text: "Interactive Profiles & Gains",
    description:
      "Custom profiles displaying favorite games, gaming stats, and badges earned through achievements and site activities.",
  },
];

export const checklistItems = [
  {
    title: "Showcase Your Best Plays",
    description:
      "Upload and share your epic gameplay moments with friends and the gaming community.",
  },
  {
    title: "Track Your Stats",
    description:
      "Monitor your performance, analyze your progress, and compare stats across games.",
  },
  {
    title: "Connect with Gamers",
    description:
      "Build your profile, share highlights, and challenge others to level up together.",
  },
  {
    title: "Instant Sharing Made Simple",
    description:
      "Share your achievements, top scores, and gameplay clips across platforms in just a click.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Upload up to 5 clips",
      "View basic stats",
      "Share with friends",
      "Access leaderboards",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Upload unlimited clips",
      "Unlock detailed stats",
      "Customize gamer profile",
      "Join communities",
    ],
  },
  {
    title: "Enterprise",
    price: "$150",
    features: [
      "Get real-time analytics",
      "Feature on leaderboards",
      "Early access to events",
      "Priority support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Blog " },
  { href: "#", text: "Help Center" },
  { href: "#", text: "Guides" },
  { href: "#", text: "API Documentation" },
  { href: "#", text: "Terms & Privacy" },
];

export const platformLinks = [
  { href: "#", text: "Upload Gameplay" },
  { href: "#", text: "Track Stats" },
  { href: "#", text: "Leaderboards" },
  { href: "#", text: "Performance Analysis" },
  { href: "#", text: "Feature Highlights" },
];

export const communityLinks = [
  { href: "#", text: "Forums" },
  { href: "#", text: "Clans" },
  { href: "#", text: "Events" },
  { href: "#", text: "Social Hub" },
  { href: "#", text: "Feedback" },
];
