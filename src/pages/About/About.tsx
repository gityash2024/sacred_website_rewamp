import React from 'react'
import { SEO } from '@/components/common/SEO'
import styles from './About.module.css'
import earth from '@/assets/earth.png'
import Alexandrelogo from '@/assets/Alexandrelogo.svg'
import Usingtechnology from '@/assets/Usingtechnology.svg'
import arrow from '@/assets/arrow.svg'

export const About: React.FC = () => {
    return (
        <>
            <SEO
                title="About Us | Sacred Groves"
                description="Learn more about Sacred Groves, our mission to protect biodiverse habitats, and how we're reimagining business in partnership with nature."
                keywords="about sacred groves, nature conservation, biodiverse habitats, community interest company, environmental protection"
            />
            
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <img src={earth} alt="Earth" className={styles.heroBgImage} />
                </div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContainer}>
                    <div className={styles.heroDecoration}>
                        <img src={Alexandrelogo} alt="Decoration" className={styles.heroIcon} />
                    </div>
                    <h1 className={styles.heroTitle}>About Sacred Groves</h1>
                    <p className={styles.heroSubtitle}>
                        Reimagining business in partnership with nature – our ultimate shareholder.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionVisual}>
                            <div className={styles.missionIconWrapper}>
                                <img src={Usingtechnology} alt="Technology" className={styles.missionIcon} />
                            </div>
                        </div>
                        <div className={styles.missionContent}>
                            <h2 className={styles.sectionTitle}>Our Mission</h2>
                            <p className={styles.missionText}>
                                Sacred Groves is a Community Interest Company, incorporated in the United Kingdom, 
                                dedicated to protecting and regenerating our planet's most vital biodiverse habitats. 
                                We believe that what is good for nature can be good for business, and we're proving 
                                it every day.
                            </p>
                            <p className={styles.missionText}>
                                Our mission is to safeguard natural habitats while inspiring a global community of 
                                Guardians to protect the wild. Through innovative technology, transparent governance, 
                                and genuine partnerships, we're creating a sustainable future where people, planet, 
                                prosperity, and purpose thrive together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.storyGrid}>
                        <div className={styles.storyContent}>
                            <h2 className={styles.sectionTitle}>Our Story</h2>
                            <p className={styles.storyText}>
                                Founded with a vision to bridge the gap between conservation and commerce, 
                                Sacred Groves emerged from a simple yet powerful idea: protecting nature should 
                                be as accessible as sending a text message.
                            </p>
                            <p className={styles.storyText}>
                                Today, with Guardians in over 30 countries, we're protecting and restoring 
                                biodiverse forests across the UK and Canada. Each Sacred Groves Cluster represents 
                                a tangible commitment to nature – a small step that collectively makes a big difference.
                            </p>
                            <p className={styles.storyText}>
                                We're part of the National Forest for Wales network, fully regulated, governed by 
                                English law, and trusted by thousands who believe in our mission. Every transaction 
                                is traceable, every payment is secure, and every impact is verified.
                            </p>
                        </div>
                        <div className={styles.storyVisual}>
                            <div className={styles.statsCard}>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>30+</span>
                                    <span className={styles.statLabel}>Countries</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>200,000+</span>
                                    <span className={styles.statLabel}>Square Metres Protected</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>3</span>
                                    <span className={styles.statLabel}>Biodiverse Forests</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.valuesHeader}>
                        <h2 className={styles.sectionTitle}>Our Values</h2>
                        <p className={styles.valuesSubtitle}>
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <div className={styles.valueIcon}>🌍</div>
                            </div>
                            <h3 className={styles.valueTitle}>Transparency</h3>
                            <p className={styles.valueText}>
                                Every transaction is traceable, every impact is verified, and every Guardian 
                                can see exactly where their contribution goes.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <div className={styles.valueIcon}>🤝</div>
                            </div>
                            <h3 className={styles.valueTitle}>Partnership</h3>
                            <p className={styles.valueText}>
                                We work in partnership with nature, local communities, businesses, and Guardians 
                                to create lasting positive change.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <div className={styles.valueIcon}>🔒</div>
                            </div>
                            <h3 className={styles.valueTitle}>Trust</h3>
                            <p className={styles.valueText}>
                                Fully regulated, governed by English law, and part of the National Forest for 
                                Wales network. Your trust is our foundation.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <div className={styles.valueIcon}>💚</div>
                            </div>
                            <h3 className={styles.valueTitle}>Impact</h3>
                            <p className={styles.valueText}>
                                Measurable, verifiable, and meaningful. Every habitat protected contributes to 
                                biodiversity, carbon sequestration, and ecosystem health.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className={styles.impactSection}>
                <div className={styles.container}>
                    <div className={styles.impactHeader}>
                        <h2 className={styles.sectionTitle}>Our Impact</h2>
                        <p className={styles.impactSubtitle}>
                            Measurable results that make a real difference
                        </p>
                    </div>
                    <div className={styles.impactGrid}>
                        <div className={styles.impactCard}>
                            <div className={styles.impactNumber}>47%</div>
                            <h3 className={styles.impactTitle}>Biodiversity Regeneration</h3>
                            <p className={styles.impactText}>
                                We're seeing up to 47% increase in biodiversity regeneration across our protected 
                                habitats, creating thriving ecosystems for native species.
                            </p>
                        </div>
                        <div className={styles.impactCard}>
                            <div className={styles.impactNumber}>2.11 Ton</div>
                            <h3 className={styles.impactTitle}>Carbon Sequestration</h3>
                            <p className={styles.impactText}>
                                Our forests are actively sequestering carbon, with verified metrics showing significant 
                                CO2 removal contributing to climate action goals.
                            </p>
                        </div>
                        <div className={styles.impactCard}>
                            <div className={styles.impactNumber}>4.2kg</div>
                            <h3 className={styles.impactTitle}>Pollution Removal</h3>
                            <p className={styles.impactText}>
                                Each Sacred Groves Cluster actively removes pollutants from the air, improving air 
                                quality and environmental health in surrounding areas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition Section */}
            <section className={styles.recognitionSection}>
                <div className={styles.container}>
                    <div className={styles.recognitionHeader}>
                        <h2 className={styles.sectionTitle}>Recognition & Partnerships</h2>
                        <p className={styles.recognitionSubtitle}>
                            Trusted by leaders in conservation and technology
                        </p>
                    </div>
                    <div className={styles.recognitionContent}>
                        <div className={styles.recognitionCard}>
                            <div className={styles.recognitionIcon}>🏆</div>
                            <h3 className={styles.recognitionCardTitle}>Welsh Government Recognition</h3>
                            <p className={styles.recognitionText}>
                                Our work has been recognized by the Welsh Government for our role in protecting rare 
                                temperate rainforests and vital local ecosystems.
                            </p>
                        </div>
                        <div className={styles.recognitionCard}>
                            <div className={styles.recognitionIcon}>📊</div>
                            <h3 className={styles.recognitionCardTitle}>PwC Net Zero Report</h3>
                            <p className={styles.recognitionText}>
                                Featured in PwC's Net Zero Economy report, highlighting our innovative approach to 
                                sustainable business models.
                            </p>
                        </div>
                        <div className={styles.recognitionCard}>
                            <div className={styles.recognitionIcon}>💼</div>
                            <h3 className={styles.recognitionCardTitle}>Microsoft Partnership</h3>
                            <p className={styles.recognitionText}>
                                Part of Microsoft's Entrepreneurs for Positive Impact Accelerator, helping us scale 
                                our impact globally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaBackground}>
                    <div className={styles.ctaPattern}></div>
                </div>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Join Us in Protecting the Planet</h2>
                        <p className={styles.ctaText}>
                            Whether you're an individual Guardian or a business looking to make a positive impact, 
                            there's a place for you in the Sacred Groves community.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a href="/people-for-the-planet" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                                Become a Guardian
                                <img src={arrow} alt="Arrow" className={styles.ctaArrow} />
                            </a>
                            <a href="/business-for-the-planet" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonSecondary}>
                                Partner With Us
                                <img src={arrow} alt="Arrow" className={styles.ctaArrow} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
