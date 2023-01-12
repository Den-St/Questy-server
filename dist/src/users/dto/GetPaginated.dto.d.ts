import { OrderRuleT } from "src/answers/dto/getByUserIdPaginated.dto";
export declare class GetPaginatedDto {
    pageSize: number;
    page: number;
    orderRule: OrderRuleT;
    search: string;
}
