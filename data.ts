import { PillProps, CardProps } from "./pages";

export const message = "Psst... something is cooking!";

export const pills: Array<PillProps> = [
  {
    label: "Everything",
    value: "",
  },
  {
    label: "Blogs",
    value: "blog",
  },
  {
    label: "How-tos",
    value: "how-to",
  },
  {
    label: "Streams",
    value: "stream",
  },
  {
    label: "Events",
    value: "event",
  },
  {
    label: "Catch us",
    value: "catch-us",
  },
];

export const cards: Array<CardProps> = [
  {
    title: "How is COVID treating you?",
    description: `Seerat Parmar`,
    date: 1596694211000,
    new: true,
    link: "https://medium.com/srmkzilla/how-is-covid-treating-you-d06e345d9746",
    tags: ["blog"],
  },
  {
    title: "Taiwan vs Coronavirus",
    description: "Aditya Mukherjee",
    date: 1595657411000,
    new: false,
    link: "https://medium.com/srmkzilla/taiwan-vs-coronavirus-41aa23e3f61a",
    tags: ["blog"],
  },
  {
    title: "Online Market Amidst Lockdown",
    description: "Krishna Priya",
    date: 1595484611000,
    new: false,
    link:
      "https://medium.com/srmkzilla/online-market-amidst-lockdown-7dbb2f9e6da7",
    tags: ["blog"],
  },
  {
    title: "Using a Java Snippet from inside of Node.js",
    description: "Aniruddha Chatterjee",
    date: 1594188611000,
    new: true,
    link:
      "https://medium.com/srmkzilla/using-a-java-snippet-from-inside-of-node-js-fe0366f48ee4",
    tags: ["blog"],
  },
  {
    title: "We write",
    description: "Explore blogs",
    date: 1594188511000,
    new: false,
    link: "https://medium.com/srmkzilla",
    tags: ["blog"],
  },
  {
    title: "Unlocking LinkedIn",
    description:
      "Presenting to you Unlocking LinkedIn, your gateway to a stupendous portfolio.",
    date: 1596780611000,
    new: true,
    link: "https://youtu.be/S_xUuRrMAPQ",
    tags: ["stream"],
  },
  {
    title: "MozoDesign Chillouts",
    description:
      "Why don't you join us in making this quarantine period productive by learning some designing lessons?",
    date: 1590041411000,
    new: false,
    link: "https://youtube.com/watch?v=YXa2QJ0hp1Q",
    tags: ["stream"],
  },
  {
    title: "Introduction to Node.js",
    description: "Get started with Node.js",
    date: 1559542211000,
    new: false,
    link: "https://youtu.be/FlKPJHY0SIQ",
    tags: ["how-to"],
  },
  {
    title: "Node.js Sessions",
    description: "Learn the basics of Node.js",
    date: 1559542211000,
    new: false,
    link:
      "https://www.youtube.com/playlist?list=PLCo0moeBNij_fuTUCh7JmkIz0Ek5P8zxS",
    tags: ["how-to"],
  },
  {
    title: "Timelapse – Starbucks – MozoDesign",
    description: "Illustrate the famous Starbucks cup",
    date: 1558591811000,
    new: false,
    link: "https://youtu.be/7MZLGtKp27s",
    tags: ["how-to"],
  },
  {
    title: "MozoDesign",
    description:
      "Explore the series and craft something great with Adobe Illustrator",
    date: 1558591811000,
    new: false,
    link:
      "https://www.youtube.com/playlist?list=PLCo0moeBNij9Lldzj8VZNR6s5NCULmzkH",
    tags: ["how-to"],
  },
  {
    title: "Explore our events",
    description: "Your gateway to all our events.",
    date: 1558591611000,
    new: false,
    link: "https://events.srmkzilla.net",
    tags: ["event"],
  },
  {
    title: "Facebook",
    description: "Find us on Facebook",
    date: 1594795924000,
    new: false,
    link: "https://facebook.com/srmkzilla",
    tags: ["catch-us"],
  },
  {
    title: "Instagram",
    description: "The official Instagram handle of SRMKZILLA",
    date: 1594795924000,
    new: false,
    link: "https://instagram.com/srmkzilla",
    tags: ["catch-us"],
  },
  {
    title: "LinkedIn",
    description: "Find us on LinkedIn",
    date: 1594795924000,
    new: false,
    link: "https://linkedin.com/company/srmkzilla",
    tags: ["catch-us"],
  },
  {
    title: "YouTube",
    description: "SRMKZILLA. Now on YouTube.",
    date: 1594795924000,
    new: true,
    link: "https://youtube.com/c/SRMKZILLA",
    tags: ["catch-us"],
  },
  {
    title: "Twitter",
    description: "The official Twitter handle of SRMKZILLA",
    date: 1594795924000,
    new: false,
    link: "https://twitter.com/SRMKZILLA_Club",
    tags: ["catch-us"],
  },
  {
    title: "Medium",
    description: "Monday musings by SRMKZILLA",
    date: 1594795924000,
    new: false,
    link: "https://medium.com/srmkzilla",
    tags: ["catch-us"],
  },
].sort((a, b) => {
  return b.date - a.date;
});
