import { resolve } from 'path';

/* Required environment variables:
    PORT - process port
    DB_HOST - database url
**/

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: resolve(__dirname, '../../.env.development')});
} else {
    require('dotenv').config({ path: resolve(__dirname, '../../.env')});
}
