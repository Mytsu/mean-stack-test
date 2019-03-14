import { resolve } from 'path';

import { config } from 'dotenv';

/* Required environment variables:
    PORT - process port
    DB_HOST - database url
**/

if (process.env.NODE_ENV === 'development') {
    config({ path: resolve(__dirname, '../../.env.development')});
} else {
    config({ path: resolve(__dirname, '../../.env')});
}
