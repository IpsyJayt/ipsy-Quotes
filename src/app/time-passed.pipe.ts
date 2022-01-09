import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    if (value){
      const seconds = Math.floor((+new Date()- +new Date(value))/1000);
      if(seconds<59)
      return "just now";
      const intervals:any={
        'second':1,
        'minute': 60,
        'hour':3600,
        'day': 3600*24,
        'week': 3600*24*7,
        'month': 3600*24*28,
        'year': 3600*24*365
      };
      let timeCounter;
      for(const i in intervals){
        timeCounter=Math.floor(seconds/intervals[i]);
        if(timeCounter===1 && timeCounter>0)
        {
          return timeCounter + ' '+ i +' ago'
        } else{
          return timeCounter + ' '+ i + 's ago'
        }
      }
    }
    return value
    
  }

}
