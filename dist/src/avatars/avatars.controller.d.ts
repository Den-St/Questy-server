/// <reference types="multer" />
export declare class AvatarsController {
    uploadFile(file: Express.Multer.File): {
        avatarPath: string;
    };
    get(path: any, res: any): any;
}
