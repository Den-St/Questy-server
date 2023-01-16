import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Controller('avatars')
export class AvatarsController {

    @Post('uploadFile')
    @UseInterceptors(FileInterceptor('file',{
        storage:diskStorage({
            destination:'uploads/profileimages',
            filename:(req,file,callback) => {
                const id = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname).replace(' ','');
                const filename = `${file.originalname.replace(ext,'').replace(' ','')}-${id}${ext}`.replace(' ','');
                callback(null,filename);
            }
        })
    }))
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
