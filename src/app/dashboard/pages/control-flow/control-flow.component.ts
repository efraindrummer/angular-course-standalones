import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  imports: [CommonModule ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'React', 'React', 'Vue']);
  public frameworks2 = signal([]);


  public toggleContent() {
    this.showContent.update(value => !value);
  }



}
