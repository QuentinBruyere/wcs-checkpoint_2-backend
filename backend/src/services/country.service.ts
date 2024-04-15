import { Repository } from 'typeorm';
import datasource from "../lib/datasource";
import Country , {CreateCountryInput} from '../entities/country.entity';

export default class CountryService {
	db: Repository<Country>;
	constructor() {
		this.db = datasource.getRepository(Country);
	}

    async getAllCountries() {
		return this.db.find();
	}

    async getCountryByCode(code: string) {
		return this.db.findOneBy({ code });
	}

	async insertCountry(country: CreateCountryInput) {
		return this.db.save(country);
	}
}
