import React from 'react'
import { SEO } from '@/components/common/SEO'
import { UnderConstruction } from '@/components/common/UnderConstruction'

export const MyEarthPoint: React.FC = () => {
    return (
        <>
            <SEO
                title="MyEarthPoint - Under Construction | Sacred Groves"
                description="The MyEarthPoint page is currently under construction. Check back soon for more information."
                keywords="myearthpoint, sacred groves, environmental tracking, earth points"
            />

            <UnderConstruction pageName="MyEarthPoint" />
        </>
    )
}
