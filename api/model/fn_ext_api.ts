
export class FNExtAPI {
    public state: string;
    public api_id: number;
    public destination: string;
    public departure: string;
    public date: string;
    public amount: string;
    public version: string;

    constructor() { }

    get API_id(): number {
        return this.api_id;
    }

    get APIDestinationPattern(): string {
        return this.destination;
    }

    get APIDeparturePattern(): string {
        return this.departure;
    }

    get APIDateString(): string {
      return this.date;
    }

    get APIversion(): string {
      return this.version;
    }

  }
