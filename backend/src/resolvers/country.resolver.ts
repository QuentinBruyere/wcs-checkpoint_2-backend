import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import CountryService from '../services/country.service';
import Country , {CreateCountryInput} from '../entities/country.entity';

@Resolver()
export default class CountryResolver {
    @Query(() => Country)
    async countries() {
        return await new CountryService().getAllCountries();
    }

    @Query(() => Country)
    async countryByCode(@Arg('code') code: string) {
        return await new CountryService().getCountryByCode(code);
    }

    @Mutation(() => Country)
	async insertCountry(@Arg('country') country: CreateCountryInput) {
		return await new CountryService().insertCountry(country);
	}
}