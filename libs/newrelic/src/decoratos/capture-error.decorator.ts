import { noticeError, endTransaction } from "newrelic";

export function CaptureError(customAttributes?: {
  [key: string]: string | number | boolean;
}) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // save a reference to the original method
    const originalMethod = descriptor.value;

    // rewrite original method with custom wrapper
    descriptor.value = function (...args: any[]) {
      try {
        const result = originalMethod.apply(this, args);

        // check if method is asynchronous
        if (
          result &&
          typeof result.then === "function" &&
          typeof result.catch === "function"
        ) {
          // return promise
          return result.catch((error: Error) => {
            noticeError(error, customAttributes);
            endTransaction();
            throw error;
          });
        }

        // return actual result
        return result;
      } catch (error) {
        noticeError(error, customAttributes);
        endTransaction();
        throw error;
      }
    };

    return descriptor;
  };
}
