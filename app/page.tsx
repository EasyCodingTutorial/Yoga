import Wrapper from "@/Components/Wrapper/Wrapper";
import styles from "./page.module.css";

export const metadata = {
  title: "Home - Easy Yoga"
}


// For Components
import { MainBg } from "@/Components/MainBg/MainBg";
import { OurClasses } from "@/Components/OurClasses/OurClasses";
import { SecondHeader } from "@/Components/SecondHeader/SecondHeader";
import { Benefits } from "@/Components/Benefits/Benefits";
import { ShopNow } from "@/Components/ShopNow/ShopNow";

export default function Home() {
  return (
    <>
      <MainBg
        ImgUrl="/assets/Home.jpg"
        ImgAlt="Home Image"
        h6Text="Easy Yoga..."
        h5Text="Inner Calm, Outer Strength."
        LinkText="View Details"
        LinkTo=""
      />

      <Wrapper>
        {/* For Quote */}
        <div className={styles.Quote}>
          <h6>Transform Your Body, Empower Your Mind!</h6>
        </div>
        {/* For Our Classes */}
        <OurClasses />
      </Wrapper>


      {/* For Second Header */}
      <SecondHeader />


      <Wrapper>
        <Benefits />

        <ShopNow />

      </Wrapper>



    </>
  );
}
