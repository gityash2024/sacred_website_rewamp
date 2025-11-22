import React from 'react'
import { SEO } from '@/components/common/SEO'
import { UnderConstruction } from '@/components/common/UnderConstruction'

export const India: React.FC = () => {
    return (
        <>
            <SEO
                title="India - Under Construction | Sacred Groves"
                description="The India page is currently under construction. Check back soon for more information about our work in India."
                keywords="india, sacred groves, conservation india, biodiversity india"
            />

            <UnderConstruction pageName="India" />
        </>
    )
}
