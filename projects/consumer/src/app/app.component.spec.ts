import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {FilterHarness} from './filter/filter.harness';
import {AppHarness} from './app.harness';
import {FilterComponent} from './filter/filter.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let filterHarness: FilterHarness;
  let appHarness: AppHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    appHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, AppHarness);
    filterHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, FilterHarness);
  });

  it('loads harness', () => {
    expect(filterHarness).toBeTruthy();
    expect(appHarness).toBeTruthy();
  });

  it('updates displayed value after filtering', async () => {
    const expectedValue = 'some value';

    await filterHarness.setText(expectedValue);
    await filterHarness.filter();

    expect(await appHarness.filteredValue()).toBe(expectedValue);
  });
});
