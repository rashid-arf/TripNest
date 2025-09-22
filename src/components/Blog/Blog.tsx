import React, { FC } from 'react';
import styles from './Blog.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import postArrow from '@/assets/images/post-arrow.png';
import fireIcon from '@/assets/images/fireIcon.png';
import clock from '@/assets/images/clock.png';
import chatIcon from '@/assets/images/chatIcon.png';
import { TravelArticleItem } from '@/components/common/TravelArticle/TravelArticle.types';
import searchVector from '@/assets/images/searchVector.png';
import { BlogRecentPost } from '@/components/Blog/BlogRecentPost/BlogRecentPost';

type Props = {
  travelArticle: TravelArticleItem[];
};

export const Blog: FC<Props> = ({ travelArticle }) => {
  return (
    <div className={`content-width ${styles.Blog}`}>
      <div className={styles.BlogList}>
        {travelArticle.map((item) => (
          <div key={item.id} className={styles.BlogListItem}>
            <Image
              src={item.image}
              alt={item.alt}
              width={856}
              height={428}
              className={styles.BlogListItemPhoto}
            />
            <div className={styles.BlogListItemDescription}>
              <div className={styles.BlogListItemDescriptionTop}>
                <div className={styles.BlogListItemDescriptionTopMeta}>
                  <Image src={fireIcon} alt="fireIcon" width={12} height={16} />
                  <p className={styles.BlogListItemDescriptionTopMetaTitle}>{item.views}</p>
                </div>
                <div className={styles.BlogListItemDescriptionTopLine}></div>
                <div className={styles.BlogListItemDescriptionTopMeta}>
                  <Image src={clock} alt="clock" width={16} height={16} />
                  <p className={styles.BlogListItemDescriptionTopMetaTitle}>1 Min Read</p>
                </div>
                <div className={styles.BlogListItemDescriptionTopLine}></div>
                <div className={styles.BlogListItemDescriptionTopMeta}>
                  <Image src={chatIcon} alt="chatIcon" width={16} height={20} />
                  <p className={styles.BlogListItemDescriptionTopMetaTitle}> (0) Comment</p>
                </div>
              </div>
              <p className={styles.BlogListItemDescriptionTitle}>{item.Title}</p>
              <p className={styles.BlogListItemDescriptionText}>{item.TextBlog}</p>
              <Link href={'/blog-text'} className={styles.BlogListItemDescriptionLink}>
                <div className={styles.BlogListItemDescriptionLinkView}>
                  <p>View Post</p>
                  <Image src={postArrow} alt="postArrow" width={22} height={22} />
                </div>
              </Link>
            </div>
            <div className={styles.BlogListItemDate}>
              <p className={styles.BlogListItemDateTop}>{item.Date}</p>
              <p>{item.Month}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.BlogFilters}>
        <div className={styles.BlogFiltersSearch}>
          <h3 className={styles.BlogFiltersSearchTitle}>Search Here</h3>
          <div className={styles.BlogFiltersSearchPlaceholder}>
            <input
              placeholder={'Search Here'}
              className={styles.BlogFiltersSearchPlaceholderForm}
            />
            <button className={styles.BlogFiltersSearchPlaceholderIcon}>
              <Image src={searchVector} alt="searchVector" />
            </button>
          </div>
        </div>
        <div className={styles.BlogFiltersCategories}>
          <h3 className={styles.BlogFiltersSearchTitle}>Categories</h3>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>Adventure Safari</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(3)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>City Discovery</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(3)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>Cruise Voyage</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(5)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>Cultural Exploration</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(4)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>Educational Journey</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(5)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>Luxury Retreat</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(7)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>Nature Excursion</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(7)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>
                Photography Expedition
              </div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(2)</div>
          </div>
          <div className={styles.BlogFiltersCategoriesList}>
            <div className={styles.BlogFiltersCategoriesListSelect}>
              <div className={styles.BlogFiltersCategoriesListSelectСircle}></div>
              <div className={styles.BlogFiltersCategoriesListSelectName}>Adventure Safari</div>
            </div>
            <div className={styles.BlogFiltersCategoriesListNumber}>(3)</div>
          </div>
        </div>
        <BlogRecentPost travelArticle={travelArticle} />
        <div className={styles.BlogFiltersTags}>
          <h3 className={styles.BlogFiltersSearchTitle}>Tags</h3>
          <div className={styles.BlogFiltersTagsItem}>
            <div className={styles.BlogFiltersTagsItemTitle}>Adventure</div>
            <div className={styles.BlogFiltersTagsItemTitle}>City Tour</div>
            <div className={styles.BlogFiltersTagsItemTitle}>Cruise</div>
            <div className={styles.BlogFiltersTagsItemTitle}>Cultural</div>
            <div className={styles.BlogFiltersTagsItemTitle}>Nature Excursion</div>
            <div className={styles.BlogFiltersTagsItemTitle}>Photography</div>
            <div className={styles.BlogFiltersTagsItemTitle}>Road Trip</div>
            <div className={styles.BlogFiltersTagsItemTitle}>Tourism</div>
            <div className={styles.BlogFiltersTagsItemTitle}>Wildlife</div>
          </div>
        </div>
      </div>
    </div>
  );
};
