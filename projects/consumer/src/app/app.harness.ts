import {ComponentHarness} from '@angular/cdk/testing';

export class AppHarness extends ComponentHarness {
  static hostSelector = 'app-component';

  protected getFilteredValue = this.locatorFor('.value');

  async filteredValue(): Promise<string> {
    const valueElement = await this.getFilteredValue();
    return valueElement.text();
  }
}
