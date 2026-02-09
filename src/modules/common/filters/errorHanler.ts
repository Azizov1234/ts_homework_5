import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)

export class HttpErrorFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx=host.switchToHttp()
        const response=ctx.getResponse()
        const request=ctx.getRequest()

        const status= exception.getStatus()

        const errorResponse=exception.getResponse()

        response.status(status).json({
            success:false,
            statusCode:status,
            path:request.url,
            error:errorResponse,
            timestamp: new Date().toISOString(),
        })
    }
}
