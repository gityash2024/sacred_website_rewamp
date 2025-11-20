import { useState } from 'react'
import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './RecognizedGlobally.module.css'
import { FadeInSection } from '@/components/common/FadeInSection/FadeInSection'

// Imported assets 
import Alexandrelogo from '@/assets/Alexandrelogo.svg'
import CGC_1 from '@/assets/CGC_1.svg'
import CGC_2 from '@/assets/CGC_2.svg'
import CGC_3 from '@/assets/CGC_3.svg'
import cardIcon from '@/assets/Builtwithlogo.svg' // Trying Builtwithlogo as cardIcon is missing

// Wild Tech Assets
import Builtwith from '@/assets/Builtwith.png'

import Blockchain from '@/assets/Blockchain.svg' // Changed to Blockchain.svg (non-circle)
import Cloud from '@/assets/cloud.svg' // Changed to cloud.svg (non-circle)
import VirtualVisits from '@/assets/virtual_visit_3.png'
import AdvancedAnalytic from '@/assets/advance_analytics_4.svg'
import Satellites from '@/assets/settelites_5.svg'

// Seal of Trust Assets
import SacredGrovesbackgroud from '@/assets/SacredGrovesbackgroud.svg'
import SacredGrovesSealofTrustlogo from '@/assets/SacredGrovesSealofTrustlogo.png'
import arrow from '@/assets/arrow.svg'
import arrowOpen from '@/assets/arrow-open.svg'

// Action Section Images
import Youcandosomethinglogo from '@/assets/Youcandosomethinglogo.svg'
import InvestforthePlanet from '@/assets/InvestforthePlanet.svg'
import InvestforthePlanet_1 from '@/assets/InvestforthePlanet_1.svg'
import ShopforthePlanet from '@/assets/ShopforthePlanet.svg'
import ShopforthePlanet_1 from '@/assets/ShopforthePlanet_1.svg'
import LearnforthePlanet from '@/assets/LearnforthePlanet.svg'
import LearnforthePlanet_1 from '@/assets/LearnforthePlanet_1.svg'
import JoyforthePlanet from '@/assets/JoyforthePlanet.svg'
import JoyforthePlanet_1 from '@/assets/JoyforthePlanet_1.svg'

// Aligned Section Images
import align_1 from '@/assets/align_1.svg'
import align_2 from '@/assets/align_2.svg'
import align_3 from '@/assets/align_3.svg'
import align_4 from '@/assets/align_4.svg'
import scaradelogo from '@/assets/scaradelogo.svg'
import linkedln from '@/assets/linkedln.svg'
import silderleftarrow from '@/assets/silderleftarrow.svg'
import silderrightside from '@/assets/silderrightside.svg'

// Interfaces
interface RecognitionCard {
  id: number
  logo: string
  description: string
  url: string
  logoAlignment: 'left' | 'center' | 'right'
}

interface TechItem {
  id: number
  label: string
  icon: string
  title: string
  subtitle: string
  description: string
  bubbleClass: string
}

interface TrustPoint {
  id: number
  title: string
  description: string
}

// Tech Items Data
const techItems: TechItem[] = [
  {
    id: 1,
    label: 'Blockchain',
    icon: Blockchain,
    title: 'Blockchain',
    subtitle: 'Built on Trust',
    description: 'Every habitat protected, every transaction traceable. Our energy-efficient private blockchain keeps every contribution transparent and secure - where integrity is part of the ecosystem.',
    bubbleClass: styles.bubble1
  },
  {
    id: 2,
    label: 'Cloud',
    icon: Cloud,
    title: 'Cloud',
    subtitle: 'Where Nature Lives Online',
    description: 'Fast, scalable, and always on - our cloud connects people, data, and habitats seamlessly. Because protecting the planet needs the speed of tech and the heart of community.',
    bubbleClass: styles.bubble2
  },
  {
    id: 3,
    label: 'Virtual Visits',
    icon: VirtualVisits,
    title: 'Virtual Visits',
    subtitle: 'Nature, Within Reach',
    description: 'Step into the wild, wherever you are. From ancient forests to flowing rivers - visit your habitat virtually, stay connected, and see your impact unfold in real time.',
    bubbleClass: styles.bubble3
  },
  {
    id: 4,
    label: 'Advanced Analytics',
    icon: AdvancedAnalytic,
    title: 'Advanced Analytics',
    subtitle: 'Turning Data into Action',
    description: 'AI, machine learning, and image analytics work quietly behind the scenes - revealing insights that guide protection, growth, and restoration.',
    bubbleClass: styles.bubble4
  },
  {
    id: 5,
    label: 'Satellites',
    icon: Satellites,
    title: 'Satellites',
    subtitle: 'Watching Over the Wild',
    description: 'From miles above, satellites help us track the pulse of every forest and wetland. Ensuring habitats stay healthy, and every promise made to nature is kept.',
    bubbleClass: styles.bubble5
  }
]

