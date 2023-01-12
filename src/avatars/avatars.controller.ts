import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';

@Controller('avatars')
export class AvatarsController {

    @Post('uploadFile')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file:Express.Multer.File) {
        console.log('asdgds',file);
        return {
            avatarPath:file.path
        }
    }


    @Get('get/:path')
    get(@Param('path') path,@Res() res) {
        return res.sendFile(join(process.cwd(),'uploads/profileimages/' + path));
    }
}
