export class GetByUserIdPaginatedDto {
    userId:number;
    page:number;
    fieldName:'rating' | 'views' |
              'answersNumber' | 'createdAt' | 
              'questionsNumber' | 'followersNumber' |
              'numberOfAnswers'
    orderValue:'DESC' | 'ASC'
    pageSize:number;
}

export class OrderRuleT {
    fieldName:'rating' | 'views' |
              'answersNumber' | 'createdAt' | 
              'questionsNumber' | 'followersNumber' |
              'numberOfAnswers'


    orderValue:'DESC' | 'ASC'
}