import { Injectable } from '@nestjs/common';
import {
    startSegment,
    noticeError,
    getTransaction,
    addCustomAttribute,
    startWebTransaction,
    setTransactionName,
    endTransaction
} from 'newrelic';

@Injectable()
export class NewrelicService {
    getTransaction() {
        return getTransaction();
    }

    setTransactionName(name: string) {
        setTransactionName(name);
    }

    endTransaction() {
        endTransaction();
    }

    startWebTransaction<T>(
        url: string,
        handle: (...args: any[]) => T
    ): T {
        return startWebTransaction<T>(url, handle);
    }

    startSegment<T, C extends (...args: any[]) => any>(
        name: string,
        record: boolean,
        handler: (cb?: C) => T,
        callback?: C,
    ): T {
        return startSegment(name, record, handler, callback);
    }

    captureError(
        error: Error,
        customAttributes?: { [key: string]: string | number | boolean }
    ): void {
        noticeError(error, customAttributes);
    }

    setUserContext(
        id?: string | number,
        email?: string,
        username?: string,
    ): void {
        if (id) {
            addCustomAttribute('id', id);
        }
        if (email) {
            addCustomAttribute('email', email);
        }
        if (username) {
            addCustomAttribute('username', username);
        }
    }
}
