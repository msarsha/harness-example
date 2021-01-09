import {ComponentHarness} from '@angular/cdk/testing';

export class FilterHarness extends ComponentHarness {
  static hostSelector = 'app-filter';

  protected getButton = this.locatorFor('.filter-button');
  protected getInput = this.locatorFor('.filter-input');

  async filter(): Promise<void> {
    const button = await this.getButton();
    return button.click();
  }

  async setText(value: string): Promise<void> {
    const input = await this.getInput();
    return input.setInputValue(value);
  }

  async getText(): Promise<string> {
    const input = await this.getInput();
    return input.text();
  }
}
