import { Component, OnInit } from '@angular/core';
import { CodeCamp } from '../entities/codecamp';
import { CodecampService } from '../services/codecamp.service';

@Component({
  selector: 'app-create-codecamp',
  templateUrl: './create-codecamp.component.html',
  styleUrls: ['./create-codecamp.component.css']
})
export class CreateCodecampComponent implements OnInit {
  codecamp: CodeCamp = new CodeCamp();
  constructor(private codecampService: CodecampService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.codecampService.createCodecamp(this.codecamp).subscribe(returnedData => {
      console.log(returnedData);
      this.codecamp = new CodeCamp(); // to clear the form
    });
  }

}
