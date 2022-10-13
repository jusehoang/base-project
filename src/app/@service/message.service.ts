import { Injectable, Injector } from "@angular/core";
import { assignIn } from "lodash";
import { ModalOptions, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, Observable, Subscriber } from "rxjs";
import { SimpleBaseComponent } from "../@core/base/simple.base.component";

@Injectable({
  providedIn: 'root'
})
export class MessageService extends SimpleBaseComponent {
  private readonly messageObj$ = new BehaviorSubject<any>(null);
  private readonly messages: Message[] = [];
  constructor(injector: Injector, private readonly modalService: NzModalService) {
    super(injector);
  }

  getMessageObservable(): Observable<Message> {
    return this.messageObj$.asObservable();
  }

  showConfirm(message: Message): Observable<boolean> {
    return new Observable((subscriber) => {
      this.modalService.confirm(this.calculateModalOptions({...message, isConfirmed: true }, subscriber));
    })
  }

  showMessage(message: Message) {
    if (!message.type) {
      message.type = 'info';
    }

    const messageIsExist = this.messages.some((item) => item.content === message.content && item.type === message.type);
    if (messageIsExist) {
      return;
    }
    this.messages.push(message);
    if (this.messages.length === 1) {
      this.showModal(message);
    }
  }

  private showModal(message: Message) {
    let modalRef: NzModalRef;
    switch (message.type) {
      case 'success':
        modalRef = this.modalService.success(this.calculateModalOptions(message));
        break;
      case 'info':
        modalRef = this.modalService.info(this.calculateModalOptions(message));
        break;
      case 'error':
        modalRef = this.modalService.error(this.calculateModalOptions(message));
        break;
      case 'warning':
        modalRef = this.modalService.warning(this.calculateModalOptions(message));
        break;
      default:
        modalRef = this.modalService.info(this.calculateModalOptions(message));
        break;
    }
    this.rxSubscribe(modalRef.afterClose, () => {
      const index = this.messages.findIndex((item) => item.content === message.content && item.type === message.type);
      if (index > -1) {
        this.messages.splice(index, 1);
      }
      if (this.messages.length) {
        this.showModal(this.messages[0]);
      }
    })
  }

  calculateModalOptions(message: Message, subscriber?: Subscriber<boolean>) {
    const m: Message = assignIn({}, DEFAULT_MESSAGE, message);
    const options: ModalOptions = {
      nzTitle: m.title,
      nzContent: m.content,
      nzOkText: m.okText,
      nzCancelText: m.isConfirmed ? m.cancelText : null,
      nzCentered: true,
      nzOnOk: () => {
        if (subscriber) {
          subscriber.next(true);
          subscriber.complete();
        }
      },
      nzOnCancel: () => {
        if (subscriber) {
          subscriber.next(false);
          subscriber.complete();
        }
      }
    }
    return options;
  }
}

export interface Message {
  title?: string;
  content: string;
  type?: 'success' | 'warning' | 'error' | 'info',
  okText?: string;
  cancelText?: string;
  isConfirmed?: boolean;
}

const DEFAULT_MESSAGE: Message = {
  content: '',
  okText: 'OK',
  cancelText: 'No'
}
