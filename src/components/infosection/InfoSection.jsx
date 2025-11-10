import styles from "./infosection.module.css";
import gitteImage from "../../Gittes_Glamping_Assets/gitte.jpg";
import Button from "../button/Button";

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Kom og prøv glamping hos Gitte!</h2>

        <h4 className={styles.description}>
          Vi er stolte af at byde dig velkommen til Gitte's Glamping, hvor
          hjertevarme og omsorg møder naturens skønhed og eventyr. Vores
          dedikerede team, anført af Gitte selv, er her for at skabe den
          perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter
          at skabe minder og fordybelse, uanset om du besøger os som par,
          familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter
          og arrangementer, der passer til alle aldre og interesser. Udforsk
          naturen, slap af ved bålet, del historier med nye venner, eller find
          indre ro med vores wellnessaktiviteter.
        </h4>

        <div className={styles.imageContainer}>
          <img src={gitteImage} alt="Gitte" className={styles.gitteImage} />
        </div>

        <div className={styles.buttonContainer}>
          <Button buttonText="SE VORES OPHOLD" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
