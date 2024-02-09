import CommentSwiper from "@/components/CommentSwiper";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CommentSwiper />
      <OurServices />
      <Message />
      <DevelopmentProcess />
    </main>
  );
}
