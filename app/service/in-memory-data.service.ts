import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let flights = [
      {id: 11, from: 'Toronto', to: 'Montreal', date: '12-12-2017'},
      {id: 12, name: 'Toronto', to: 'Halifax', date: '12-12-2017'}
      ];
    return {flights};
  }
}