// Trust Points Data
const trustPoints: TrustPoint[] = [
  {
    id: 1,
    title: "WE'RE FULLY REGULATED",
    description: "Sacred Groves is a Community Interest Company (CIC) registered in England & Wales (No. 12475659). We are regulated by the Office of the Regulator of Community Interest Companies, ensuring our assets are locked for community benefit."
  },
  {
    id: 2,
    title: "WE'RE GOVERNED BY ENGLISH LAW",
    description: "Our operations and Sacred Groves Cluster (SGC) agreements are governed by English Law, providing a robust legal framework for all our conservation activities and community engagements."
  },
  {
    id: 3,
    title: "WE'RE PART OF THE 'NATIONAL FOREST FOR WALES' NETWORK",
    description: "We are proud members of the National Forest for Wales network, contributing to the preservation and expansion of woodlands across Wales and supporting national biodiversity goals."
  },
  {
    id: 4,
    title: "WE'RE TRUSTED BY GUARDIANS FROM 30+ COUNTRIES",
    description: "Our community of Guardians spans over 30 countries, uniting people globally in the mission to protect and restore our planet's natural habitats."
  },
  {
    id: 5,
    title: "WE'RE TRANSPARENT",
    description: "Natural habitats are monitored through Google Earth. Every Sacred Groves Cluster is assigned a unique code, so you can see exactly where you're making a difference."
  },
  {
    id: 6,
    title: "ALL TRANSACTIONS ARE TRACEABLE",
    description: "We use blockchain technology to ensure every transaction is recorded and traceable. This provides complete transparency on how funds are used for conservation efforts."
  },
  {
    id: 7,
    title: "ALL PAYMENTS ARE SECURE",
    description: "We use industry-standard encryption and secure payment gateways to ensure all financial transactions and personal data are protected at all times."
  }
]

