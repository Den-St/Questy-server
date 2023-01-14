export class GetByUserIdPaginatedDto {
    userId:number;
    page:number;
    orderRule:OrderRuleT;
    pageSize:number;
}

export class OrderRuleT {
    fieldName:'rating' | 'views' |
              'answersNumber' | 'createdAt' | 
              'questionsNumber' | 'followersNumber' |
              'numberOfAnswers'


    orderValue:'DESC' | 'ASC'
}