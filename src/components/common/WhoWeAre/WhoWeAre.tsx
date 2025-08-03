import {FC} from "react";
import styles from './WhoWeAre.module.scss'
import WhoWeArePlane from '../../../assets/images/WhoWeArePlane.png';
import WhoWeAreCompetitive from '../../../assets/images/WhoWeAreCompetitive.png';
import WhoWeAreBooking from '../../../assets/images/WhoWeAreBooking.png';
import WhoWeAreGuide from '../../../assets/images/WhoWeAreGuide.png';
import WhoWeAreSupport from '../../../assets/images/WhoWeAreSupport.png';
import WhoWeAreUltimate from '../../../assets/images/WhoWeAreUltimate.png';
import {DefaultTitleLink} from "../DefaultTitleLink/DefaultTitleLink";
import {DefaultTitleName} from "../DefaultTitleName/DefaultTitleName";
import {DefaultButton} from "../DefaultButton/DefaultButton";
import Image from "next/image";


export const WhoWeAre: FC = () => {
    return (
        <div className={`content-width ${styles.whoWeAreContainer}`}>
            <div className={styles.whoWeAreContent}>
                <DefaultTitleLink titleLinkText={"Who We Are"}/>
                <DefaultTitleName titleName={"Why TripNext Is Best"}/>
                <div className={styles.whoWeAreContentLabel}>
                    <DefaultButton
                        buttonText={
                            <span className={styles.whoWeAreContentLabelText}>
      <span className={styles.title}>Worldwide Coverage</span><br/>
      <span className={styles.description}>Curabitur convallis enim atnora ullamcorper sagittis.</span>
    </span>
                        }
                        className={styles.whoWeAreLabelButton}
                        iconLeft={<Image src={WhoWeArePlane} alt="WhoWeArePlane" width={65} height={70}/>}
                    />
                    <DefaultButton
                        buttonText={
                            <span className={styles.whoWeAreContentLabelText}>
      <span className={styles.title}>Competitive Pricing</span><br/>
      <span className={styles.description}>Burabitur convallis enim atnora. Morbi
nug scelerisque for thana.</span>
    </span>
                        }
                        className={styles.whoWeAreLabelButton}
                        iconLeft={<Image src={WhoWeAreCompetitive} alt="WhoWeAreCompetitive" width={65} height={70}/>}
                    />
                    <DefaultButton
                        buttonText={
                            <span className={styles.whoWeAreContentLabelText}>
      <span className={styles.title}>Fast Booking</span><br/>
      <span className={styles.description}>Fermentum eitorx quis maximum Etiam
urnan posuere convallis.</span>
    </span>
                        }
                        className={styles.whoWeAreLabelButton}
                        iconLeft={<Image src={WhoWeAreBooking} alt="WhoWeAreBooking" width={65} height={70}/>}
                    />
                    <DefaultButton
                        buttonText={
                            <span className={styles.whoWeAreContentLabelText}>
      <span className={styles.title}>Guided Tours</span><br/>
      <span className={styles.description}>Pellentesque venenatis egestasoi diam
Proin velgorat elit porttitor metus
convallis.</span>
    </span>
                        }
                        className={styles.whoWeAreLabelButton}
                        iconLeft={<Image src={WhoWeAreGuide} alt="WhoWeAreGuide" width={65} height={70}/>}
                    />
                    <DefaultButton
                        buttonText={
                            <span className={styles.whoWeAreContentLabelText}>
      <span className={styles.title}>Best Support 24/7</span><br/>
      <span className={styles.description}>Sed venenatis mauris nec nulla
euismod, accounv varius lectus viverra
oncen.</span>
    </span>
                        }
                        className={styles.whoWeAreLabelButton}
                        iconLeft={<Image src={WhoWeAreSupport} alt="WhoWeAreSupport" width={65} height={70}/>}
                    />
                    <DefaultButton
                        buttonText={
                            <span className={styles.whoWeAreContentLabelText}>
      <span className={styles.title}>Ultimate Flexibility</span><br/>
      <span className={styles.description}>Duis leo sapien, lacinia utorrent efficitur
utom suscipit quis nulla Sed auctor eu
der cer</span>
    </span>
                        }
                        className={styles.whoWeAreLabelButton}
                        iconLeft={<Image src={WhoWeAreUltimate} alt="WhoWeAreUltimate" width={65} height={70}/>}
                    />
                </div>
            </div>
        </div>


    )
}