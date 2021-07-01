import { RcpInterceptor } from '@app/newrelic';
import { Controller, UseInterceptors } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
@UseInterceptors(RcpInterceptor)
export class AppEvent {
    @EventPattern('user_created')
    handleUserCreated(data: Record<string, unknown>) {
        console.log(data);
        // business logic
    }

    @MessagePattern('heroe.kill_dragon')
    killDragon(data: Record<string, unknown>) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    xd: 'gola'
                });
            }, 200);
        })
    }
}