
import { gql } from 'apollo-server'
import { DocumentNode } from 'graphql'

const country: DocumentNode = gql`
  extend type Query {
    countries: [Country!]!
    country(name: String!): Country
  }

  type CountryInfo {
    _id: Int
    iso2: String
    iso3: String
    lat: Float
    long: Float
    flag: String
  }

  type Country {
    updated: Float
    country: String
    cases: Int
    todayCases: Int
    deaths: Int
    todayDeaths: Int
    recovered: Int
    todayRecovered: Int
    active: Int
    critical: Int
    casesPerOneMillion: Int
    deathsPerOneMillion: Int
    tests: Int
    testsPerOneMillion: Int
    population: Int
    continent: String
    oneCasePerPeople: Int
    oneDeathPerPeople: Int
    oneTestPerPeople: Int
    activePerOneMillion: Float
    recoveredPerOneMillion: Float
    criticalPerOneMillion: Float
    countryInfo: CountryInfo
  }
`

export default country
