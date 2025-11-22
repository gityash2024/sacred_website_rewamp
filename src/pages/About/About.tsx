import React from 'react'
import { SEO } from '@/components/common/SEO'
import { UnderConstruction } from '@/components/common/UnderConstruction'

export const About: React.FC = () => {
    return (
        <>
            <SEO
                title="About Us - Under Construction | Sacred Groves"
                description="The About Us page is currently under construction. Check back soon to learn more about Sacred Groves and our mission."
                keywords="about sacred groves, nature conservation, biodiverse habitats, community interest company, environmental protection"
            />

            <UnderConstruction pageName="About Us" />
        </>
    )
}
