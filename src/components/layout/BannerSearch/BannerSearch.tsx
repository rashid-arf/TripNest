'use client';

import { useState } from 'react';
import styles from './BannerSearch.module.scss';
import { FC } from 'react';
import { Dropdown } from '@/components/layout/Dropdown/Dropdown';
import * as React from 'react';

type SearchTab = {
  id: number;
  title: string;
  dropdowns: Record<string, string | null>;
};

export const BannerSearch: FC = () => {
  const [activeTab, setActiveTab] = useState('tour');
  const [bannerSearchData, setBannerSearchData] = useState<Record<string, SearchTab>>({
    tour: {
      id: 1,
      title: 'Tour',
      dropdowns: {
        destination: null,
        tourType: null,
        when: null,
        duration: null,
      },
    },
    visa: {
      id: 2,
      title: 'Visa',
      dropdowns: {
        country: null,
        visaType: null,
        when: null,
        duration: null,
      },
    },
    hotel: {
      id: 3,
      title: 'Hotel',
      dropdowns: {
        destination: null,
        RoomType: null,
        when: null,
        duration: null,
      },
    },
    activities: {
      id: 4,
      title: 'Activities',
      dropdowns: {
        destination: null,
        ActivityType: null,
        when: null,
        duration: null,
      },
    },
    transport: {
      id: 5,
      title: 'Transport',
      dropdowns: {
        destination: null,
        TransportType: null,
        when: null,
        duration: null,
      },
    },
  });

  const onBannerOptionChange = (tabName: string, dropdownName: string, value: string) => {
    setBannerSearchData({
      ...bannerSearchData,
      [tabName]: {
        ...bannerSearchData[tabName],
        dropdowns: {
          ...bannerSearchData[tabName].dropdowns,
          [dropdownName]: value,
        },
      },
    });
  };

  return (
    <div className={styles.bannerSearchBlock}>
      <div className={styles.tabButtons}>
        <button
          className={`${styles.tour} ${activeTab === 'tour' ? styles.tabSelected : ''}`}
          onClick={() => setActiveTab('tour')}
        >
          <div className={`${styles.buttonIcon} ${styles.buttonIconTour}`}></div>
          <p>Tour</p>
        </button>
        <button
          className={`${styles.hotel} ${activeTab === 'hotel' ? styles.tabSelected : ''}`}
          onClick={() => setActiveTab('hotel')}
        >
          <div className={`${styles.buttonIcon} ${styles.buttonIconHotel}`}></div>
          <p>Hotel</p>
        </button>
        <button
          className={`${styles.visa} ${activeTab === 'visa' ? styles.tabSelected : ''}`}
          onClick={() => setActiveTab('visa')}
        >
          <div className={`${styles.buttonIcon} ${styles.buttonIconVisa}`}></div>
          <p>Visa</p>
        </button>
        <button
          className={`${styles.activities} ${activeTab === 'activities' ? styles.tabSelected : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          <div className={`${styles.buttonIcon} ${styles.buttonIconActivities}`}></div>
          <p>Activities</p>
        </button>
        <button
          className={`${styles.transport} ${activeTab === 'transport' ? styles.tabSelected : ''}`}
          onClick={() => setActiveTab('transport')}
        >
          <div className={`${styles.buttonIcon} ${styles.buttonIconTransport}`}></div>
          <p>Transport</p>
        </button>
      </div>
      <div>
        {activeTab === 'tour' && (
          <div className={styles.tabResults}>
            <Dropdown
              options={['Spain', 'New York', 'Mexico']}
              description={'Destionetion'}
              label={'Select Faqs'}
              icon={'/assets/images/destination-icon.svg'}
              name={'destination'}
              onOptionChange={onBannerOptionChange}
              borderBottomLeftRadius={50}
              borderTopLeftRadius={50}
              tabName={activeTab}
            ></Dropdown>
            <Dropdown
              options={['Bus tour', 'Walking Tour', 'Bike Tour', 'Cultural Tour', 'Museum Tour']}
              description={'Tour Type'}
              label={'Select Tour Type'}
              icon={'/assets/images/tour-icon.svg'}
              name={'tourType'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={[
                'December',
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
              ]}
              description={'When'}
              label={'Select Month'}
              icon={'/assets/images/time-icon.svg'}
              name={'when'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={['A weekend', 'A week', '2 weeks', 'A month', 'Other']}
              description={'Tour Duration'}
              label={'Select Duration'}
              name={'duration'}
              icon={'/assets/images/tour-icon.svg'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
            />
            <button
              type="submit"
              onClick={() => console.log(bannerSearchData)}
              className={styles.submitButton}
            >
              Submit
            </button>
          </div>
        )}
        {activeTab === 'hotel' && (
          <div className={styles.tabResults}>
            <Dropdown
              options={['Spain', 'New York', 'Mexico']}
              description={'Destionetion'}
              label={'Select Country'}
              icon={'/assets/images/destination-icon.svg'}
              name={'destination'}
              onOptionChange={onBannerOptionChange}
              borderBottomLeftRadius={50}
              borderTopLeftRadius={50}
              tabName={activeTab}
            ></Dropdown>
            <Dropdown
              options={['Single Room', 'Double Room', 'Studio']}
              description={'Tour Type'}
              label={'Select Room Type'}
              icon={'/assets/images/tour-icon.svg'}
              name={'tourType'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={[
                'December',
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
              ]}
              description={'When'}
              label={'Select Month'}
              icon={'/assets/images/time-icon.svg'}
              name={'when'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={['A weekend', 'A week', '2 weeks', 'Other']}
              description={'Tour Duration'}
              label={'Select Duration'}
              name={'duration'}
              icon={'/assets/images/tour-icon.svg'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
            />
            <button
              type="submit"
              onClick={() => console.log(bannerSearchData)}
              className={styles.submitButton}
            >
              Submit
            </button>
          </div>
        )}
        {activeTab === 'visa' && (
          <div className={styles.tabResults}>
            <Dropdown
              options={['Spain', 'New York', 'Mexico']}
              description={'Destionetion'}
              label={'Select Faqs'}
              icon={'/assets/images/destination-icon.svg'}
              name={'destination'}
              onOptionChange={onBannerOptionChange}
              borderBottomLeftRadius={50}
              borderTopLeftRadius={50}
              tabName={activeTab}
            ></Dropdown>
            <Dropdown
              options={['Travel Visa', 'Business Visa', 'Student Visa', 'Work Visa']}
              description={'Tour Type'}
              label={'Select Visa Type'}
              icon={'/assets/images/tour-icon.svg'}
              name={'tourType'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={[
                'December',
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
              ]}
              description={'When'}
              label={'Select Month'}
              icon={'/assets/images/time-icon.svg'}
              name={'when'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={['A weekend', 'A week', '2 weeks', 'A month', 'Other']}
              description={'Tour Duration'}
              label={'Select Duration'}
              name={'duration'}
              icon={'/assets/images/tour-icon.svg'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
            />
            <button
              type="submit"
              onClick={() => console.log(bannerSearchData)}
              className={styles.submitButton}
            >
              Submit
            </button>
          </div>
        )}
        {activeTab === 'activities' && (
          <div className={styles.tabResults}>
            <Dropdown
              options={['Spain', 'New York', 'Mexico']}
              description={'Destionetion'}
              label={'Select Faqs'}
              icon={'/assets/images/destination-icon.svg'}
              name={'destination'}
              onOptionChange={onBannerOptionChange}
              borderBottomLeftRadius={50}
              borderTopLeftRadius={50}
              tabName={activeTab}
            ></Dropdown>

            <Dropdown
              options={['Safari', 'Culinary Tourism', 'Road Trip', 'Historical Travel']}
              description={'Tour Type'}
              label={'Select Activity Type'}
              icon={'/assets/images/tour-icon.svg'}
              name={'tourType'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={[
                'December',
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
              ]}
              description={'When'}
              label={'Select Month'}
              icon={'/assets/images/time-icon.svg'}
              name={'when'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={['A weekend', 'A week', '2 weeks', 'A month', 'Other']}
              description={'Tour Duration'}
              label={'Select Duration'}
              name={'duration'}
              icon={'/assets/images/tour-icon.svg'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
            />
            <button
              type="submit"
              onClick={() => console.log(bannerSearchData)}
              className={styles.submitButton}
            >
              Submit
            </button>
          </div>
        )}
        {activeTab === 'transport' && (
          <div className={styles.tabResults}>
            <Dropdown
              options={['Spain', 'New York', 'Mexico']}
              description={'Destionetion'}
              label={'Select Faqs'}
              icon={'/assets/images/destination-icon.svg'}
              name={'destination'}
              onOptionChange={onBannerOptionChange}
              borderBottomLeftRadius={50}
              borderTopLeftRadius={50}
              tabName={activeTab}
            ></Dropdown>

            <Dropdown
              options={['Bus', 'Car', 'Plane', 'Railway']}
              description={'Tour Type'}
              label={'Select Transport Type'}
              icon={'/assets/images/tour-icon.svg'}
              name={'tourType'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={[
                'December',
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
              ]}
              description={'When'}
              label={'Select Month'}
              icon={'/assets/images/time-icon.svg'}
              name={'when'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
            />
            <Dropdown
              options={['A weekend', 'A week', '2 weeks', 'A month', 'Other']}
              description={'Tour Duration'}
              label={'Select Duration'}
              name={'duration'}
              icon={'/assets/images/tour-icon.svg'}
              onOptionChange={onBannerOptionChange}
              tabName={activeTab}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
            />
            <button
              type="submit"
              onClick={() => console.log(bannerSearchData)}
              className={styles.submitButton}
            >
              Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
