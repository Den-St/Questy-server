export declare class GetByUserIdPaginatedDto {
    userId: number;
    page: number;
    orderRule: OrderRuleT;
    pageSize: number;
}
export declare class OrderRuleT {
    fieldName: 'rating' | 'views' | 'answersNumber' | 'createdAt' | 'questionsNumber' | 'followersNumber';
    orderValue: 'DESC' | 'ASC';
}
