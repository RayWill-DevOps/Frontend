import { Component, OnInit } from '@angular/core';
import { CodeCamp } from '../entities/codecamp';
import { CodecampService } from '../services/codecamp.service';
import { ActivatedRoute } from '@angular/router';
import { Talk } from '../entities/talk';
import { Speaker } from '../entities/speaker';


@Component({
  selector: 'app-update-codecamp',
  templateUrl: './update-codecamp.component.html',
  styleUrls: ['./update-codecamp.component.css']
})
export class UpdateCodecampComponent implements OnInit {
  campId: any;
  codecamps: CodeCamp[];
  codecamp: CodeCamp = new CodeCamp();
  talk: Talk = new Talk();
  speaker: Speaker = new Speaker();
  speakers: Speaker[];
  constructor(private codecampService: CodecampService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCodecampById();
    this.getSpeakers();
  }

  getSpeakers() {
    this.codecampService.getSpeakers().subscribe(returnedData => {
      this.speakers = returnedData;
      console.log(returnedData);
    });
  }

  getCodecampById() {

    // get the camp ID from the URL parameters
    this.route.params.subscribe(params => {
      this.campId = params.id;
      console.log(this.campId);
    });

    this.codecampService.getCodecampById(this.campId).subscribe(codecamp => this.codecamp = codecamp);
  }

  onSubmit() {
    console.log('Submit called');
    console.log(this.codecamp);
    // this.codecamp.talks = [];
    this.codecampService.updateCodecamp(this.codecamp).subscribe(returnedData =>    console.log(returnedData) );
  }

  addTalk() {
    // get the speaker
    // for (const speaker of this.speakers) {
    //   if (speaker.speakerId === Number(select.value)) {
    //     this.speaker = speaker;
    //   }
    // }
    this.talk.speaker = this.speaker;
    console.log(this.speaker);
    this.codecampService.addTalk(this.codecamp.venue, this.talk).subscribe(talk => {
      alert('Talk Added');
      this.getCodecampById();
      this.talk = new Talk(); // clear the form
      this.speaker = new Speaker();
    });
  }

  deleteTalk(id) {
    this.codecampService.deleteTalk(id, this.codecamp.venue).subscribe(returnedData => this.getCodecampById());
  }
}


