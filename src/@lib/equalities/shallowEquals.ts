export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (typeof objA !== typeof objB) {
    return false;
  }

  if (objA === objB) {
    return true;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }
    const sortedA = [...objA].sort();
    const sortedB = [...objB].sort();
    return sortedA.every((item, index) => item === sortedB[index]);
  }

  if (
    typeof objA === "object" &&
    typeof objB === "object" &&
    objA !== null &&
    objB !== null
  ) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(objB, key) &&
        objA[key as keyof T] === objB[key as keyof T],
    );
  }

  return objA === objB;
}
