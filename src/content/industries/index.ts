import type { Industry, IndustrySlug } from "../types";
import realEstate from "./real-estate";
import construction from "./construction";
import hvacMep from "./hvac-mep";
import interiorDesignFitOut from "./interior-design-fit-out";
import automotive from "./automotive";
import healthcare from "./healthcare";
import dentalAesthetic from "./dental-aesthetic";
import hospitality from "./hospitality";
import restaurantsCafes from "./restaurants-cafes";
import logistics from "./logistics";
import ecommerceRetail from "./ecommerce-retail";
import luxuryFashionJewellery from "./luxury-fashion-jewellery";
import education from "./education";
import financeFintechInsurance from "./finance-fintech-insurance";
import technologySaas from "./technology-saas";
import facilitiesManagement from "./facilities-management";
import tourismTravel from "./tourism-travel";
import professionalLegal from "./professional-legal";
import manufacturingIndustrial from "./manufacturing-industrial";
import eventsExhibitions from "./events-exhibitions";

/** All 20 industries in their numbered order. */
export const industries: Industry[] = [
  realEstate,
  construction,
  hvacMep,
  interiorDesignFitOut,
  automotive,
  healthcare,
  dentalAesthetic,
  hospitality,
  restaurantsCafes,
  logistics,
  ecommerceRetail,
  luxuryFashionJewellery,
  education,
  financeFintechInsurance,
  technologySaas,
  facilitiesManagement,
  tourismTravel,
  professionalLegal,
  manufacturingIndustrial,
  eventsExhibitions,
];

export const featuredIndustries = industries.filter((i) => i.tier === 1);

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function industriesBySlugs(slugs: IndustrySlug[]): Industry[] {
  return slugs.map((slug) => industries.find((i) => i.slug === slug)).filter((i): i is Industry => Boolean(i));
}
