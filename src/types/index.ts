function typeGaurd<T>(arg: unknown): arg is T{
  return true;
};

export { typeGaurd, };