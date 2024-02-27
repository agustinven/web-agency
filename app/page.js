import CommentSwiper from "@/components/CommentSwiper";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Letstalk from "@/components/Letstalk";
import Message from "@/components/Message";
import OurServices from "@/components/OurServices";
import Footer from "@/components/Footer"
import { FloatingWhatsApp } from "../components/FloattingWhatsapp";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CommentSwiper />
      <OurServices />
      <Message />
      <DevelopmentProcess />
      <Letstalk />
      <Footer/>
      <FloatingWhatsApp
          phoneNumber="3512535710"
          accountName="Corylus"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
    </main>
  );
}
