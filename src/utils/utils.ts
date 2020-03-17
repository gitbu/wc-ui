
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function getNumber(data: string): number {
  if (!data) return 0;

  const res = data.match(/\d+/g);

  return +res[0];
}
