import { Component } from '@angular/core';
import { price } from '../Model/iprice';
@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
public priceCard:price[]=[
  {
    membersCategory:"Faculty/Sr.Scientific Staff",
    numberOfBooks:20,
    issuingPeriod:"30days",
    finePerDay:"5.00"
  },
  {
    membersCategory:"Research Scholar/Ph.D",
    numberOfBooks:6,
    issuingPeriod:"30days",
    finePerDay:"5.00"
  },
  {
    membersCategory:"Integrated Ph.D",
    numberOfBooks:6,
    issuingPeriod:"30days",
    finePerDay:"5.00"
  },
  {
    membersCategory:"Students (MSc. Integrated)",
    numberOfBooks:5,
    issuingPeriod:"15days",
    finePerDay:"5.00"
  },
  {
    membersCategory:"MSc. (2 Years / 3 Years)",
    numberOfBooks:5,
    issuingPeriod:"15days",
    finePerDay:"5.00"
  },
  {
    membersCategory:"Technical Staff",
    numberOfBooks:3,
    issuingPeriod:"15days",
    finePerDay:"5.00"
  },
  {
    membersCategory:"Administrative  Staff ",
    numberOfBooks:2,
    issuingPeriod:"15days",
    finePerDay:"5.00"
  },
];
}
