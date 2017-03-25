interface Stubbable<T> {
  stub: T;
  original: T;
}
export default function stubbable<T>(target: T): T & Stubbable<T>;