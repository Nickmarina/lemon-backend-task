import {
	interfaces,
	controller,
	BaseHttpController,
	httpGet, requestParam
} from 'inversify-express-utils';
import { ApiOperationGet, ApiPath } from 'swagger-express-ts';
import {
	path, getDevelopers, getDeveloperById
} from '../swagger/developers.swagger.docs';
import { inject } from 'inversify'

import { DevelopersService } from '../../domain/developers/services/developers.service'
import { DeveloperDto, DeveloperListDto } from '../dto/developers.responses.dto'
import { Types } from '../../constants'

@controller('/api/developers')
@ApiPath(path)
export class DevelopersController extends BaseHttpController implements interfaces.Controller {

	constructor(
		@inject(Types.DEVELOPERS_SERVICE) private developersService: DevelopersService,
	){ super() }

	@httpGet('/')
	@ApiOperationGet(getDevelopers)
	public async getDevelopers(): Promise<DeveloperListDto[]> {
		return this.developersService.getDevelopers()
	}

	@httpGet('/:id')
	@ApiOperationGet(getDeveloperById)
	public async getDeveloperById(@requestParam('id') id: string): Promise<DeveloperDto> {
		return this.developersService.getDeveloperById(id)
	}

}
