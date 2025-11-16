// --- Imports ---
import { useState } from 'react'
import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './RecognizedGlobally.module.css'

// Imported assets 
import Alexandrelogo from '@/assets/Alexandrelogo.svg' // Used in the top decoration
import bracte from '@/assets/bracte.svg' // Used for the Seal of Trust decoration (Trees/Deer)
import CGC_1 from '@/assets/CGC_1.svg' 
import CGC_2 from '@/assets/CGC_2.svg'
import CGC_3 from '@/assets/CGC_3.svg'
import CGC_4 from '@/assets/CGC_4.svg'
import CGC_5 from '@/assets/CGC_5.svg'
import CGC_6 from '@/assets/CGC_6.svg'

// Wild Tech
import Builtwith from '@/assets/Builtwith.png'
import BusinesforthePlanet from '@/assets/BusinesforthePlanet.svg'
import Blockchain from '@/assets/Blockchain.svg'
import PartlyCloudylogo from '@/assets/PartlyCloudylogo.svg'
import AdvancedAnalytic from '@/assets/AdvancedAnalytic.svg'
import Satellites from '@/assets/Satellites.svg'
import VirtualVisits from '@/assets/VirtualVisits.svg'

// --- Seal of Trust Assets ---
import SacredGrovesbackgroud from '@/assets/SacredGrovesbackgroud.svg' 
import SacredGrovesSealofTrustlogo from '@/assets/SacredGrovesSealofTrustlogo.png' 
import arrow from '@/assets/arrow.svg' 

// 4section image : 
import Youcandosomethinglogo  from '@/assets/Youcandosomethinglogo.svg'
import InvestforthePlanet from '@/assets/InvestforthePlanet.svg'
import InvestforthePlanet_1 from '@/assets/InvestforthePlanet_1.svg'
import ShopforthePlanet from '@/assets/ShopforthePlanet.svg'
import ShopforthePlanet_1 from '@/assets/ShopforthePlanet_1.svg'
import LearnforthePlanet from '@/assets/LearnforthePlanet.svg'
import LearnforthePlanet_1 from '@/assets/LearnforthePlanet_1.svg'
import JoyforthePlanet from '@/assets/JoyforthePlanet.svg'
import JoyforthePlanet_1 from '@/assets/JoyforthePlanet_1.svg'

// 5section images : 
import align_1 from '@/assets/align_1.svg'
import align_2 from '@/assets/align_2.svg'
import align_3 from '@/assets/align_3.svg'
import align_4 from '@/assets/align_4.svg'
import scaradelogo from '@/assets/scaradelogo.svg'
import linkedln from '@/assets/linkedln.svg'
import silderleftarrow from '@/assets/silderleftarrow.svg'
import silderrightside from '@/assets/silderrightside.svg'

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
}

