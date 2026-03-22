declare module 'vanta' {
  const Vanta: {
    CLOUDS: (options: Record<string, unknown>) => { destroy: () => void };
  };
  export default Vanta;
}
