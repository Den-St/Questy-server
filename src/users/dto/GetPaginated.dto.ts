import { OrderRuleT } from "src/answers/dto/getByUserIdPaginated.dto";

export class GetPaginatedDto {
    pageSize:number;
    page:number;
    orderRule:OrderRuleT;
    search:string;
}