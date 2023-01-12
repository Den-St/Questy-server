import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    try{
        const [bearer,token] = request.headers.authorization.split(' ');
        if(!token.length || !bearer.length){
            return false;
        }
        return true;
    }catch(err){
        return false;
    }
    
    
  }
}