import { useState } from 'react'
import { SEO } from '@/components/common/SEO'
import { DEFAULT_SEO } from '@/constants'
import styles from './RecognizedGlobally.module.css'
import { FadeInSection } from '@/components/common/FadeInSection/FadeInSection'

// Imported assets 
import Alexandrelogo from '@/assets/Alexandrelogo_2.svg'
import CGC_1 from '@/assets/CGC_1.svg'
import CGC_2 from '@/assets/CGC_2.svg'
import CGC_3 from '@/assets/CGC_3.svg'
import cardIcon from '@/assets/Builtwithlogo.svg' // Trying Builtwithlogo as cardIcon is missing

// Wild Tech Assets
import Builtwith from '@/assets/Builtwith.png'

// Card icons (used in detail card)
import Blockchain2 from '@/assets/blockchain_card_bubble.svg'
import Cloud2 from '@/assets/cloud_card_bubble.svg'
import VirtualVisits from '@/assets/virtual_card_bubble.svg'
import AdvancedAnalytic2 from '@/assets/advance_card_bubble.svg'
import Satellites2 from '@/assets/sattelite_card_bubble.svg'
import canneslions from '@/assets/canneslions.svg'
import cop_28 from '@/assets/cop_28.svg'
import village_capital from '@/assets/village_capital.svg'

// Bubble icons (used in clickable bubbles)
import BlockchainBubble from '@/assets/blockchain_bubble_11.svg'
import CloudBubble from '@/assets/cloud_bubble_22.svg'
import VirtualBubble from '@/assets/Virtual_bubble_33.svg'
import AdvanceBubble from '@/assets/advance_bubble_44.svg'
import SatellitesBubble from '@/assets/sattelite_bubble_55.svg'

// Seal of Trust Assets
import SacredGrovesbackgroud from '@/assets/SacredGrovesbackgroud.svg'
import SacredGrovesSealofTrustlogo from '@/assets/SacredGrovesSealofTrustlogo.png'
import closeArrow from '@/assets/arrow_seal.svg'
import openArrow from '@/assets/close_trust_point_arrow.svg'

// Action Section Images
import Youcandosomethinglogo from '@/assets/Youcandosomethinglogo.svg'
import InvestforthePlanet from '@/assets/InvestforthePlanet.svg'
import InvestforthePlanet_1 from '@/assets/InvestforthePlanet_1.svg'
// LinkedIn carousel images (keep separate)
import ShopforthePlanet from '@/assets/linked_in_post.png'
import ShopforthePlanet_1 from '@/assets/linked_in_post.png'
import LearnforthePlanet from '@/assets/linked_in_post.png'
// Action Cards images (separate from LinkedIn carousel)
import ShopforthePlanetActionCard1 from '@/assets/2nd_row_first_image.png'
import ShopforthePlanetActionCard2 from '@/assets/2nd_row_2nd_image.png'
import LearnforthePlanetActionCard1 from '@/assets/3rd_row_1st_image.png'
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

