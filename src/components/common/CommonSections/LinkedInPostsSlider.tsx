/**
 * LinkedIn Posts Slider Component
 * Reusable carousel for LinkedIn posts
 */
import React, { useState } from 'react'
import styles from './CommonSections.module.css'
import ShopforthePlanet from '@/assets/ShopforthePlanet.svg'
import ShopforthePlanet_1 from '@/assets/ShopforthePlanet_1.svg'
import LearnforthePlanet from '@/assets/LearnforthePlanet.svg'
import scaradelogo from '@/assets/scaradelogo.svg'
import linkedln from '@/assets/linkedln.svg'
import silderleftarrow from '@/assets/silderleftarrow.svg'
import silderrightside from '@/assets/silderrightside.svg'

export const LinkedInPostsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // LinkedIn posts data
  const posts = [
    {
      id: 1,
      title: "Guardian Spotlight: When Fine Jewellery Honours Beauty and ...",
      image: ShopforthePlanet,
      likes: 101,
      comments: 50,
    },
    {
      id: 2,
      title: "Guardian Spotlight: When Fine Jewellery Honours Beauty and ...",
      image: ShopforthePlanet_1,
      likes: 101,
      comments: 50,
    },
    {
      id: 3,
      title: "Guardian Spotlight: When Fine Jewellery Honours Beauty and ...",
      image: LearnforthePlanet,
      likes: 101,
      comments: 50,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length)
  }

  // Calculate visible posts (show 3 at a time, loop around)
  const getVisiblePosts = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % posts.length
      visible.push(posts[index])
    }
    return visible
  }

  return (
    <div className={styles.sliderContainer}>
      {/* Navigation Arrows */}
      <button 
        className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
        onClick={prevSlide}
        aria-label="Previous posts"
      >
        <img src={silderrightside} alt="Previous" />
      </button>

      {/* Posts Grid */}
      <div className={styles.postsGrid}>
        {getVisiblePosts().map((post, index) => (
          <div key={`${post.id}-${index}`} className={styles.postCard}>
            {/* Post Header */}
            <div className={styles.postHeader}>
              <img src={scaradelogo} alt="Sacred Groves Logo" className={styles.postLogo} />
              <div className={styles.postMeta}>
              </div>
              <img src={linkedln} alt="LinkedIn" className={styles.linkedinIcon} />
            </div>

            {/* Post Content */}
            <div className={styles.postContent}>
              <p className={styles.postTitle}>{post.title}</p>
              <a href="#" className={styles.readMore}>Read more</a>
            </div>

            {/* Post Image */}
            <div className={styles.postImageContainer}>
              <img src={post.image} alt={post.title} className={styles.postImage} />
              {index === 1 && (
                <div className={styles.newBadge}>NEW</div>
              )}
            </div>

            {/* Post Footer */}
            <div className={styles.postFooter}>
              <div className={styles.postStats}>
                <span className={styles.postLikes}>♥ {post.likes}</span>
                <span className={styles.postComments}>💬 {post.comments}</span>
              </div>
              <button className={styles.shareButton}>
                <span>🔗</span> Share
              </button>
            </div>
          </div>
        ))}
      </div>

      <button 
        className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
        onClick={nextSlide}
        aria-label="Next posts"
      >
        <img src={silderleftarrow} alt="Next" />
      </button>
    </div>
  )
}

