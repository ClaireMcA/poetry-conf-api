import express from 'express';
import bodyParser from 'body-parser';
import { router as sessionRouter } from './session.service';
import cors from 'cors';
import { initDb } from './mongo';

initDb().then(() => {
    const port = (process.env.PORT || 4200);
    const app = express();
    const corsUris = [ "http://localhost:3000"]

    app.use(cors({ origin: corsUris }))
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/api/sessions', sessionRouter);
    app.listen(port, () => console.log(`API running on localhost:${port}`));
});