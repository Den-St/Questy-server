export declare class GetPaginatedQuestions {
    hashTags: string;
    pageSize: number;
    page: number;
    fieldName: 'rating' | 'views' | 'answersNumber' | 'createdAt' | 'questionsNumber' | 'followersNumber' | 'numberOfAnswers';
    orderValue: 'DESC' | 'ASC';
    search: string;
    onlyAnswered: boolean;
}
