import React from 'react'
import Itinerary_hero from '../../components/Itinerary/Itinerary_hero'
import Journey_overview from '../../components/Itinerary/Journey_overview'
import Whats_include from '../../components/Itinerary/Whats_include'
import VoyageItinerary from "../../components/Itinerary/VoyageItinerary";
import Interactive_map from '../../components/Itinerary/Interactive_map';
import VesselOverview from '../../components/Itinerary/VesselOverview';
import VesselStay from '../../components/Itinerary/VesselStay';
import DatesPricing from '../../components/Itinerary/DatesPricing';
import JourneyDetails from '../../components/Itinerary/JourneyDetails';
import BeginJourney from '../../components/Itinerary/BeginJourney';
import BrandStrip from '../../components/BrandStrip/BrandStrip';




const Itinerary = () => {
  return (
    <>
    {<Itinerary_hero/>}
    {<Journey_overview/>}
    {<Whats_include/>}
    {<VoyageItinerary/>}
    {<Interactive_map/>}
    {<VesselOverview/>}
    {<VesselStay/>}
    {<DatesPricing/>}
    {<JourneyDetails/>}
    {<BeginJourney/>}
    {<BrandStrip/>}
    </>
  )
}

export default Itinerary