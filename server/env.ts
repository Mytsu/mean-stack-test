import { resolve } from 'path';

import { config } from 'dotenv';

/* Required environment variables:
    PORT - process port
    DB_HOST - database url
**/

config({ path: resolve(__dirname, '../../.env')});
