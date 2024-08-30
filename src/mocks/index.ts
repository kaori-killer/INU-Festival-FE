const initMockAPI = async (): Promise<void> => {
  const { worker } = await import('./browser');
  worker.start();
};

export default initMockAPI;
