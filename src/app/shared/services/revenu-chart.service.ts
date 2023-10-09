import { Injectable } from '@angular/core';

export interface Complaints {
  complaint: string;

  count: number;
}

export interface ComplaintsWithPercent {
  complaint: string;

  count: number;

  cumulativePercent: number;
}

const complaintsData: Complaints[] = [
  { complaint: 'Cold pizza', count: 780 },
  { complaint: 'Not enough cheese', count: 120 },
  { complaint: 'Underbaked or Overbaked', count: 52 },
  { complaint: 'Delayed delivery', count: 1123 },
  { complaint: 'Damaged pizza', count: 321 },
  { complaint: 'Incorrect billing', count: 89 },
  { complaint: 'Wrong size delivered', count: 222 },
];


export interface Population {
  country: string;

  y014: number;

  y1564: number;

  y65: number;
}

const populationData: Population[] = [{
  country: 'China',
  y014: 233866959,
  y1564: 1170914102,
  y65: 171774113,
}, {
  country: 'India',
  y014: 373419115,
  y1564: 882520945,
  y65: 76063757,
}, {
  country: 'United States',
  y014: 60554755,
  y1564: 213172625,
  y65: 54835293,
}, {
  country: 'Indonesia',
  y014: 65715705,
  y1564: 177014815,
  y65: 18053690,
}, {
  country: 'Brazil',
  y014: 45278034,
  y1564: 144391494,
  y65: 17190842,
}, {
  country: 'Russia',
  y014: 24465156,
  y1564: 96123777,
  y65: 20412243,
}];



@Injectable({
  providedIn: 'root'
})
export class RevenuChartService {


  getComplaintsData(): ComplaintsWithPercent[] {
    const data = complaintsData.sort((a, b) => b.count - a.count);
    const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);
    let cumulativeCount = 0;
    return data.map((item, index) => {
      cumulativeCount += item.count;
      return {
        complaint: item.complaint,
        count: item.count,
        cumulativePercent: Math.round(cumulativeCount * 100 / totalCount),
      };
    });
  }

  getPopulationData(): Population[] {
    return populationData;
  }

  constructor() { }
}
