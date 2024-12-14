"use client"
import React from 'react'
import { FeaturesSectionGrid } from './ui/feature-section'

export const FeatureSection = () => {
    return(
        <div className='relative mx-auto text-center'>
            {/* <h1 className='text-amber-300 text-7xl'>What I bring to the table</h1> */}
            <FeaturesSectionGrid/>
        </div>
    )

}