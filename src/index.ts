import { conversation } from '@assistant/conversation';
import * as functions from 'firebase-functions';

const app = conversation();

exports.fulfillment = functions.https.onRequest(app);
