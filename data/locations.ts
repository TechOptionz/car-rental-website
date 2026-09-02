import { CITY } from "./site";

export interface CityData {
  address: string;
  suburbs: string[];
}

export const cities: Record<string, CityData> = {
  Sydney: {
    address: "12 Example Street, Parramatta NSW 2150",
    suburbs: ["Parramatta", "Blacktown", "Liverpool", "Bankstown", "Auburn", "Strathfield", "Penrith", "Campbelltown", "Hurstville", "Chatswood", "Ryde", "Fairfield", "Castle Hill", "Mascot", "Burwood", "Rockdale"],
  },
  Melbourne: {
    address: "12 Example Street, Dandenong VIC 3175",
    suburbs: ["Dandenong", "Footscray", "Sunshine", "Broadmeadows", "Werribee", "Clayton", "Box Hill", "Preston", "Craigieburn", "Point Cook", "Springvale", "Glen Waverley", "Epping", "Frankston", "Tarneit", "Docklands"],
  },
  Brisbane: {
    address: "12 Example Street, Woolloongabba QLD 4102",
    suburbs: ["Woolloongabba", "Sunnybank", "Logan Central", "Chermside", "Indooroopilly", "Ipswich", "Toowong", "Mount Gravatt", "Carindale", "Springwood", "Inala", "Strathpine", "Fortitude Valley", "Browns Plains", "Redcliffe", "Capalaba"],
  },
  Perth: {
    address: "12 Example Street, Cannington WA 6107",
    suburbs: ["Cannington", "Morley", "Joondalup", "Fremantle", "Midland", "Rockingham", "Osborne Park", "Belmont", "Victoria Park", "Armadale", "Ellenbrook", "Canning Vale", "Mirrabooka", "Subiaco", "Mandurah", "Cockburn"],
  },
};

export const cityData = { city: CITY, ...(cities[CITY] || cities.Sydney) };
