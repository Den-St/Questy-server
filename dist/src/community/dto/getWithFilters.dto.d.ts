import { OrderRuleT } from 'src/answers/dto/getByUserIdPaginated.dto';
export declare class GetWithFiltersDto {
    name: string;
    orderRule: OrderRuleT;
    page: number;
    pageSize: number;
    hashTags: string;
}
