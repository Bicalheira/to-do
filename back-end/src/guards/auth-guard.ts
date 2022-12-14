import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        const token = request.headers.authorization;

        if (!token) throw new ForbiddenException();

        try {
            const payload = verify(token?.split(" ")?.[1], 'secret');
            request.user = payload;

            return true;
        } catch (err) {
            throw new ForbiddenException();
        }
    }
}