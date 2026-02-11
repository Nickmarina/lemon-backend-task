import {inject, injectable} from 'inversify';

import {DevelopersRepository} from '../repositories/developers.repository';
import {checkDevelopersRevenue} from "../../../utils/checkDevelopersRevenue";
import {IDeveloperWithCheckedRevenue} from '../types'
import { Types } from '../../../constants'

@injectable()
export class DevelopersService {

	constructor(
		@inject(Types.DEVELOPERS_REPOSITORY) private developersRepository: DevelopersRepository,
	) {}

	async getDevelopers(): Promise<IDeveloperWithCheckedRevenue[]>{
		const contracts = await this.developersRepository.getContracts();
		const developers =  await this.developersRepository.getDevelopers();

		return checkDevelopersRevenue(contracts, developers);
	}

	async getDeveloperById(id: string){
		return this.developersRepository.getDeveloperById(id)
	}

}
