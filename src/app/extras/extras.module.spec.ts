import { ExtrasModule } from './extras.module';

describe('ExtrasModule', () => {
  let extrasModule: ExtrasModule;

  beforeEach(() => {
    extrasModule = new ExtrasModule();
  });

  it('should create an instance', () => {
    expect(extrasModule).toBeTruthy();
  });
});
