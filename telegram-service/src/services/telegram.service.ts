'use strict';

import { Context, ServiceSchema } from "moleculer";

const TelegramService: ServiceSchema = {
    version: 1,
    name: 'telegram-service',
    actions: {
        async sendMessage(ctx: Context) {
            this.logger.info('Telegram Service get new Message -> ', ctx)
            return { message: 'Сообщение пришло' }
        },
    },
    async created() {
        this.logger.info('v1.TELEGRAM-SERVICE has been created');
    },
    async started() {
    },
    async stopped() {
    }
};

export default TelegramService;