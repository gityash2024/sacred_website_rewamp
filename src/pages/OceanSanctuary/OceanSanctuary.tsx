import React from 'react'
import { SEO } from '@/components/common/SEO'
import { UnderConstruction } from '@/components/common/UnderConstruction'

export const OceanSanctuary: React.FC = () => {
    return (
        <>
            <SEO
                title="Ocean Sanctuary - Under Construction | Sacred Groves"
                description="The Ocean Sanctuary page is currently under construction. Check back soon for information about our ocean conservation efforts."
                keywords="ocean sanctuary, sacred groves, marine conservation, ocean protection, biodiversity"
            />

            <UnderConstruction pageName="Ocean Sanctuary" />
        </>
    )
}
