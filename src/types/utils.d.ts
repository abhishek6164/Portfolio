declare module '@/lib/utils' {
  // You can specify a type for the rest parameter if you have a specific type in mind
  export const cn: (...args: string[]) => string; // Assuming the function takes string arguments
}
