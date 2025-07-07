import React, {CSSProperties, FC} from 'react';
import styles from './TravelLocation.module.scss';
import Link from 'next/link';
import { DefaultTitleLink } from '@/components/common/DefaultTitleLink/DefaultTitleLink';
import { DefaultTitleName } from '@/components/common/DefaultTitleName/DefaultTitleName';

// type LocationItem = {
//     id:number;
//     title: string;
//     link: string;
//     image?: string;
//     alt: string;
// };
//
// type Props = {
//     menu: LocationItem[];
// }



export const TravelLocation: FC = () => {
  return (
      <div className={styles.TravelLocationContainer}>
          <Link href={'/about'} className={styles.TravelLocationLink}>
              <DefaultTitleLink titleLinkText={'Journey TripNext'}/>
          </Link>
          <DefaultTitleName titleName={'Trendy Travel Locations'}/>
          <div className={styles.TravelLocationPhotos}>
              <div className={styles.TravelLocationPhotosItem1}>
                  <div className={styles.yellowMask}>
                      <div className={styles.TravelLocationPhotosItem1Mask}>4 Tour</div>
                  </div>
                  <div className={styles.titleMask}>
                      <div className={styles.TravelLocationPhotosItemTitle}>
                          <div className={styles.TravelLocationPhotosItemTitleTop}>Travel To</div>
                          <div className={styles.TravelLocationPhotosItemTitleBottom}>Sweden</div>
                      </div>
                  </div>
              </div>
              <div className={styles.TravelLocationPhotosItem1}>
                  <div className={styles.yellowMask}>
                      <div className={styles.TravelLocationPhotosItem1Mask}>4 Tour</div>
                  </div>
                  <div className={styles.titleMask}>
                      <div className={styles.TravelLocationPhotosItemTitle}>
                          <div className={styles.TravelLocationPhotosItemTitleTop}>Travel To</div>
                          <div className={styles.TravelLocationPhotosItemTitleBottom}>Sweden</div>
                      </div>
                  </div>
              </div>
              <div className={styles.TravelLocationPhotosItem1}>
                  <div className={styles.yellowMask}>
                      <div className={styles.TravelLocationPhotosItem1Mask}>4 Tour</div>
                  </div>
                  <div className={styles.titleMask}>
                      <div className={styles.TravelLocationPhotosItemTitle}>
                          <div className={styles.TravelLocationPhotosItemTitleTop}>Travel To</div>
                          <div className={styles.TravelLocationPhotosItemTitleBottom}>Sweden</div>
                      </div>
                  </div>
              </div>
              <div className={styles.TravelLocationPhotosItem1}>
                  <div className={styles.yellowMask}>
                      <div className={styles.TravelLocationPhotosItem1Mask}>4 Tour</div>
                  </div>
                  <div className={styles.titleMask}>
                      <div className={styles.TravelLocationPhotosItemTitle}>
                          <div className={styles.TravelLocationPhotosItemTitleTop}>Travel To</div>
                          <div className={styles.TravelLocationPhotosItemTitleBottom}>Sweden</div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<div>*/}
          {/*    {menu.map((LocationItem) => {*/}
          {/*        return (*/}
          {/*            <div key={LocationItem.id} className={styles.TravelLocationPhotosItem} style={{'--local-image': `url(${LocationItem.image})`} as CSSProperties} >*/}

          {/*            </div>*/}
          {/*        )*/}
          {/*    })}*/}


          {/*</div>*/}
      </div>
      )
          }