// Arrow Navigation Icons
import silderleftarrow from '@/assets/silderleftarrow.svg'
import silderrightside from '@/assets/silderrightside.svg'
import carouselArrowWildTech from '@/assets/corousel_arrow_wild_tech.svg'
import leftArrow2ndScreen from '@/assets/left_arrow_2nd_screen.svg'
import likeIcon from '@/assets/like_icon.svg'
import commentIcon from '@/assets/comment_icon.svg'
import shareIcon from '@/assets/share_icon.svg'
import birds from '@/assets/birds.svg'

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
  icon: string // Icon for the detail card
  bubbleIcon: string // Icon for the clickable bubble
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
    icon: Blockchain2, // Card icon
    bubbleIcon: BlockchainBubble, // Bubble icon
    title: 'Blockchain',
    subtitle: 'Built on Trust',
    description: 'Every habitat protected, every transaction traceable. Our energy-efficient private blockchain keeps every contribution transparent and secure - where integrity is part of the ecosystem.',
    bubbleClass: styles.bubble1
  },
  {
    id: 2,
    label: 'Cloud',
    icon: Cloud2, // Card icon
    bubbleIcon: CloudBubble, // Bubble icon
    title: 'Cloud',
    subtitle: 'Where Nature Lives Online',
    description: 'Fast, scalable, and always on - our cloud connects people, data, and habitats seamlessly. Because protecting the planet needs the speed of tech and the heart of community.',
    bubbleClass: styles.bubble2
  },
  {
    id: 3,
    label: 'Virtual Visits',
    icon: VirtualVisits, // Card icon
    bubbleIcon: VirtualBubble, // Bubble icon
    title: 'Virtual Visits',
    subtitle: 'Nature, Within Reach',
    description: 'Step into the wild, wherever you are. From ancient forests to flowing rivers - visit your habitat virtually, stay connected, and see your impact unfold in real time.',
    bubbleClass: styles.bubble3
  },
  {
    id: 4,
    label: 'Advanced Analytics',
    icon: AdvancedAnalytic2, // Card icon
    bubbleIcon: AdvanceBubble, // Bubble icon
    title: 'Advanced Analytics',
    subtitle: 'Turning Data into Action',
    description: 'AI, machine learning, and image analytics work quietly behind the scenes - revealing insights that guide protection, growth, and restoration.',
    bubbleClass: styles.bubble4
  },
  {
    id: 5,
    label: 'Satellites',
    icon: Satellites2, // Card icon
    bubbleIcon: SatellitesBubble, // Bubble icon
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
    description: "All habitats are owned or leased by The Sacred Groves Community Interest Company (No. 12481036), incorporated in England and Wales and regulated by Companies House, UK. We file audited financial statements annually, publicly available for complete transparency."
  },
  {
    id: 2,
    title: "WE'RE GOVERNED BY ENGLISH LAW",
    description: "All contracts and agreements are legally binding under English law and prepared by leading global law firms. Long-term legal frameworks ensure these habitats remain protected, enabling biodiversity to flourish."
  },
  {
    id: 3,
    title: "WE'RE PART OF THE\n'NATIONAL FOREST FOR WALES' NETWORK",
    description: "Gigrin Prysg and Coed Rhyal have been recognised by the Welsh Government for their rare temperate rainforests and vital role in local ecosystems."
  },
  {
    id: 4,
    title: "WE'RE TRUSTED BY GUARDIANS\nFROM 30+ COUNTRIES",
    description: "Guardians from more than 30 countries including UAE, India, France, USA, Canada, UK, Singapore, Maldives, Ethiopia, Nepal, and Saudi Arabia, trust Sacred Groves. Their trust is rooted in our transparency, traceability, and fully verifiable climate impact at a global scale."
  },
  {
    id: 5,
    title: "WE'RE TRANSPARENT",
    description: "Natural habitats are monitored through Google Earth. Every Sacred Groves Cluster is assigned a unique code, so you can see exactly where you’re making a difference."
  },
  {
    id: 6,
    title: "ALL TRANSACTIONS ARE TRACEABLE",
    description: "Each Sacred Groves Cluster is recorded on the blockchain, ensuring your contribution is permanently traceable and transparent. You can follow exactly where and how your support protects habitats."
  },
  {
    id: 7,
    title: "ALL PAYMENTS ARE SECURE",
    description: "All contributions are processed through Stripe, a world-class payment gateway, that accepts major cards, wallets, and bank debits. Your support is handled with the highest security standards."
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
    {
      id: 4,
      title: "Guardian Spotlight: When Fine Jewellery Honours Beauty and ...",
      image: ShopforthePlanet,
      likes: 101,
      comments: 50,
    },
    {
      id: 5,
      title: "Guardian Spotlight: When Fine Jewellery Honours Beauty and ...",
      image: ShopforthePlanet_1,
      likes: 101,
      comments: 50,
    },
    {
      id: 6,
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
            </div>

            {/* Post Footer */}
            <div className={styles.postFooter}>
              <div className={styles.postStats}>
                <span className={styles.postLikes}>
                  <img src={likeIcon} alt="Like" className={styles.icon} />
                  {post.likes}
                </span>
                <span className={styles.postComments}>
                  <img src={commentIcon} alt="Comment" className={styles.icon} />
                  {post.comments}
                </span>
              </div>
              <button className={styles.shareButton}>
                <img src={shareIcon} alt="Share" className={styles.icon} />
                Share
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
      description: 'Gigrin Prysg and Coed Rhyai have been recognised by the Welsh Government for their rare temperate rainforests and vital role in local ecosystems.',
      url: 'https://www.gov.wales/visit-national-forest-wales',
      logoAlignment: 'left'
    },
    {
      id: 2,
      logo: CGC_2,
      description: 'Featured in PwC\'s Net Zero Future50 – Middle East report.',
      url: 'https://www.pwc.com/m1/en/esg/images/future50/docs/PwC-Net-Zero-Future50-Middle-East-Report.pdf',
      logoAlignment: 'center'
    },
    {
      id: 3,
      logo: CGC_3,
      description: 'Part of the Microsoft Entrepreneurship for Positive Impact Accelerator.',
      url: 'https://www.microsoft.com/socialentrepreneurship/portfolio.aspx',
      logoAlignment: 'right'
    },
    {
      id: 4,
      logo: canneslions,
      description: 'Honoured by the International Advertising Association at the Cannes Lions Festival of Creativity 2023.',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7080102554205921280/',
      logoAlignment: 'left'
    },
    {
      id: 5,
      logo: cop_28,
      description: 'Invited to the Business and Philanthropy Climate Forum at COP28 UAE.',
      url: 'https://bpcforum.org/about/',
      logoAlignment: 'center'
    },
    {
      id: 6,
      logo: village_capital,
      description: 'Selected for “Greentech Europe 2022 Emerging Futures Cohort”.',
      url: 'https://vilcap.com/programs/greentech-europe-2022',
      logoAlignment: 'right'
    }
  ]

  // Carousel navigation functions
  const nextCardSlide = () => {
    setCurrentCardSlide((prev) => (prev + 1) % recognitionCards.length)
  }

  // Mobile Carousel State
  const [mobileCardIndex, setMobileCardIndex] = useState(0)

  const nextMobileSlide = () => {
    if (mobileCardIndex < recognitionCards.length - 1) {
      setMobileCardIndex(prev => prev + 1)
    }
  }

  const prevMobileSlide = () => {
    if (mobileCardIndex > 0) {
      setMobileCardIndex(prev => prev - 1)
    }
  }

  // Mobile Seal of Trust Carousel State
  const [mobileSealIndex, setMobileSealIndex] = useState(0)



  // Mobile Wild Tech State
  const [mobileWildTechScreen, setMobileWildTechScreen] = useState<'intro' | 'overview' | 'detail'>('intro')
  const [mobileWildTechIndex, setMobileWildTechIndex] = useState(0)

  const goToWildTechOverview = () => {
    setMobileWildTechScreen('overview')
  }

  const goToWildTechDetail = (index: number) => {
    setMobileWildTechIndex(index)
    setMobileWildTechScreen('detail')
  }

  const backToWildTechOverview = () => {
    setMobileWildTechScreen('overview')
  }

  // Action Items Data
  const actionItems = [
    {
      id: 'shop',
      title: 'Shop',
      subtitle: 'for the Planet',
      description: "What if every piece you owned kept a tree standing? K. Salamoon's Forest Splendors, unveiled at Paris Fashion Week 2024, draws its spirit from the wild, with every purchase directly financing forest conservation.",
      image1: ShopforthePlanetActionCard1,
      image2: ShopforthePlanetActionCard2
    },
    {
      id: 'learn',
      title: 'Learn',
      subtitle: 'for the Planet',
      description: "Because education can plant deep roots. Eaton Business School and Saatchi & Saatchi's Offset Boxset are helping conserve real forests globally through Sacred Groves Clusters.",
      image1: LearnforthePlanetActionCard1,
      image2: LearnforthePlanet_1
    },
    {
      id: 'joy',
      title: 'Joy',
      subtitle: 'for the Planet',
      description: "Discover the art of conservation with Pyaarnation—an online art store where every square foot of art sold protects a square foot of habitat, transforming creativity into traceable climate impact.",
      image1: JoyforthePlanet,
      image2: JoyforthePlanet_1
    },
    {
      id: 'invest',
      title: 'Invest',
      subtitle: 'for the Planet',
      description: "Your everyday banking can protect real forests. Ruya Bank's NatureProtect has already safeguarded over 100,000 sq ft of forest with Sacred Groves, proof that deposits can serve a higher purpose.",
      image1: InvestforthePlanet,
      image2: InvestforthePlanet_1
    }
  ]

  // Mobile Action Carousel State
  const [mobileActionIndex, setMobileActionIndex] = useState(0)

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

  // Mobile LinkedIn Carousel Component
  const MobileLinkedInCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

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
      {
        id: 4,
        title: "Guardian Spotlight: When Fine Jewellery Honours Beauty and ...",
        image: ShopforthePlanet,
        likes: 101,
        comments: 50,
      },
      {
        id: 5,
        title: "Guardian Spotlight: When Fine Jewellery Honours Beauty and ...",
        image: ShopforthePlanet_1,
        likes: 101,
        comments: 50,
      },
      {
        id: 6,
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

    return (
      <div className={styles.mobileLinkedInSlider}>
        <button className={styles.mobileSliderArrowLeft} onClick={prevSlide}>
          <img src={silderrightside} alt="Previous" />
        </button>

        <div className={styles.mobilePostCard}>
          <div className={styles.mobilePostHeader}>
            <img src={scaradelogo} alt="Sacred Groves" className={styles.mobilePostLogo} />
            <img src={linkedln} alt="LinkedIn" className={styles.mobileLinkedinIcon} />
          </div>

          <p className={styles.mobilePostTitle}>{posts[currentSlide].title}</p>
          <a href="#" className={styles.mobileReadMore}>Read more</a>

          <div className={styles.mobilePostImageContainer}>
            <img src={posts[currentSlide].image} alt="Post" className={styles.mobilePostImage} />
            <div className={styles.mobilePostOverlay}>
              <img src={posts[currentSlide].image === ShopforthePlanet ? ShopforthePlanet : posts[currentSlide].image === ShopforthePlanet_1 ? ShopforthePlanet_1 : LearnforthePlanet} alt="Overlay" className={styles.mobileOverlayImage} />
            </div>
          </div>

          <div className={styles.mobilePostFooter}>
            <div className={styles.mobilePostStats}>
              <span className={styles.mobilePostStat}>
                <img src={likeIcon} alt="Like" /> {posts[currentSlide].likes}
              </span>
              <span className={styles.mobilePostStat}>
                <img src={commentIcon} alt="Comment" /> {posts[currentSlide].comments}
              </span>
            </div>
            <button className={styles.mobileShareButton}>
              <img src={shareIcon} alt="Share" /> Share
            </button>
          </div>
        </div>

        <button className={styles.mobileSliderArrowRight} onClick={nextSlide}>
          <img src={silderleftarrow} alt="Next" />
        </button>
      </div>
    )
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

            {/* Mobile Carousel */}
            <div className={styles.mobileWrapper}>
              <div className={styles.topDecorationMobile}>
                <img src={Alexandrelogo} alt="Alexandrelogo" className={styles.treeIconMobile} />
              </div>
              <h1 className={styles.headingMobile}>Our impact is<br />being recognized<br />globally.</h1>

              <div className={styles.mobileCarouselContainer}>
                {/* Left Arrow */}
                <button
                  className={`${styles.mobileArrow} ${styles.mobileArrowLeft}`}
                  onClick={prevMobileSlide}
                  style={{ visibility: mobileCardIndex === 0 ? 'hidden' : 'visible' }}
                >
                  <img src={silderrightside} alt="Previous" />
                </button>

                {/* Current Card */}
                <div className={styles.mobileCardWrapper}>
                  <a
                    href={recognitionCards[mobileCardIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileCard}
                  >
                    <div className={styles.mobileCardHeader}>
                      <div className={`${styles.logoContainer} ${recognitionCards[mobileCardIndex].logoAlignment === 'left' ? styles.logoContainerLeft : recognitionCards[mobileCardIndex].logoAlignment === 'right' ? styles.logoContainerRight : ''}`}>
                        <img src={recognitionCards[mobileCardIndex].logo} alt="Recognition Logo" className={styles.mainLogo} />
                      </div>
                    </div>
                    <p className={styles.mobileCardDescription}>
                      {recognitionCards[mobileCardIndex].description}
                    </p>
                  </a>
                </div>

                {/* Right Arrow */}
                <button
                  className={`${styles.mobileArrow} ${styles.mobileArrowRight}`}
                  onClick={nextMobileSlide}
                  style={{ visibility: mobileCardIndex === recognitionCards.length - 1 ? 'hidden' : 'visible' }}
                >
                  <img src={silderleftarrow} alt="Next" />
                </button>
              </div>
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
                        <span className={styles.trustText}>
                          {point.title.split('\n').map((line, index, array) => (
                            <span key={index}>
                              {line}
                              {index < array.length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                        <img
                          src={isExpanded ? openArrow : closeArrow}
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

          {/* Mobile Carousel for Seal of Trust */}
          <div className={styles.mobileSealWrapper}>
            <div className={styles.mobileSealCarousel}>
              {mobileSealIndex === 0 ? (
                // First slide: Background + Image + Title + First Trust Point
                <div className={styles.mobileSealSlide}>
                  <div className={styles.mobileSealIntroSlide}>
                    <div className={styles.mobileSealImageWrapper}>
                      <img src={SacredGrovesbackgroud} alt="Background" className={styles.mobileSealBackground} />
                      <img src={SacredGrovesSealofTrustlogo} alt="Sacred Groves Seal of Trust" className={styles.mobileSealImage} />
                    </div>
                    <h2 className={styles.mobileSealTitle}>Sacred Groves<br />Seal of Trust</h2>
                  </div>

                  {/* First Trust Point */}
                  <div className={styles.mobileTrustPoint}>
                    <h3 className={styles.mobileTrustPointTitle}>
                      {trustPoints[0].title.split('\n').map((line, index, array) => (
                        <span key={index}>
                          {line}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    <p className={styles.mobileTrustPointDescription}>
                      {trustPoints[0].description}
                    </p>
                  </div>
                </div>
              ) : mobileSealIndex === 1 ? (
                // Second slide: Trust points 2, 3, 4 (indices 1, 2, 3)
                <div className={styles.mobileSealSlide}>
                  {[1, 2, 3].map((pointIndex, arrayIndex) => (
                    <div key={pointIndex}>
                      <div className={styles.mobileTrustPoint}>
                        <h3 className={styles.mobileTrustPointTitle}>
                          {trustPoints[pointIndex].title.split('\n').map((line, index, array) => (
                            <span key={index}>
                              {line}
                              {index < array.length - 1 && <br />}
                            </span>
                          ))}
                        </h3>
                        <p className={styles.mobileTrustPointDescription}>
                          {trustPoints[pointIndex].description}
                        </p>
                      </div>
                      {arrayIndex < 2 && <div className={styles.mobileTrustSeparator} />}
                    </div>
                  ))}
                </div>
              ) : (
                // Third slide: Trust points 5, 6, 7 (indices 4, 5, 6)
                <div className={styles.mobileSealSlide}>
                  {[4, 5, 6].map((pointIndex, arrayIndex) => (
                    <div key={pointIndex}>
                      <div className={styles.mobileTrustPoint}>
                        <h3 className={styles.mobileTrustPointTitle}>
                          {trustPoints[pointIndex].title.split('\n').map((line, index, array) => (
                            <span key={index}>
                              {line}
                              {index < array.length - 1 && <br />}
                            </span>
                          ))}
                        </h3>
                        <p className={styles.mobileTrustPointDescription}>
                          {trustPoints[pointIndex].description}
                        </p>
                      </div>
                      {arrayIndex < 2 && <div className={styles.mobileTrustSeparator} />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Carousel Dots */}
            <div className={styles.mobileSealDots}>
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`${styles.mobileSealDot} ${mobileSealIndex === index ? styles.mobileSealDotActive : ''}`}
                  onClick={() => setMobileSealIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
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
                <div
                  className={styles.detailCardOverlay}
                  onClick={handleCloseTech}
                >
                  <div
                    className={styles.detailCard}
                    onClick={(e) => e.stopPropagation()}
                  >
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
                        <img src={item.bubbleIcon} alt={item.label} />
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
                the world's most brilliant designer.
              </p>

              <p className={styles.wildTechDescription}>
                Our approach unites art, science, and technology to build<br />
                ecosystems where every living thing can thrive, from vast<br />
                rivers to the smallest fungi. Wild Tech powers our <strong>Assisted Natural Regeneration</strong><br />
                conservation model enabling real on-ground recovery.
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

          {/* Mobile Wild Tech */}
          <div className={styles.mobileWildTechWrapper}>
            {mobileWildTechScreen === 'intro' && (
              <div className={styles.mobileWildTechIntro}>
                <div className={styles.mobileWildTechContent}>
                  {/* Top Icon */}
                  <div className={styles.mobileWildTechIcon}>
                    <img src={cardIcon} alt="Built with" />
                  </div>

                  <div className={styles.mobileWildTechHeading}>
                    <span className={styles.mobileWildTechSubheading}>Built with</span>
                    <h2 className={styles.mobileWildTechTitle}>Wild Tech</h2>
                  </div>

                  <h3 className={styles.mobileWildTechTagline}>
                    Inspired by Nature.<br />
                    Built for Nature.
                  </h3>

                  <p className={styles.mobileWildTechDescription}>
                    Our technology learns from nature itself, the world's most brilliant designer.
                  </p>

                  <p className={styles.mobileWildTechDescription}>
                    Wild Tech powers our <strong>Assisted Natural Regeneration</strong> model, enabling real, on-ground recovery.
                    Blending art, science, and technology, our mission is to build ecosystems where every living
                    thing can thrive, from vast rivers to the smallest fungi.
                  </p>
                </div>

                <button className={styles.mobileWildTechRightArrow} onClick={goToWildTechOverview}>
                  <img src={silderleftarrow} alt="Next" />
                </button>
              </div>
            )}

            {mobileWildTechScreen === 'overview' && (
              <div className={styles.mobileWildTechOverview}>
                <img src={Builtwith} alt="Forest background" className={styles.mobileWildTechBg} />

                {/* Left Back Arrow */}
                <button className={styles.mobileWildTechLeftArrow} onClick={() => setMobileWildTechScreen('intro')}>
                  <img src={leftArrow2ndScreen} alt="Back" />
                </button>

                {/* Bubble Network Layout */}
                <div className={styles.mobileWildTechBubbles}>
                  {/* Row 1: Cloud (top center) */}
                  <div className={styles.bubbleRow}>
                    <div className={styles.bubbleItem}>
                      <button
                        className={styles.mobileWildTechBubble}
                        onClick={() => goToWildTechDetail(4)}
                      >
                        <img src={techItems[4].bubbleIcon} alt={techItems[4].label} />
                      </button>
                      <div className={styles.bubbleLine} />
                      <span className={styles.bubbleLabel}>{techItems[4].label}</span>
                    </div>
                  </div>

                  {/* Row 2: Virtual Visits & Satellites */}
                  <div className={styles.bubbleRow}>
                    <div className={styles.bubbleItem}>
                      <button
                        className={styles.mobileWildTechBubble}
                        onClick={() => goToWildTechDetail(2)}
                      >
                        <img src={techItems[2].bubbleIcon} alt={techItems[2].label} />
                      </button>
                      <div className={styles.bubbleLine} />
                      <span className={styles.bubbleLabel}>{techItems[2].label}</span>
                    </div>

                    <div className={styles.bubbleItem}>
                      <button
                        className={styles.mobileWildTechBubble}
                        onClick={() => goToWildTechDetail(1)}
                      >
                        <img src={techItems[1].bubbleIcon} alt={techItems[1].label} />
                      </button>
                      <div className={styles.bubbleLine} />
                      <span className={styles.bubbleLabel}>{techItems[1].label}</span>
                    </div>
                  </div>

                  {/* Row 3: Advanced Analytics & Blockchain */}
                  <div className={styles.bubbleRow}>
                    <div className={styles.bubbleItem}>
                      <button
                        className={styles.mobileWildTechBubble}
                        onClick={() => goToWildTechDetail(3)}
                      >
                        <img src={techItems[3].bubbleIcon} alt={techItems[3].label} />
                      </button>
                      <div className={styles.bubbleLine} />
                      <span className={styles.bubbleLabel}>{techItems[3].label}</span>
                    </div>

                    <div className={styles.bubbleItem}>
                      <button
                        className={styles.mobileWildTechBubble}
                        onClick={() => goToWildTechDetail(0)}
                      >
                        <img src={techItems[0].bubbleIcon} alt={techItems[0].label} />
                      </button>
                      <div className={styles.bubbleLine} />
                      <span className={styles.bubbleLabel}>{techItems[0].label}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {mobileWildTechScreen === 'detail' && (
              <div className={styles.mobileWildTechDetail}>
                {/* Background Image */}
                <img src={Builtwith} alt="Forest background" className={styles.mobileWildTechDetailBg} />

                <button className={styles.mobileWildTechBackArrow} onClick={backToWildTechOverview}>
                  <img src={carouselArrowWildTech} alt="Back" />
                </button>

                <div className={styles.mobileWildTechDetailCard}>
                  <h3 className={styles.mobileDetailCardTitle}>{techItems[mobileWildTechIndex].title}</h3>
                  <span className={styles.mobileDetailCardSubtitle}>{techItems[mobileWildTechIndex].subtitle}</span>

                  <div className={styles.mobileDetailCardIconWrapper}>
                    <img
                      src={techItems[mobileWildTechIndex].icon}
                      alt={techItems[mobileWildTechIndex].title}
                      className={styles.mobileDetailCardIcon}
                    />
                  </div>

                  <p className={styles.mobileDetailCardDescription}>
                    {techItems[mobileWildTechIndex].description}
                  </p>
                </div>

                <div className={styles.mobileWildTechDots}>
                  {techItems.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.mobileWildTechDot} ${mobileWildTechIndex === index ? styles.mobileWildTechDotActive : ''}`}
                      onClick={() => setMobileWildTechIndex(index)}
                      aria-label={`Go to ${techItems[index].label}`}
                    />
                  ))}
                </div>
              </div>
            )}
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
                image1={ShopforthePlanetActionCard1}
                image2={ShopforthePlanetActionCard2}
                onImageClick={handleActionImageClick}
              />

              <ActionCard
                title="Learn"
                subtitle="for the Planet"
                description="Because education can plant deep roots. Eaton Business School and Mitchell & Sabarti's Offset Boxset are conserving real habitats globally through our Sacred Groves Clusters."
                image1={LearnforthePlanetActionCard1}
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

          {/* Mobile Action Carousel */}
          <div className={styles.mobileActionWrapper}>
            <div className={styles.mobileActionCarousel}>
              {mobileActionIndex === 0 ? (
                // Intro Slide
                <div className={styles.mobileActionIntro}>
                  <div className={styles.mobileActionIcons}>
                    <img src={Youcandosomethinglogo} alt="Nature Icons" />
                  </div>
                  <h2 className={styles.mobileActionHeading}>
                    You can do<br />
                    something positive<br />
                    for nature, every<br />
                    day.
                  </h2>
                  <p className={styles.mobileActionText}>
                    Every choice you make, from how you bank
                    to what you buy, shapes the world we share.
                  </p>
                  <p className={styles.mobileActionText}>
                    We partner with brands that share this
                    vision, making it easy to live your values and
                    let your everyday actions give back to nature.
                  </p>
                </div>
              ) : (
                // Card Slides
                <div className={styles.mobileActionCard}>
                  <div className={styles.mobileActionImagesContainer}>
                    {/* Birds Icon */}
                    <img src={birds} alt="Birds" className={styles.mobileActionBirds} />

                    {/* Images with CSS Borders */}
                    <div className={styles.mobileActionImages}>
                      <div className={styles.mobileActionImageWrapper}>
                        <img src={actionItems[mobileActionIndex - 1].image1} alt="Action 1" />
                      </div>
                      <div className={styles.mobileActionImageWrapper}>
                        <img src={actionItems[mobileActionIndex - 1].image2} alt="Action 2" />
                      </div>
                    </div>
                  </div>

                  <h2 className={styles.mobileActionTitle}>
                    {actionItems[mobileActionIndex - 1].title} for the Planet
                  </h2>
                  <p className={styles.mobileActionDescription}>
                    {actionItems[mobileActionIndex - 1].description}
                  </p>
                </div>
              )}
            </div>

            {/* Carousel Dots */}
            <div className={styles.mobileActionDots}>
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  className={`${styles.mobileActionDot} ${mobileActionIndex === index ? styles.mobileActionDotActive : ''}`}
                  onClick={() => setMobileActionIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
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

      {/* Mobile Aligned Sections */}
      <div className={styles.mobileAlignedWrapper}>
        {/* Section 1: UN SDGs */}
        <section className={styles.mobileAlignedSDG}>
          <h2 className={styles.mobileSDGHeading}>
            Aligned with the<br />
            UN Sustainable<br />
            Development<br />
            Goals.
          </h2>
          <div className={styles.mobileSDGGrid}>
            <img src={align_1} alt="SDG 12" className={styles.mobileSDGIcon} />
            <img src={align_2} alt="SDG 13" className={styles.mobileSDGIcon} />
            <img src={align_3} alt="SDG 15" className={styles.mobileSDGIcon} />
            <img src={align_4} alt="SDG 17" className={styles.mobileSDGIcon} />
          </div>
        </section>

        {/* Section 2: LinkedIn Carousel */}
        <section className={styles.mobileAlignedCarousel}>
          <MobileLinkedInCarousel />
          <button
            className={styles.mobileFollowButton}
            onClick={() => window.open('https://www.linkedin.com/company/the-sacred-groves/', '_blank')}
          >
            FOLLOW US
          </button>
        </section>
      </div>

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