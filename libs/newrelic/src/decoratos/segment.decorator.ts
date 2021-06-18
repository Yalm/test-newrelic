import { startSegment } from 'newrelic';

export function Segment(
    options: {
        name?: string,
        record?: boolean,
    } = { record: true }
) {
    return function (
        target: Record<string, any>,
        name: string,
        descriptor: PropertyDescriptor
    ) {
        const method = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            return startSegment(
                options.name || name,
                options.record,
                () => method.apply(this, args)
            );
        }
    }
}