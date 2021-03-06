import {
  Component,
  HostBinding,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector     : '[nz-input]',
  encapsulation: ViewEncapsulation.None,
  template     : ``,
  styleUrls    : [
    './style/index.less'
  ]
})
export class NzInputDirectiveComponent {
  size = 'default';
  nativeElement: HTMLElement;
  _readonly = false;
  @HostBinding(`class.ant-input-disabled`) _disabled = false;

  @Input()
  get nzSize(): string {
    return this.size;
  };

  set nzSize(value: string) {
    this.size = { large: 'lg', small: 'sm' }[ value ];
  }

  @Input()
  get nzDisabled(): boolean {
    return this._disabled;
  };

  set nzDisabled(value: boolean) {
    if (value) {
      this._render.setAttribute(this.nativeElement, 'disabled', '');
    } else {
      this._render.removeAttribute(this.nativeElement, 'disabled');
    }
    this._disabled = value;
  }

  @Input()
  get nzReadonly(): boolean {
    return this._readonly;
  };

  set nzReadonly(value: boolean) {
    if (value) {
      this._render.setAttribute(this.nativeElement, 'readonly', '');
    } else {
      this._render.removeAttribute(this.nativeElement, 'readonly');
    }
    this._readonly = value;
  }

  @HostBinding(`class.ant-input`) _nzInput = true;


  @HostBinding(`class.ant-input-lg`)
  get setLgClass(): boolean {
    return this.size === 'lg';
  };


  @HostBinding(`class.ant-input-sm`)
  get setSmClass(): boolean {
    return this.size === 'sm';
  };

  constructor(private _elementRef: ElementRef,
              private _render: Renderer2) {
    this.nativeElement = this._elementRef.nativeElement;

  }
}
