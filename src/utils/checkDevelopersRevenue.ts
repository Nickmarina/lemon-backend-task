import {IContract, IDeveloperWithCheckedRevenue, IDeveloper} from "../domain/developers/types";
import { CONTRACT_STATUS_COMPLETED } from "../constants";

export const checkDevelopersRevenue = (contracts:IContract[], developers:IDeveloper[]) => {
    const revenueMap: Record<string, number> = {};

    contracts.forEach(contract => {
        if (contract.status === CONTRACT_STATUS_COMPLETED) {
            if (!revenueMap[contract.developerId]) {
                revenueMap[contract.developerId] = 0;
            }
            revenueMap[contract.developerId] += contract.amount;
        }
    });

    const result: IDeveloperWithCheckedRevenue[] = developers.map(dev => ({
        ...dev,
        revenue: revenueMap[dev.id] || null
    }));

    return result


}