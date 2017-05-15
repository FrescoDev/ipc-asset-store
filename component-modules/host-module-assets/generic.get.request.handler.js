import BaseHandler from 'fresco-http-service-utilities';

class GetRequestHandler extends BaseHandler {
    handle(req, res) {
        res.json({
            response: 'ok'
        });
    }
}

export default new GetRequestHandler();