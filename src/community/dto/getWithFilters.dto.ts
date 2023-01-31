import { OrderRuleT } from 'src/answers/dto/getByUserIdPaginated.dto';
export class GetWithFiltersDto {
    search:string;
    orderRule:OrderRuleT;
    page:number;
    pageSize:number;
    hashTags:string;
}