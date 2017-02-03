const node_uuid = require('node-uuid');

export class FNFlight {
    public id: number;
    public api_id: number;
    public state: string;
    public destination: string;
    public departure: string;
    public date: string;
    public amount: string;

    constructor() {}

    get flightId(): number {
      return this.id;
    }

    get flightAPI(): number {
        return this.api_id;
    }

    get flightDestiantion(): string {
        return this.destination;
    }

    get flightDeparture(): string {
        return this.departure;
    }

    get flightDate(): string {
      return this.date;
    }

    public getNewId(): string {
        return node_uuid.v4();
    }

  }
