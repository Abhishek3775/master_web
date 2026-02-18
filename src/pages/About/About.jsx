import React from 'react'
import AboutTimeline from '../../components/AboutCompo/AboutTimeline'
import TeamSection from '../../components/AboutCompo/TeamSection'
import FounderSection from '../../components/AboutCompo/FounderSection'
import ExperienceSection from '../../components/AboutCompo/ExperienceSection'
import OurPromiseSection from '../../components/AboutCompo/EliteGlobalPromise'
import ValuesSection from '../../components/AboutCompo/ValuesSection'
import JourneyCTA from '../../components/AboutCompo/JourneyCTA'
import BrandStrip from '../../components/BrandStrip/BrandStrip'

function About() {
  return (
    <>
    {<AboutTimeline/>}
    {<TeamSection/>}
    {<FounderSection/>}
    {<ExperienceSection/>}
    {<OurPromiseSection/>}
    {<ValuesSection/>}
    {<JourneyCTA/>}
    {<BrandStrip/>}
    </>
  )
}

export default About