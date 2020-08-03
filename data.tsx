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
    label: "Events",
    value: "event",
  },
  {
    label: "Streams",
    value: "stream",
  },
];

export const cards: Array<CardProps> = [
  {
    title: "Unlocking LinkedIn",
    description: `Do you look at fancy profiles on LinkedIn that seem to have it all and feel intimidated? Do you look at fancy profiles on LinkedIn that seem to have it all and feel intimidated?`,
    date: 1596476520000,
    new: false,
    link: "https://google.com",
    tags: [],
  },
  {
    title: "Bob",
    description: "Deserunt sint ut id ea do eu.",
    date: 1596496067000,
    new: true,
    link: "",
    tags: [],
  },
  {
    title: "Picky",
    description: "Deserunt sint ut id ea do eu.",
    date: 1596494037000,
    new: true,
    link: "",
    tags: [],
  },
].sort((a, b) => {
  return b.date - a.date;
});
