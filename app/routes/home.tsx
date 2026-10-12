import type { Route } from "./+types/home";
import BlogScene from "../pages/burbujitas/BlogScene";
import ScrollBubbleScene from "~/pages/scroll/ScrollBubbleScene";
import MiniBiography from "~/pages/miniBio/MiniBiography";
import CatsScene from "~/pages/gatitas/CatsScene";
import LoveScene from "~/pages/amari/LoveScene";
import RandomMediaScene from "~/pages/randomMedia/RandomMediaScene";
import Wip from "~/pages/wip/wip";

export function meta({}: Route.MetaArgs) {
  const description =
    "A personal corner of the internet by Erio, filled with music, anime, games, and little thoughts.";

  return [
    { title: "Erio" },
    { name: "author", content: "Erio" },
    { name: "description", content: description },
    { property: "og:title", content: "Erio" },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ];
}

export default function Home() {
  return <>
    <MiniBiography/>
    <BlogScene />
    <ScrollBubbleScene/>
    <CatsScene/>
    <LoveScene />
    <Wip/>
    {/* <RandomMediaScene/> */}
  </> 
}
