export const LogRequestResponse = (
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  descriptor.value = async function (...args: any[]) {
    console.log(`🟢 Request to ${propertyKey}:`, JSON.stringify(args));

    try {
      const result = await originalMethod.apply(this, args);
      console.log(`✅ Response from ${propertyKey}:`, JSON.stringify(result));
      return result;
    } catch (error) {
      console.error(`❌ Error in ${propertyKey}:`, error);
      throw error;
    }
  };

  return descriptor;
};
