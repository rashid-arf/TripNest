import { FC, useState } from 'react';
import styles from './ActiveTour.module.scss';
import rafting from '@/assets/images/rafting.svg';
import zip from '@/assets/images/zip.svg';
import paragliding from '@/assets/images/paragliding.svg';
import jumping from '@/assets/images/jumping.svg';
import videoIcon from '@/assets/images/video-play.svg';
import activeTour from '@/assets/images/activeTour.png';
import activePoint from '@/assets/images/activePoint.svg';
import { DefaultTitleLink } from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import { DefaultTitleName } from '@/components/common/DefaultTitleName/DefaultTitleName';
import { DefaultButton } from '@/components/common/DefaultButton/DefaultButton';
import Image from 'next/image';

export const ActiveTour: FC = () => {
  const [activeTab, setActiveTab] = useState('Zip lining');

  const tabs = [
    { label: 'Zip lining', icon: zip },
    { label: 'Bungee Jumping', icon: jumping },
    { label: 'Rafting', icon: rafting },
    { label: 'Paragliding', icon: paragliding },
  ];

  return (
    <div className={styles.activeTourContainer}>
      <div>
        <div className={styles.activeTourContent}>
          <div>
            <div className={styles.activeTourContentRight}>
              <Image src={activeTour} alt={'activeTour'} />
            </div>
          </div>
          <div className={styles.activeTourContentLeft}>
            <DefaultTitleLink titleLinkText={'What We Do'} />
            <DefaultTitleName titleName={'Our Particular Activities'} />
            <div className={styles.activeTourContentLeftAbout}>
              <div className={styles.activeTourContentLeftLabel}>
                <div className={styles.activeTourContentLeftLabel}>
                  {tabs.map((tab) => (
                    <DefaultButton
                      key={tab.label}
                      buttonText={tab.label}
                      iconLeft={<Image src={tab.icon} alt={tab.label} width={50} height={50} />}
                      className={styles.activeTourTabButton}
                      isActive={activeTab === tab.label}
                      onClick={() => setActiveTab(tab.label)}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.activeTourAboutContent}>
                <p className={styles.activeTourContentLeftTextTitle}>
                  Thrill Above Ground: The Zip Line Adventure
                </p>
                <p className={styles.activeTourContentLeftText}>
                  Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling
                  the wind rush past, and experiencing nature from breathtaking heights. Unleash
                  your inner adventurer today.
                </p>
                <div className={styles.activeTourAboutList}>
                  <DefaultButton
                    buttonText={'Treetop Views'}
                    className={styles.activeTourListButton}
                    iconLeft={<Image src={activePoint} alt="activePoint" width={9} height={9} />}
                  />
                  <DefaultButton
                    buttonText={'Adrenaline Rush'}
                    className={styles.activeTourListButton}
                    iconLeft={<Image src={activePoint} alt="activePoint" width={9} height={9} />}
                  />
                  <DefaultButton
                    buttonText={'Safety Measures'}
                    className={styles.activeTourListButton}
                    iconLeft={<Image src={activePoint} alt="activePoint" width={9} height={9} />}
                  />
                  <DefaultButton
                    buttonText={'Nature Immersion'}
                    className={styles.activeTourListButton}
                    iconLeft={<Image src={activePoint} alt="activePoint" width={9} height={9} />}
                  />
                </div>
                <div className={styles.activeTourContentLeftLink}>
                  <DefaultButton buttonText={'Find Out More'} />
                  <DefaultButton
                    buttonText={<span>Watch Tour</span>}
                    className={styles.activeTourVideoButton}
                    iconLeft={<Image src={videoIcon} alt="videoIcon" width={51} height={51} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