// Next Arrow Component 
const NextArrowIcon: React.FC = () => (
  <svg className={styles.nextArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 5L21 12M21 12L14 19M21 12H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Action Card Component with Modal
interface ActionCardProps {
  title: string
  subtitle: string
  description: string
  image1: string
  image2: string
  onImageClick: (image: string) => void
}

const ActionCard: React.FC<ActionCardProps> = ({ title, subtitle, description, image1, image2, onImageClick }) => {
  return (
    <div className={styles.actionCard}>
      <div className={styles.actionCardLeft}>
        <h3 className={styles.actionTitle}>
          {title} <span className={styles.actionSubtitle}>{subtitle}</span>
        </h3>
        <p className={styles.actionDescription}>{description}</p>
      </div>

      <div className={styles.actionCardRight}>
        <span className={styles.actionArrow}>(</span>

        <button
          className={styles.actionImageButton}
          onClick={() => onImageClick(image1)}
          aria-label={`View ${title} for the Planet - Image 1`}
        >
          <img src={image1} alt={`${title} for the Planet thumbnail 1`} className={styles.actionImage} />
        </button>

        <button
          className={styles.actionImageButton}
          onClick={() => onImageClick(image2)}
          aria-label={`View ${title} for the Planet - Image 2`}
        >
          <img src={image2} alt={`${title} for the Planet thumbnail 2`} className={styles.actionImage} />
        </button>

        <span className={styles.actionArrow}>)</span>
      </div>
    </div>
  )
}

// LinkedIn Posts Slider Component
const LinkedInPostsSlider: React.FC = () => {
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

export const RecognizedGlobally: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)
  
  // Helper to get selected tech ID
  const getSelectedTechId = (): number | null => {
    return selectedTech ? selectedTech.id : null
  }
  const [currentCardSlide, setCurrentCardSlide] = useState(0)
  const [expandedTrustItem, setExpandedTrustItem] = useState<number | null>(null)

  // Action Modal State
  const [showActionModal, setShowActionModal] = useState(false)
  const [selectedActionImage, setSelectedActionImage] = useState<string>('')

  // Recognition cards data (6 cards total)
  const recognitionCards: RecognitionCard[] = [
    {
      id: 1,
      logo: CGC_1,
      description: '*Gigrin Prysg and Coed Rhyai* have been recognised by the Welsh Government for their rare temperate rainforests and vital role in local ecosystems.',
      url: 'https://www.gov.wales/national-forest-wales',
      logoAlignment: 'left'
    },
    {
      id: 2,
      logo: CGC_2,
      description: '*Featured in PwC\'s Net Zero Future50 – Middle East report.*',
      url: 'https://www.pwc.com/m1/en/publications/net-zero-future50-middle-east.html',
      logoAlignment: 'center'
    },
    {
      id: 3,
      logo: CGC_3,
      description: 'Part of the *Microsoft Entrepreneurship for Positive Impact Accelerator.*',
      url: 'https://www.microsoft.com/en-us/corporate-responsibility/entrepreneurship-for-positive-impact',
      logoAlignment: 'right'
    },
    {
      id: 4,
      logo: CGC_1,
      description: '*Gigrin Prysg and Coed Rhyai* have been recognised by the Welsh Government for their rare temperate rainforests and vital role in local ecosystems.',
      url: 'https://www.gov.wales/national-forest-wales',
      logoAlignment: 'left'
    },
    {
      id: 5,
      logo: CGC_2,
      description: '*Featured in PwC\'s Net Zero Future50 – Middle East report.*',
      url: 'https://www.pwc.com/m1/en/publications/net-zero-future50-middle-east.html',
      logoAlignment: 'center'
    },
    {
      id: 6,
      logo: CGC_3,
      description: 'Part of the *Microsoft Entrepreneurship for Positive Impact Accelerator.*',
      url: 'https://www.microsoft.com/en-us/corporate-responsibility/entrepreneurship-for-positive-impact',
      logoAlignment: 'right'
    }
  ]

  // Carousel navigation functions
  const nextCardSlide = () => {
    setCurrentCardSlide((prev) => (prev + 1) % recognitionCards.length)
  }

  // Get visible cards for carousel (show 3)
  const getVisibleCards = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentCardSlide + i) % recognitionCards.length
      visible.push(recognitionCards[index])
    }
    return visible
  }

  // Trust Item Click Handler
  const handleTrustItemClick = (id: number) => {
    if (expandedTrustItem === id) {
      setExpandedTrustItem(null) // Collapse if already expanded
    } else {
      setExpandedTrustItem(id) // Expand clicked item
    }
  }

  // Tech Item Click Handler
  const handleTechClick = (item: TechItem) => {
    setSelectedTech(item)
  }

  // Close Tech Card
  const handleCloseTech = () => {
    setSelectedTech(null)
  }

  // Handle Action Image Click
  const handleActionImageClick = (image: string) => {
    setSelectedActionImage(image)
    setShowActionModal(true)
  }

  return (
    <>
      <SEO
        title={`Recognized Globally | ${DEFAULT_SEO.title}`}
        description={DEFAULT_SEO.description}
        keywords={DEFAULT_SEO.keywords}
        ogImage={DEFAULT_SEO.ogImage}
      />

      {/* 1. Our impact is being recognised globally. */}
      <FadeInSection>
        <section className={styles.container}>
          <div className={styles.content}>

            <div className={styles.topDecoration}>
              <img src={Alexandrelogo} alt="Alexandrelogo" className={styles.treeIcon} />
            </div>

            <h1 className={styles.heading}>Our impact is being recognised globally.</h1>

            <div className={styles.recognitionCards}>
              {getVisibleCards().map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <div className={`${styles.logoContainer} ${card.logoAlignment === 'left' ? styles.logoContainerLeft : card.logoAlignment === 'right' ? styles.logoContainerRight : ''}`}>
                      <img src={card.logo} alt="Recognition Logo" className={styles.mainLogo} />
                    </div>
                  </div>
                  <p className={styles.cardDescription}>
                    {card.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className={styles.carouselNavigation}>
              <button
                className={styles.nextButton}
                onClick={nextCardSlide}
                aria-label="Next slide"
              >
                <NextArrowIcon />
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 2. Sacred Groves Seal of Trust Section */}
      <FadeInSection>
        <section className={styles.sealOfTrustSection}>
          <img
            src={SacredGrovesbackgroud}
            alt="Sacred Groves Background Pattern"
            className={styles.sealBackground}
          />

          <div className={styles.sealContent}>

            <div className={styles.sealLeft}>
              <div className={styles.sealDecoration}>
              </div>
              <div className={styles.sealLogoArea}>
                <img
                  src={SacredGrovesSealofTrustlogo}
                  alt="Sacred Groves Seal of Trust Forest View"
                  className={styles.sealLogo}
                />
              </div>
            </div>

            <div className={styles.sealRight}>
              <ul className={styles.trustPointsList}>
                {trustPoints.map((point) => {
                  const isExpanded = expandedTrustItem === point.id
                  const shouldShow = expandedTrustItem === null || isExpanded

                  if (!shouldShow) return null

                  return (
                    <li
                      key={point.id}
                      className={`${styles.trustPointItem} ${isExpanded ? styles.expanded : ''}`}
                      onClick={() => handleTrustItemClick(point.id)}
                    >
                      <div className={styles.trustItemHeader}>
                        <span className={styles.trustText}>{point.title}</span>
                        <img
                          src={isExpanded ? arrowOpen : arrow}
                          alt="Arrow icon"
                          className={styles.trustArrow}
                        />
                      </div>
                      {isExpanded && point.description && (
                        <div className={styles.trustItemDescription}>
                          {point.description}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* 3. Built with Wild Tech Section */}
      <FadeInSection>
        <section className={styles.wildTechSection}>
          <div className={styles.wildTechContent}>
            {/* Left Side - Forest Image & Interactive Elements */}
            <div className={styles.wildTechLeft}>
              <img src={Builtwith} alt="Forest background" className={styles.wildTechImage} />

              {selectedTech ? (
                <div className={styles.detailCardOverlay}>
                  <div className={styles.detailCard}>
                    <button
                      className={styles.closeButton}
                      onClick={handleCloseTech}
                      aria-label="Close detail card"
                    >
                      ×
                    </button>

                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{selectedTech.title}</h3>
                      <span className={styles.cardSubtitle}>{selectedTech.subtitle}</span>

                      <div className={styles.cardIconWrapper}>
                        <img src={selectedTech.icon} alt={selectedTech.title} className={styles.cardMainIcon} />
                      </div>

                      <p className={styles.cardDescription}>
                        {selectedTech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.techBubbles}>
                  {techItems.map((item) => {
                    const selectedId = getSelectedTechId()
                    const isActive = selectedId === item.id || hoveredTech === item.id
                    return (
                      <div
                        key={item.id}
                        className={`${styles.techBubble} ${item.bubbleClass} ${isActive ? styles.bubbleActive : ''}`}
                        onClick={() => handleTechClick(item)}
                        onMouseEnter={() => setHoveredTech(item.id)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <img src={item.icon} alt={item.label} />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Right Side - Content */}
            <div className={styles.wildTechRight}>
              <div className={styles.wildTechIcons}>
                {/* <img src={tree} alt="Tree" className={styles.wildIcon} />
                <img src={butterfly} alt="Butterfly" className={styles.wildIcon} />
                <img src={cardIcon} alt="Card" className={styles.wildIcon} />
                <img src={Blockchain} alt="Blockchain" className={styles.wildIcon} /> */}
                <img src={cardIcon} alt="Built with" className={styles.wildIcon} />
              </div>

              <div className={styles.wildTechHeading}>
                <span className={styles.wildTechSubheading}>Built with</span>
                <h2 className={styles.wildTechTitle}>Wild Tech</h2>
              </div>

              <h3 className={styles.wildTechTagline}>
                Inspired by Nature.<br />
                Built for Nature.
              </h3>

              <p className={styles.wildTechDescription}>
                Our technology learns from nature itself,<br />
                the world's most brilliant engineer.
              </p>

              <p className={styles.wildTechDescription}>
                Our approach unites art, science, and technology<br />
                to build ecosystems where every living thing can<br />
                thrive, from vast rivers to the smallest fungi<br />
                through our <strong>Assisted Natural Regeneration</strong><br />
                conservation model.
              </p>

              <ul className={styles.wildTechList}>
                {techItems.map((item) => {
                  const selectedId = getSelectedTechId()
                  const isActive = selectedId === item.id || hoveredTech === item.id
                  return (
                    <li
                      key={item.id}
                      className={`${styles.wildTechItem} ${isActive ? styles.active : ''}`}
                      onClick={() => handleTechClick(item)}
                      onMouseEnter={() => setHoveredTech(item.id)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <span className={styles.techLabel}>{item.label}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 4. You Can Do Something Section */}
      <FadeInSection>
        <section className={styles.youCanDoSection}>
          <div className={styles.youCanDoContent}>

            {/* Left Side - Text Content */}
            <div className={styles.youCanDoLeft}>
              <div className={styles.youCanDoIcons}>
                <img src={Youcandosomethinglogo} alt="Nature Icons" className={styles.natureIcons} />
              </div>

              <h2 className={styles.youCanDoHeading}>
                You can do something positive<br />
                for nature every day.
              </h2>

              <p className={styles.youCanDoDescription}>
                Every choice you make, from how you bank to<br />
                what you buy, shapes the world we share.
              </p>

              <p className={styles.youCanDoDescription}>
                We partner with brands that share this vision,<br />
                making it easy to live your values and let your<br />
                everyday actions give back to nature.
              </p>
            </div>

            {/* Right Side - Action Cards */}
            <div className={styles.youCanDoRight}>
              <ActionCard
                title="Invest"
                subtitle="for the Planet"
                description="Your everyday banking can protect real forests. Ruya Bank's NatureProtect has already safeguarded over 100,000 sq ft of habitats with Sacred Groves, proof that deposits can serve a higher purpose."
                image1={InvestforthePlanet}
                image2={InvestforthePlanet_1}
                onImageClick={handleActionImageClick}
              />

              <ActionCard
                title="Shop"
                subtitle="for the Planet"
                description="With just a piece you owned kept a tree alive in the wild. K. Salampoot's Forest Splendors, unveiled at Paris Fashion Week 2024, draws its spirit from the wild, with every purchase directly financing forest conservation."
                image1={ShopforthePlanet}
                image2={ShopforthePlanet_1}
                onImageClick={handleActionImageClick}
              />

              <ActionCard
                title="Learn"
                subtitle="for the Planet"
                description="Because education can plant deep roots. Eaton Business School and Mitchell & Sabarti's Offset Boxset are conserving real habitats globally through our Sacred Groves Clusters."
                image1={LearnforthePlanet}
                image2={LearnforthePlanet_1}
                onImageClick={handleActionImageClick}
              />

              <ActionCard
                title="Joy"
                subtitle="for the Planet"
                description="Discover the art of conservation with Pyaarmation—an online art store where every square foot of art sold protects a square foot of habitat, transforming creativity into traceable climate impact."
                image1={JoyforthePlanet}
                image2={JoyforthePlanet_1}
                onImageClick={handleActionImageClick}
              />
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* 5. Aligned with UN Sustainable Development Goals Section */}
      <FadeInSection>
        <section className={styles.alignedSection}>
          <div className={styles.alignedContainer}>

            {/* Top Row - Heading and SDG Icons */}
            <div className={styles.alignedTopRow}>
              {/* Left Side - Heading */}
              <div className={styles.alignedLeft}>
                <h2 className={styles.alignedHeading}>
                  Aligned with<br />
                  the UN<br />
                  Sustainable<br />
                  Development<br />
                  Goals.
                </h2>
              </div>

              {/* Right Side - SDG Icons */}
              <div className={styles.alignedTopRight}>
                <div className={styles.sdgIcons}>
                  <img src={align_1} alt="SDG 12: Responsible Consumption" className={styles.sdgIcon} />
                  <img src={align_2} alt="SDG 13: Climate Action" className={styles.sdgIcon} />
                  <img src={align_3} alt="SDG 15: Life on Land" className={styles.sdgIcon} />
                  <img src={align_4} alt="SDG 17: Partnerships" className={styles.sdgIcon} />
                </div>
              </div>
            </div>

            {/* Bottom Row - LinkedIn Posts Slider (Full Width) */}
            <div className={styles.alignedBottomRow}>
              <LinkedInPostsSlider />
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* Action Modal - Rendered at root level to avoid transform issues */}
      {showActionModal && (
        <div className={styles.modalOverlay} onClick={() => setShowActionModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedActionImage} alt="Action for the Planet" className={styles.modalImage} />
          </div>
        </div>
      )}

    </>
  )
}