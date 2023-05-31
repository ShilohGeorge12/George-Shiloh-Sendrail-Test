function typeGaurd<T>(_arg: unknown): _arg is T{
  return true;
}

export { typeGaurd, };