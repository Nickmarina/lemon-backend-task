import { ApiModel, ApiModelProperty } from 'swagger-express-ts'
import {IDeveloperWithCheckedRevenue} from '../../domain/developers/types'

@ApiModel()
export class DeveloperDto implements IDeveloperWithCheckedRevenue {
	@ApiModelProperty()
	id: string

	@ApiModelProperty()
	firstName?: string

	@ApiModelProperty()
	lastName?: string

	@ApiModelProperty()
	email: string

	@ApiModelProperty()
	revenue?: number
}