const ActionCard: React.FC<ActionCardProps> = ({ title, subtitle, description, image1, image2 }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>('')

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    setShowModal(true)
  }

  return (
    <>
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
            onClick={() => handleImageClick(image1)}
            aria-label={`View ${title} for the Planet - Image 1`}
          >
            <img src={image1} alt={`${title} for the Planet thumbnail 1`} className={styles.actionImage} />
          </button>
          
          <button 
            className={styles.actionImageButton}
            onClick={() => handleImageClick(image2)}
            aria-label={`View ${title} for the Planet - Image 2`}
          >
            <img src={image2} alt={`${title} for the Planet thumbnail 2`} className={styles.actionImage} />
          </button>
          
          <span className={styles.actionArrow}>)</span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt={`${title} for the Planet`} className={styles.modalImage} />
            
            <button 
              className={styles.modalCloseButton}
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
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

      {/* Pagination Dots */}
      <div className={styles.sliderDots}>
        {posts.map((_, index) => (
          <button
            key={index}
            className={`${styles.sliderDot} ${index === currentSlide ? styles.sliderDotActive : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export const RecognizedGlobally: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  
  // Data for the Seal of Trust list items
  const trustPoints = [
    "WE'RE FULLY REGULATED",
    "WE'RE GOVERNED BY ENGLISH LAW",
    "WE'RE PART OF THE 'NATIONAL FOREST FOR WALES' NETWORK",
    "WE'RE TRUSTED BY GUARDIANS FROM 30+ COUNTRIES",
    "WE'RE TRANSPARENT",
    "ALL PAYMENTS ARE SECURE",
    "ALL TRANSACTIONS ARE TRACEABLE",
  ];

  // Technology card data
  const techCards = {
    blockchain: {
      title: "Blockchain",
      subtitle: "Built on Trust",
      description: "Protected habitats, traceable transactions, and an energy-efficient private blockchain that ensures every contribution is secure, transparent, and permanent.",
      icon: Blockchain,
    },
    cloud: {
      title: "Cloud",
      subtitle: "Where Nature Lives Online",
      description: "Our cloud infrastructure connects people, data, and habitats seamlessly, enabling real-time monitoring and protection for planet protection.",
      icon: PartlyCloudylogo,
    },
    virtualVisits: {
      title: "Virtual Visits",
      subtitle: "Nature, Within Reach",
      description: "Experience your protected habitat from anywhere. Virtual visits let you see your impact, explore the ecosystem, and connect with nature through immersive technology.",
      icon: VirtualVisits,
    },
    advancedAnalytics: {
      title: "Advanced Analytics",
      subtitle: "Turning Data into Action",
      description: "AI, machine learning, and image analytics work quietly behind the scenes—revealing insights that guide protection, growth, and restoration.",
      icon: AdvancedAnalytic,
    },
    satellites: {
      title: "Satellites",
      subtitle: "Watching Over the Wild",
      description: "From space, satellites track forests and wetlands, ensuring habitat health, detecting changes, and providing the data needed for effective conservation.",
      icon: Satellites,
    },
  }

  const handleTechClick = (tech: string) => {
    if (selectedTech === tech) {
      setSelectedTech(null)
    } else {
      setSelectedTech(tech)
    }
  }

  return (
    <>
      <SEO
        title={`Recognized Globally | ${DEFAULT_SEO.title}`}
        description={DEFAULT_SEO.description}
        keywords={DEFAULT_SEO.keywords}
        ogImage={DEFAULT_SEO.ogImage}
      />
      
      {/* 1. Our impact is being recognised globally. (The first section) */}
      <section className={styles.container}>
        <div className={styles.content}>
          
          <div className={styles.topDecoration}>
            <img src={Alexandrelogo} alt="Alexandrelogo" className={styles.treeIcon} />
          </div>

          <h1 className={styles.heading}>Our impact is being recognised globally.</h1>
          
          <div className={styles.recognitionCards}>
            
            {/* Card 1: Coedwig Genedlaethol Cymru / National Forest for Wales */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={`${styles.logoContainer} ${styles.logoContainerLeft}`}>
                  <img src={CGC_1} alt="Coedwig Genedlaethol Cymru Logo" className={styles.mainLogo} />
                </div>
              </div>
              <p className={styles.cardDescription}>
                *Gigrin Prysg and Coed Rhyai* have been recognised by the Welsh Government for their rare temperate rainforests and vital role in local ecosystems.
              </p>
              
            </div>

            {/* Card 2: PwC's Net Zero Future50 – Middle East report */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.logoContainer}>
                  <img src={CGC_2} alt="PwC Logo" className={styles.mainLogo} />
                </div>
              </div>
              <p className={styles.cardDescription}>
                *Featured in PwC's Net Zero Future50 – Middle East report.*
              </p>
            </div>

            {/* Card 3: Microsoft Entrepreneurship for Positive Impact Accelerator */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={`${styles.logoContainer} ${styles.logoContainerRight}`}>
                  <img src={CGC_3} alt="Microsoft Logo" className={styles.mainLogo} />
                </div>
              </div>
              <p className={styles.cardDescription}>
                Part of the *Microsoft Entrepreneurship for Positive Impact Accelerator.*
              </p>
            </div>
            

          </div> {/* end .recognitionCards */}
           {/* Slider Next Arrow Button */}
          <button className={styles.nextButton} aria-label="Next slide">
              <NextArrowIcon />
          </button>
        </div>
      </section>

      {/* 2. Sacred Groves Seal of Trust Section */}
      <section className={styles.sealOfTrustSection}>
        <img 
          src={SacredGrovesbackgroud} 
          alt="Sacred Groves Background Pattern" 
          className={styles.sealBackground} 
        />

        <div className={styles.sealContent}>
          
          <div className={styles.sealLeft}>
            
            {/* Decorative elements (Trees and Deer) */}
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
              {trustPoints.map((point, index) => (
                <li key={index} className={styles.trustPointItem}>
                  <span className={styles.trustText}>{point}</span>
                  <img 
                    src={arrow} 
                    alt="Arrow icon" 
                    className={styles.trustArrow} 
                  />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Built with Wild Tech Section */}
      <section className={styles.wildTechSection}>
        <div className={styles.wildTechContent}>
          
          {/* Left Side - Forest Image with Interactive Bubbles */}
          <div className={styles.wildTechLeft}>
            <img 
              src={Builtwith} 
              alt="Forest Background" 
              className={styles.wildTechImage} 
            />
            
            {/* Interactive Tech Bubbles */}
            <div className={styles.techBubbles}>
              <div className={`${styles.techBubble} ${styles.bubble1}`}>
                <img src={Blockchain} alt="Blockchain" />
              </div>
              <div className={`${styles.techBubble} ${styles.bubble2}`}>
                <img src={PartlyCloudylogo} alt="Cloud" />
              </div>
              <div className={`${styles.techBubble} ${styles.bubble3}`}>
                <img src={VirtualVisits} alt="Virtual Visits" />
              </div>
              <div className={`${styles.techBubble} ${styles.bubble4}`}>
                <img src={AdvancedAnalytic} alt="Advanced Analytics" />
              </div>
              <div className={`${styles.techBubble} ${styles.bubble5}`}>
                <img src={Satellites} alt="Satellites" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.wildTechRight}>
            {/* Icon Row */}
            <div className={styles.wildTechIcons}>
              <img src={BusinesforthePlanet} alt="Tree Icon" className={styles.wildIcon} />
           
            </div>

            <h2 className={styles.wildTechHeading}>
              <span className={styles.wildTechSubheading}>Built with</span>
              <span className={styles.wildTechTitle}>Wild Tech</span>
            </h2>

            <p className={styles.wildTechTagline}>
              Inspired by Nature.<br />
              Built for Nature.
            </p>

            <p className={styles.wildTechDescription}>
              Our technology learns from nature itself, <br />
              the world's most brilliant designer.
            </p>

            <p className={styles.wildTechDescription}>
              Wild Tech powers our <strong>Assisted Natural Regeneration</strong> <br /> model 
              enabling real, on-ground recovery. Blending art, <br /> science, and technology, 
              our mission is to build <br /> ecosystems where every living thing can thrive, 
              from <br /> vast rivers to the smallest fungi.
            </p>

            {/* Tech List */}
            <ul className={styles.wildTechList}>
              <li 
                className={`${styles.wildTechItem} ${selectedTech === 'blockchain' ? styles.active : ''}`}
                onClick={() => handleTechClick('blockchain')}
              >
                <span className={styles.techLabel}>Blockchain</span>
              </li>
              <li 
                className={`${styles.wildTechItem} ${selectedTech === 'cloud' ? styles.active : ''}`}
                onClick={() => handleTechClick('cloud')}
              >
                <span className={styles.techLabel}>Cloud</span>
              </li>
              <li 
                className={`${styles.wildTechItem} ${selectedTech === 'virtualVisits' ? styles.active : ''}`}
                onClick={() => handleTechClick('virtualVisits')}
              >
                <span className={styles.techLabel}>Virtual Visits</span>
              </li>
              <li 
                className={`${styles.wildTechItem} ${selectedTech === 'advancedAnalytics' ? styles.active : ''}`}
                onClick={() => handleTechClick('advancedAnalytics')}
              >
                <span className={styles.techLabel}>Advanced Analytics</span>
              </li>
              <li 
                className={`${styles.wildTechItem} ${selectedTech === 'satellites' ? styles.active : ''}`}
                onClick={() => handleTechClick('satellites')}
              >
                <span className={styles.techLabel}>Satellites</span>
              </li>
            </ul>

            {/* Technology Description Modal */}
            {selectedTech && (
              <div className={styles.techModalOverlay} onClick={() => setSelectedTech(null)}>
                <div className={styles.techModalContent} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.techCard}>
                    <div className={styles.techCardHeader}>
                      <h3 className={styles.techCardTitle}>
                        {techCards[selectedTech as keyof typeof techCards].title}
                        <span className={styles.techCardSubtitle}>
                          {' - ' + techCards[selectedTech as keyof typeof techCards].subtitle}
                        </span>
                      </h3>
                      <button 
                        className={styles.techCardClose}
                        onClick={() => setSelectedTech(null)}
                        aria-label="Close modal"
                      >
                        ×
                      </button>
                    </div>
                    <div className={styles.techCardIcon}>
                      <img 
                        src={techCards[selectedTech as keyof typeof techCards].icon} 
                        alt={techCards[selectedTech as keyof typeof techCards].title}
                        className={styles.techCardIconImage}
                      />
                    </div>
                    <p className={styles.techCardDescription}>
                      {techCards[selectedTech as keyof typeof techCards].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. You Can Do Something Section */}
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
            />
            
            <ActionCard
              title="Shop"
              subtitle="for the Planet"
              description="With just a piece you owned kept a tree alive in the wild. K. Salampoot's Forest Splendors, unveiled at Paris Fashion Week 2024, draws its spirit from the wild, with every purchase directly financing forest conservation."
              image1={ShopforthePlanet}
              image2={ShopforthePlanet_1}
            />
            
            <ActionCard
              title="Learn"
              subtitle="for the Planet"
              description="Because education can plant deep roots. Eaton Business School and Mitchell & Sabarti's Offset Boxset are conserving real habitats globally through our Sacred Groves Clusters."
              image1={LearnforthePlanet}
              image2={LearnforthePlanet_1}
            />
            
            <ActionCard
              title="Joy"
              subtitle="for the Planet"
              description="Discover the art of conservation with Pyaarmation—an online art store where every square foot of art sold protects a square foot of habitat, transforming creativity into traceable climate impact."
              image1={JoyforthePlanet}
              image2={JoyforthePlanet_1}
            />
          </div>

        </div>
      </section>

      {/* 5. Aligned with UN Sustainable Development Goals Section */}
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

    </>
  )
}