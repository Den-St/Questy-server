import { OrderRuleT } from "src/answers/dto/getByUserIdPaginated.dto";

export class GetPaginatedQuestions {
    hashTags:string;
    pageSize:number;
    page:number;
    orderRule:OrderRuleT;
    search:string;
    onlyAnswered:boolean;
}