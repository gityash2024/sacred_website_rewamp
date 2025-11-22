import React from 'react'
import { SEO } from '@/components/common/SEO'
import { UnderConstruction } from '@/components/common/UnderConstruction'

export const OurSacredGroves: React.FC = () => {
    return (
        <>
            <SEO
                title="Our Sacred Groves - Under Construction | Sacred Groves"
                description="The Our Sacred Groves page is currently under construction. Check back soon for more information about our groves."
                keywords="our sacred groves, protected areas, sacred groves locations, conservation sites"
            />

            <UnderConstruction pageName="Our Sacred Groves" />
        </>
    )
}
