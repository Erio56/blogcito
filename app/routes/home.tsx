import type { Route } from "./+types/home";
import BlogScene from "../pages/burbujitas/BlogScene";
import ScrollBubbleScene from "~/pages/scroll/ScrollBubbleScene";
import MiniBiography from "~/pages/miniBio/MiniBiography";
import CatsScene from "~/pages/gatitas/CatsScene";
import LoveScene from "~/pages/amari/LoveScene";
import RandomMediaScene from "~/pages/randomMedia/RandomMediaScene";
import Wip from "~/pages/wip/wip";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <MiniBiography/>
    <BlogScene />;
    <ScrollBubbleScene/>
    <CatsScene/>
    <LoveScene />
    <Wip/>
    {/* <RandomMediaScene/> */}
  </> 
}
