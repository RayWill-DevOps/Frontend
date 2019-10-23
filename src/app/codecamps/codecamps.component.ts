import { Component, OnInit } from '@angular/core';
import { CodecampService } from '../services/codecamp.service';
import { CodeCamp } from '../entities/codecamp';

@Component({
  selector: 'app-codecamps',
  templateUrl: './codecamps.component.html',
  styleUrls: ['./codecamps.component.css']
})
export class CodecampsComponent implements OnInit {

  // codecamps = [
  //   {
  //     name: 'Codecamp 1',
  //     venue: 'Glasgow'

  //   },
  //   {
  //     name: 'Codecamp 2',
  //     venue: 'Edinburgh'

  //   }
  // ];
  codecamps: CodeCamp[];

  constructor(private codecampService: CodecampService) {}

  ngOnInit() {
    this.getAllCodecamps();
  }

  getAllCodecamps(): void {
    this.codecampService.getAllCodecamps().subscribe(events => {this.codecamps = events; console.log(this.codecamps)});
  }

  deleteCodecamp(venue: any): void {
    if (confirm('Are you sure?')) {
      this.codecampService.deleteCodecamp(venue).subscribe((events) => {this.getAllCodecamps(); }, (err) => {console.log(err); });
    }
  }

}
