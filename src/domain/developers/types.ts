export interface IDeveloper {
	id: string;
	firstName?: string;
	lastName?: string;
	email: string;
}

export interface IContract {
	id: number;
	developerId: string;
	status: string;
	amount: number;
}

export interface IDeveloperWithCheckedRevenue extends IDeveloper {
	revenue?: number;
}