import HeroSection from "../components/heroSection/HeroSection";
import heroImage from "../Gittes_Glamping_Assets/image_01.jpg";

const Stay = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        headerTitle="Vores Ophold"
        title="Vi har ophold til en hver smag"
        subtitle="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og 
        afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at 
        genoplade batterierne i en naturskøn indstilling.
        Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det 
        fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
      />
    </div>
  );
};

export default Stay;
