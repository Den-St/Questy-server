import { OrderRuleT } from "src/answers/dto/getByUserIdPaginated.dto";

export class GetPaginatedDto {
    pageSize:number;
    page:number;
    fieldName:'rating' | 'views' |
              'answersNumber' | 'createdAt' | 
              'questionsNumber' | 'followersNumber' |
              'numberOfAnswers'
    orderValue:'DESC' | 'ASC';
    search:string;
}