import { IUser } from '../modules/interfaces/user.interface';
import { ListFilterPipe } from './list-filter.pipe';

fdescribe('ListFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ListFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filtered', () => {
    const pipe = new ListFilterPipe();
    const users: IUser[] = [
      { name: 'Diorgenes', email: 'diorgenes@gmail.com', wantInfo: true },
      { name: 'Laudeci', email: 'laudeci@gmail.com', wantInfo: false },
      { name: 'Deyvison', email: 'deyvison@gmail.com', wantInfo: true },
    ]

    const filtered = pipe.transform(users, 'laudeci');

    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe('Laudeci');
  });
});
