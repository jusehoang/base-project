import { each, reject } from "lodash";
import { Observable, Subscription } from "rxjs";

export interface Disposable {
  dispose(): void;
}
type Contructor = new (...args: any[]) => {}
export const subscribeable = <O extends Contructor>(target: O) => {
  return class SubcribeableClass extends target implements Disposable {
    private subscriptions: Subscription[] = [];

    protected rxSubscribe<T>(observable: Observable<T>, next: (value: T) => void, error?: (err: unknown) => void, complete?: () => void): Subscription {
      const subscription = observable.subscribe({
        next,
        error,
        complete
      });
      this.subscriptions.push(subscription);
      return subscription;
    };

    protected rxUnsubscribeAll() {
      each(this.subscriptions, (subscription: Subscription) => subscription.unsubscribe());
      this.subscriptions.length = 0;
      this.subscriptions = [];
    }

    rxUnSubscribe(subscription: Subscription) {
      this.subscriptions = reject(this.subscriptions, (s: Subscription) => s === subscription);
      subscription.unsubscribe();
    }

    dispose() {
      this.rxUnsubscribeAll();
    }
  }
}

