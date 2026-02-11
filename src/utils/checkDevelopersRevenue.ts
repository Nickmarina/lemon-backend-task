import {IContract, IDeveloperWithCheckedRevenue, IDeveloper} from "../domain/developers/types";

export const checkDevelopersRevenue = (contracts:IContract[], developers:IDeveloper[]) => {
    const revenueMap: Record<string, number> = {};

    contracts.forEach(contract => {
        if (contract.status === 'completed') {
            if (!revenueMap[contract.developerId]) {
                revenueMap[contract.developerId] = 0;
            }
            revenueMap[contract.developerId] += contract.amount;
        }
    });

    const result: IDeveloperWithCheckedRevenue[] = developers.map(dev => ({
        ...dev,
        revenue: revenueMap[dev.id]
    }));

    return result


}