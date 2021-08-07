export const resolve = async (promise) => {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    const response = await promise;
    resolved.data = response.data;
  } catch (err) {
    console.log("errrrr", err);
    resolved.error = err.response;
  }
  return resolved;
};
