import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../model/trainer.model';
import { Repository } from '../../model/repository';
import { AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'selector-name',
  templateUrl: 'trainerInfo.component.html',
})
export class TrainerInfoComponent implements OnInit, AfterViewInit {
  trainers: Trainer[] = [];

  constructor(private repo: Repository) {}

  ngOnInit(): void {
    this.repo.getAllTrainers().subscribe((data: Trainer[]) => {
      this.trainers = data;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('#trainerCtaCarousel').carousel({
        interval: 2000,
        ride: 'carousel',
      });
    }, 0);
  }
}
