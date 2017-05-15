import BaseHandler from 'fresco-http-service-utilities';

class PostRequestHandler extends BaseHandler {
    handle(req, res) {
        res.json({
            response: 'ok'
        });
    }
}

export default new PostRequestHandler();