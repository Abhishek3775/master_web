import React from 'react'
import HeroJapan from '../../components/Japan/HeroJapan'
import SeasonsIntro from '../../components/Japan/SeasonsIntro'
import FourSeasonsSlider from '../../components/Japan/FourSeasonsSlider'
import MonthlyGuide from '../../components/Japan/MonthlyGuide'
import ClimateRegion from '../../components/Japan/ClimateRegion'
import PlanActivities from '../../components/Japan/PlanActivities'
import SeasonalSignature from '../../components/Japan/SeasonalSignature'
import PackingEssentials from '../../components/Japan/PackingEssentials'

function JapanGuide() {
  return (
    <>
    {<HeroJapan/>}
    {<SeasonsIntro/>}
    {<FourSeasonsSlider/>}
    {<MonthlyGuide/>}
    {<ClimateRegion/>}
    {<PlanActivities/>}
    {<SeasonalSignature/>}
    {<PackingEssentials/>}
    </>
  )
}

export default JapanGuide