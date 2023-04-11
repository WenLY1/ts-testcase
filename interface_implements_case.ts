interface Subscriber {
  hasChanged(newValue: string): void;
}

class ObservedObject implements Subscriber {
  hasChanged(newValue: string): void {
    console.log('hasChanged')
  }
}
